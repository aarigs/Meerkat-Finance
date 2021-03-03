pragma solidity 0.6.6;

import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/Initializable.sol";

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";

import "../../apis/uniswap/IUniswapV2Router02.sol";
import "../../interfaces/IStrategy.sol";
import "../../interfaces/IVault.sol";
import "../../../utils/SafeToken.sol";
import "../../../utils/MeerkatMath.sol";

contract StrategyAddTwoSidesOptimal is ReentrancyGuardUpgradeSafe, IStrategy {
  using SafeToken for address;
  using SafeMath for uint256;

  IUniswapV2Factory public factory;
  IUniswapV2Router02 public router;
  IVault public vault;

  /// @dev Create a new add two-side optimal strategy instance.
  /// @param _router The Uniswap router smart contract.
  function initialize(IUniswapV2Router02 _router, IVault _vault) public initializer {
    ReentrancyGuardUpgradeSafe.__ReentrancyGuard_init();

    factory = IUniswapV2Factory(_router.factory());
    router = _router;
    vault = _vault;
  }

  /// @dev Compute optimal deposit amount
  /// @param amtA amount of token A desired to deposit
  /// @param amtB amonut of token B desired to deposit
  /// @param resA amount of token A in reserve
  /// @param resB amount of token B in reserve
  function optimalDeposit(
    uint256 amtA,
    uint256 amtB,
    uint256 resA,
    uint256 resB
  ) internal pure returns (uint256 swapAmt, bool isReversed) {
    if (amtA.mul(resB) >= amtB.mul(resA)) {
      swapAmt = _optimalDepositA(amtA, amtB, resA, resB);
      isReversed = false;
    } else {
      swapAmt = _optimalDepositA(amtB, amtA, resB, resA);
      isReversed = true;
    }
  }

  /// @dev Compute optimal deposit amount helper
  /// @param amtA amount of token A desired to deposit
  /// @param amtB amonut of token B desired to deposit
  /// @param resA amount of token A in reserve
  /// @param resB amount of token B in reserve
  function _optimalDepositA(
    uint256 amtA,
    uint256 amtB,
    uint256 resA,
    uint256 resB
  ) internal pure returns (uint256) {
    require(amtA.mul(resB) >= amtB.mul(resA), "Reversed");

    uint256 a = 997;
    uint256 b = uint256(1997).mul(resA);
    uint256 _c = (amtA.mul(resB)).sub(amtB.mul(resA));
    uint256 c = _c.mul(1000).div(amtB.add(resB)).mul(resA);

    uint256 d = a.mul(c).mul(4);
    uint256 e = MeerkatMath.sqrt(b.mul(b).add(d));

    uint256 numerator = e.sub(b);
    uint256 denominator = a.mul(2);

    return numerator.div(denominator);
  }

  /// @dev Execute worker strategy. Take LP tokens + ETH. Return LP tokens + ETH.
  /// @param data Extra calldata information passed along to this strategy.
  function execute(address /* user */, uint256, /* debt */ bytes calldata data) external override payable nonReentrant
  {
    // 1. Find out what farming token we are dealing with.
    (
        address baseToken,
        address farmingToken,
        uint256 farmingTokenAmount,
        uint256 minLPAmount
    ) = abi.decode(data, (address, address, uint256, uint256));
    IUniswapV2Pair lpToken = IUniswapV2Pair(factory.getPair(farmingToken, baseToken));
    // 2. Compute the optimal amount of BaseToken and FarmingToken to be converted.
    vault.requestFunds(farmingToken, farmingTokenAmount);
    uint256 baseTokenBalance = baseToken.balanceOf(address(this));
    uint256 swapAmt;
    bool isReversed;
    {
      (uint256 r0, uint256 r1, ) = lpToken.getReserves();
      (uint256 baseTokenReserve, uint256 farmingTokenReserve) = lpToken.token0() == baseToken ? (r0, r1) : (r1, r0);
      (swapAmt, isReversed) = optimalDeposit(baseTokenBalance, farmingToken.myBalance(), baseTokenReserve, farmingTokenReserve);
    }
    // 3. Convert between BaseToken and farming tokens
    farmingToken.safeApprove(address(router), 0);
    farmingToken.safeApprove(address(router), uint256(-1));
    baseToken.safeApprove(address(router), 0);
    baseToken.safeApprove(address(router), uint256(-1));
    address[] memory path = new address[](2);
    (path[0], path[1]) = isReversed ? (farmingToken, baseToken) : (baseToken, farmingToken);
    // 4. Swap according to path
    router.swapExactTokensForTokens(swapAmt, 0, path, address(this), now);
    // 5. Mint more LP tokens and return all LP tokens to the sender.
    (,, uint256 moreLPAmount) = router.addLiquidity(
      baseToken, farmingToken, baseToken.myBalance(), farmingToken.myBalance(), 0, 0, address(this), now
    );
    require(moreLPAmount >= minLPAmount, "insufficient LP tokens received");
    lpToken.transfer(msg.sender, lpToken.balanceOf(address(this)));
  }

  receive() external payable {}
}
