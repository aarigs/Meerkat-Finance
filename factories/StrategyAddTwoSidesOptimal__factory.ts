/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StrategyAddTwoSidesOptimal } from "../StrategyAddTwoSidesOptimal";

export class StrategyAddTwoSidesOptimal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StrategyAddTwoSidesOptimal> {
    return super.deploy(overrides || {}) as Promise<StrategyAddTwoSidesOptimal>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StrategyAddTwoSidesOptimal {
    return super.attach(address) as StrategyAddTwoSidesOptimal;
  }
  connect(signer: Signer): StrategyAddTwoSidesOptimal__factory {
    return super.connect(signer) as StrategyAddTwoSidesOptimal__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StrategyAddTwoSidesOptimal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StrategyAddTwoSidesOptimal;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f47806100206000396000f3fe60806040526004361061004e5760003560e01c8063485cc9551461005a578063b61d27f6146100cb578063c45a01551461016e578063f887ea40146101c5578063fbfa77cf1461021c57610055565b3661005557005b600080fd5b34801561006657600080fd5b506100c96004803603604081101561007d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610273565b005b61016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506104bf565b005b34801561017a57600080fd5b506101836111a1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d157600080fd5b506101da6111c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022857600080fd5b506102316111ed565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060019054906101000a900460ff16806102925750610291611213565b5b806102a957506000809054906101000a900460ff16155b6102fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611ee4602e913960400191505060405180910390fd5b60008060019054906101000a900460ff16159050801561034e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61035661122a565b8273ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561039c57600080fd5b505afa1580156103b0573d6000803e3d6000fd5b505050506040513d60208110156103c657600080fd5b8101908080519060200190929190505050606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156104ba5760008060016101000a81548160ff0219169083151502179055505b505050565b603360009054906101000a900460ff16610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6000603360006101000a81548160ff0219169083151502179055506000806000808585608081101561057257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505093509350935093506000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390585876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d60208110156106d457600080fd5b81019080805190602001909291905050509050606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663494666b685856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561079057600080fd5b505af11580156107a4573d6000803e3d6000fd5b5050505060006107d3308773ffffffffffffffffffffffffffffffffffffffff1661133190919063ffffffff16565b90506000806000808573ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561082157600080fd5b505afa158015610835573d6000803e3d6000fd5b505050506040513d606081101561084b57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808b73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156108f557600080fd5b505afa158015610909573d6000803e3d6000fd5b505050506040513d602081101561091f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614610952578284610955565b83835b915091506109838761097c8d73ffffffffffffffffffffffffffffffffffffffff166113f3565b84846114b4565b8096508197505050505050506109dd606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008973ffffffffffffffffffffffffffffffffffffffff166115159092919063ffffffff16565b610a4a606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8973ffffffffffffffffffffffffffffffffffffffff166115159092919063ffffffff16565b610a98606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008a73ffffffffffffffffffffffffffffffffffffffff166115159092919063ffffffff16565b610b05606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8a73ffffffffffffffffffffffffffffffffffffffff166115159092919063ffffffff16565b6060600267ffffffffffffffff81118015610b1f57600080fd5b50604051908082528060200260200182016040528015610b4e5781602001602082028036833780820191505090505b50905081610b5d578888610b60565b87895b82600081518110610b6d57fe5b6020026020010183600181518110610b8157fe5b602002602001018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152508273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505050606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ed17398460008430426040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b83811015610cc4578082015181840152602081019050610ca9565b505050509050019650505050505050600060405180830381600087803b158015610ced57600080fd5b505af1158015610d01573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610d2b57600080fd5b8101908080516040519392919084640100000000821115610d4b57600080fd5b83820191506020820185811115610d6157600080fd5b8251866020820283011164010000000082111715610d7e57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610db5578082015181840152602081019050610d9a565b50505050905001604052505050506000606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e8e337008b8b610e248e73ffffffffffffffffffffffffffffffffffffffff166113f3565b610e438e73ffffffffffffffffffffffffffffffffffffffff166113f3565b60008030426040518963ffffffff1660e01b8152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200198505050505050505050606060405180830381600087803b158015610f3357600080fd5b505af1158015610f47573d6000803e3d6000fd5b505050506040513d6060811015610f5d57600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250505086811015610ffc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f696e73756666696369656e74204c5020746f6b656e732072656365697665640081525060200191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338873ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561109657600080fd5b505afa1580156110aa573d6000803e3d6000fd5b505050506040513d60208110156110c057600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561113a57600080fd5b505af115801561114e573d6000803e3d6000fd5b505050506040513d602081101561116457600080fd5b810190808051906020019092919050505050505050505050505050506001603360006101000a81548160ff02191690831515021790555050505050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000803090506000813b9050600081149250505090565b600060019054906101000a900460ff16806112495750611248611213565b5b8061126057506000809054906101000a900460ff16155b6112b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611ee4602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015611305576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61130d61170e565b801561132e5760008060016101000a81548160ff0219169083151502179055505b50565b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156113b057600080fd5b505afa1580156113c4573d6000803e3d6000fd5b505050506040513d60208110156113da57600080fd5b8101908080519060200190929190505050905092915050565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561147257600080fd5b505afa158015611486573d6000803e3d6000fd5b505050506040513d602081101561149c57600080fd5b81019080805190602001909291905050509050919050565b6000806114ca848661182890919063ffffffff16565b6114dd848861182890919063ffffffff16565b106114f9576114ee868686866118ae565b91506000905061150c565b611505858785876118ae565b9150600190505b94509492505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663095ea7b38585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106115ee57805182526020820191506020810190506020830392506115cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611650576040519150601f19603f3d011682016040523d82523d6000602084013e611655565b606091505b50915091508180156116955750600081511480611694575080806020019051602081101561168257600080fd5b81019080805190602001909291905050505b5b611707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f2173616665417070726f7665000000000000000000000000000000000000000081525060200191505060405180910390fd5b5050505050565b600060019054906101000a900460ff168061172d575061172c611213565b5b8061174457506000809054906101000a900460ff16155b611799576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611ee4602e913960400191505060405180910390fd5b60008060019054906101000a900460ff1615905080156117e9576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6001603360006101000a81548160ff02191690831515021790555080156118255760008060016101000a81548160ff0219169083151502179055505b50565b60008083141561183b57600090506118a8565b600082840290508284828161184c57fe5b04146118a3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ec36021913960400191505060405180910390fd5b809150505b92915050565b60006118c3838561182890919063ffffffff16565b6118d6838761182890919063ffffffff16565b101561194a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f526576657273656400000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60006103e590506000611968856107cd61182890919063ffffffff16565b905060006119a3611982878961182890919063ffffffff16565b611995878b61182890919063ffffffff16565b611aa390919063ffffffff16565b905060006119f2876119e46119c1898c611aed90919063ffffffff16565b6119d66103e88761182890919063ffffffff16565b611b7590919063ffffffff16565b61182890919063ffffffff16565b90506000611a1c6004611a0e848861182890919063ffffffff16565b61182890919063ffffffff16565b90506000611a4d611a4883611a3a888961182890919063ffffffff16565b611aed90919063ffffffff16565b611bbf565b90506000611a648683611aa390919063ffffffff16565b90506000611a7c60028961182890919063ffffffff16565b9050611a918183611b7590919063ffffffff16565b98505050505050505050949350505050565b6000611ae583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611d3c565b905092915050565b600080828401905083811015611b6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000611bb783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611dfc565b905092915050565b600080821415611bd25760009050611d37565b60008290506000600190507001000000000000000000000000000000008210611c0457608082901c9150604081901b90505b680100000000000000008210611c2357604082901c9150602081901b90505b6401000000008210611c3e57602082901c9150601081901b90505b620100008210611c5757601082901c9150600881901b90505b6101008210611c6f57600882901c9150600481901b90505b60108210611c8657600482901c9150600281901b90505b60088210611c9657600181901b90505b6001818581611ca157fe5b048201901c90506001818581611cb357fe5b048201901c90506001818581611cc557fe5b048201901c90506001818581611cd757fe5b048201901c90506001818581611ce957fe5b048201901c90506001818581611cfb57fe5b048201901c90506001818581611d0d57fe5b048201901c90506000818581611d1f57fe5b049050808210611d2f5780611d31565b815b93505050505b919050565b6000838311158290611de9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611dae578082015181840152602081019050611d93565b50505050905090810190601f168015611ddb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611ea8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e6d578082015181840152602081019050611e52565b50505050905090810190601f168015611e9a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611eb457fe5b04905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a264697066735822122014b2ff16883d6732fbbdf5188d3a32439b7543e9444d8449da9bb190b606eb2964736f6c63430006060033";
