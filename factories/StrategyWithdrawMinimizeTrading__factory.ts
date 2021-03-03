/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StrategyWithdrawMinimizeTrading } from "../StrategyWithdrawMinimizeTrading";

export class StrategyWithdrawMinimizeTrading__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StrategyWithdrawMinimizeTrading> {
    return super.deploy(
      overrides || {}
    ) as Promise<StrategyWithdrawMinimizeTrading>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StrategyWithdrawMinimizeTrading {
    return super.attach(address) as StrategyWithdrawMinimizeTrading;
  }
  connect(signer: Signer): StrategyWithdrawMinimizeTrading__factory {
    return super.connect(signer) as StrategyWithdrawMinimizeTrading__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StrategyWithdrawMinimizeTrading {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StrategyWithdrawMinimizeTrading;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debt",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506117bd806100206000396000f3fe6080604052600436106100435760003560e01c8063b61d27f61461004f578063c45a0155146100f2578063c4d66de814610149578063f887ea401461019a5761004a565b3661004a57005b600080fd5b6100f06004803603606081101561006557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100ac57600080fd5b8201836020820111156100be57600080fd5b803590602001918460018302840111640100000000831117156100e057600080fd5b90919293919293905050506101f1565b005b3480156100fe57600080fd5b50610107610cec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015557600080fd5b506101986004803603602081101561016c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d12565b005b3480156101a657600080fd5b506101af610f1c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b603360009054906101000a900460ff16610273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6000603360006101000a81548160ff0219169083151502179055506000806000848460608110156102a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050509250925092506000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390584866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156103cf57600080fd5b505afa1580156103e3573d6000803e3d6000fd5b505050506040513d60208110156103f957600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156104d557600080fd5b505af11580156104e9573d6000803e3d6000fd5b505050506040513d60208110156104ff57600080fd5b810190808051906020019092919050505050606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663baa2abde85858473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156105ce57600080fd5b505afa1580156105e2573d6000803e3d6000fd5b505050506040513d60208110156105f857600080fd5b810190808051906020019092919050505060008030426040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019750505050505050506040805180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b505050506040513d604081101561071b57600080fd5b81019080805190602001909291908051906020019092919050505050506060600267ffffffffffffffff8111801561075257600080fd5b506040519080825280602002602001820160405280156107815781602001602082028036833780820191505090505b509050838160008151811061079257fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816001815181106107da57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050610862606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008673ffffffffffffffffffffffffffffffffffffffff16610f429092919063ffffffff16565b6108cf606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff16610f429092919063ffffffff16565b61091d606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008773ffffffffffffffffffffffffffffffffffffffff16610f429092919063ffffffff16565b61098a606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8773ffffffffffffffffffffffffffffffffffffffff16610f429092919063ffffffff16565b60006109ab8673ffffffffffffffffffffffffffffffffffffffff1661113b565b905080891115610bc45760006109ca828b6111fc90919063ffffffff16565b9050606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638803dbee82610a2a8973ffffffffffffffffffffffffffffffffffffffff1661113b565b8630426040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b83811015610ac3578082015181840152602081019050610aa8565b505050509050019650505050505050600060405180830381600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610b2a57600080fd5b8101908080516040519392919084640100000000821115610b4a57600080fd5b83820191506020820185811115610b6057600080fd5b8251866020820283011164010000000082111715610b7d57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610bb4578082015181840152602081019050610b99565b5050505090500160405250505050505b6000610be58773ffffffffffffffffffffffffffffffffffffffff1661113b565b9050610c1233828973ffffffffffffffffffffffffffffffffffffffff166112469092919063ffffffff16565b6000610c338773ffffffffffffffffffffffffffffffffffffffff1661113b565b905085811015610c8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117386022913960400191505060405180910390fd5b6000811115610cc357610cc28c828973ffffffffffffffffffffffffffffffffffffffff166112469092919063ffffffff16565b5b50505050505050506001603360006101000a81548160ff02191690831515021790555050505050565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900460ff1680610d315750610d3061143f565b5b80610d4857506000809054906101000a900460ff16155b610d9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061175a602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015610ded576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610df5611456565b8173ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015610e3b57600080fd5b505afa158015610e4f573d6000803e3d6000fd5b505050506040513d6020811015610e6557600080fd5b8101908080519060200190929190505050606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015610f185760008060016101000a81548160ff0219169083151502179055505b5050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060608473ffffffffffffffffffffffffffffffffffffffff1663095ea7b38585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061101b5780518252602082019150602081019050602083039250610ff8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461107d576040519150601f19603f3d011682016040523d82523d6000602084013e611082565b606091505b50915091508180156110c257506000815114806110c157508080602001905160208110156110af57600080fd5b81019080805190602001909291905050505b5b611134576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f2173616665417070726f7665000000000000000000000000000000000000000081525060200191505060405180910390fd5b5050505050565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111ba57600080fd5b505afa1580156111ce573d6000803e3d6000fd5b505050506040513d60208110156111e457600080fd5b81019080805190602001909291905050509050919050565b600061123e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155d565b905092915050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061131f57805182526020820191506020810190506020830392506112fc565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611381576040519150601f19603f3d011682016040523d82523d6000602084013e611386565b606091505b50915091508180156113c657506000815114806113c557508080602001905160208110156113b357600080fd5b81019080805190602001909291905050505b5b611438576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f21736166655472616e736665720000000000000000000000000000000000000081525060200191505060405180910390fd5b5050505050565b6000803090506000813b9050600081149250505090565b600060019054906101000a900460ff1680611475575061147461143f565b5b8061148c57506000809054906101000a900460ff16155b6114e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061175a602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015611531576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61153961161d565b801561155a5760008060016101000a81548160ff0219169083151502179055505b50565b600083831115829061160a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115cf5780820151818401526020810190506115b4565b50505050905090810190601f1680156115fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600060019054906101000a900460ff168061163c575061163b61143f565b5b8061165357506000809054906101000a900460ff16155b6116a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061175a602e913960400191505060405180910390fd5b60008060019054906101000a900460ff1615905080156116f8576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6001603360006101000a81548160ff02191690831515021790555080156117345760008060016101000a81548160ff0219169083151502179055505b5056fe696e73756666696369656e742071756f746520746f6b656e73207265636569766564436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a26469706673582212208ad6d63e86886c7b5fa4f95c33b96f576633496d8bb7a3d88ef4f5ba9fe5de4e64736f6c63430006060033";
