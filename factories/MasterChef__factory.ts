/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MasterChef } from "../MasterChef";

export class MasterChef__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _sushi: string,
    _devaddr: string,
    _sushiPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<MasterChef> {
    return super.deploy(
      _sushi,
      _devaddr,
      _sushiPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    ) as Promise<MasterChef>;
  }
  getDeployTransaction(
    _sushi: string,
    _devaddr: string,
    _sushiPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _sushi,
      _devaddr,
      _sushiPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    );
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChef__factory {
    return super.connect(signer) as MasterChef__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SushiToken",
        name: "_sushi",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sushiPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
    ],
    name: "dev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devaddr",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrator",
    outputs: [
      {
        internalType: "contract IMigratorChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingSushi",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMigratorChef",
        name: "_migrator",
        type: "address",
      },
    ],
    name: "setMigrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sushi",
    outputs: [
      {
        internalType: "contract SushiToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sushiPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006008553480156200001657600080fd5b50604051620031e1380380620031e1833981810160405260a08110156200003c57600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050600062000087620001c760201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260048190555080600381905550816009819055505050505050620001cf565b600033905090565b61300280620001df6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063630b5ba1116100de5780638da5cb5b11610097578063b0bcf42a11610071578063b0bcf42a1461069d578063d49e77cd146106bb578063e2bbb15814610705578063f2fde38b1461073d5761018e565b80638da5cb5b1461059e5780638dbb1e3a146105e857806393f1a40b146106345761018e565b8063630b5ba11461049a57806364482f79146104a4578063715018a6146104e85780637cd07e47146104f25780638aa285501461053c5780638d88a90e1461055a5761018e565b80631eaaa0451161014b578063454b060811610125578063454b0608146103f257806348cd4cb11461042057806351eb05a61461043e5780635312ea8e1461046c5761018e565b80631eaaa0451461031c57806323cf311814610376578063441a3e70146103ba5761018e565b8063081e3eda146101935780630a087903146101b15780631526fe27146101fb57806317caf6f11461027e578063195426ec1461029c5780631aed6553146102fe575b600080fd5b61019b610781565b6040518082815260200191505060405180910390f35b6101b961078e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102276004803603602081101561021157600080fd5b81019080803590602001909291905050506107b4565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b610286610811565b6040518082815260200191505060405180910390f35b6102e8600480360360408110156102b257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610817565b6040518082815260200191505060405180910390f35b610306610a73565b6040518082815260200191505060405180910390f35b6103746004803603606081101561033257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610a79565b005b6103b86004803603602081101561038c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c53565b005b6103f0600480360360408110156103d057600080fd5b810190808035906020019092919080359060200190929190505050610d60565b005b61041e6004803603602081101561040857600080fd5b8101908080359060200190929190505050610faa565b005b610428611416565b6040518082815260200191505060405180910390f35b61046a6004803603602081101561045457600080fd5b810190808035906020019092919050505061141c565b005b6104986004803603602081101561048257600080fd5b81019080803590602001909291905050506117aa565b005b6104a26118dc565b005b6104e6600480360360608110156104ba57600080fd5b81019080803590602001909291908035906020019092919080351515906020019092919050505061190c565b005b6104f0611a57565b005b6104fa611bdf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610544611c05565b6040518082815260200191505060405180910390f35b61059c6004803603602081101561057057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0a565b005b6105a6611d11565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61061e600480360360408110156105fe57600080fd5b810190808035906020019092919080359060200190929190505050611d3a565b6040518082815260200191505060405180910390f35b6106806004803603604081101561064a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611dec565b604051808381526020018281526020019250505060405180910390f35b6106a5611e1d565b6040518082815260200191505060405180910390f35b6106c3611e23565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61073b6004803603604081101561071b57600080fd5b810190808035906020019092919080359060200190929190505050611e49565b005b61077f6004803603602081101561075357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612029565b005b6000600680549050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600681815481106107c157fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b60085481565b6000806006848154811061082757fe5b9060005260206000209060040201905060006007600086815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008260030154905060008360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561093757600080fd5b505afa15801561094b573d6000803e3d6000fd5b505050506040513d602081101561096157600080fd5b81019080805190602001909291905050509050836002015443118015610988575060008114155b15610a2357600061099d856002015443611d3a565b905060006109e06008546109d288600101546109c46004548761223690919063ffffffff16565b61223690919063ffffffff16565b6122bc90919063ffffffff16565b9050610a1e610a0f84610a0164e8d4a510008561223690919063ffffffff16565b6122bc90919063ffffffff16565b8561230690919063ffffffff16565b935050505b610a678360010154610a5964e8d4a51000610a4b86886000015461223690919063ffffffff16565b6122bc90919063ffffffff16565b61238e90919063ffffffff16565b94505050505092915050565b60035481565b610a816123d8565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8015610b5157610b506118dc565b5b60006009544311610b6457600954610b66565b435b9050610b7d8460085461230690919063ffffffff16565b600881905550600660405180608001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018381526020016000815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155505050505050565b610c5b6123d8565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d1c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060068381548110610d6f57fe5b9060005260206000209060040201905060006007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508281600001541015610e4d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f77697468647261773a206e6f7420676f6f64000000000000000000000000000081525060200191505060405180910390fd5b610e568461141c565b6000610ea08260010154610e9264e8d4a51000610e848760030154876000015461223690919063ffffffff16565b6122bc90919063ffffffff16565b61238e90919063ffffffff16565b9050610eac33826123e0565b610ec384836000015461238e90919063ffffffff16565b8260000181905550610efd64e8d4a51000610eef8560030154856000015461223690919063ffffffff16565b6122bc90919063ffffffff16565b8260010181905550610f5433858560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661269b9092919063ffffffff16565b843373ffffffffffffffffffffffffffffffffffffffff167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568866040518082815260200191505060405180910390a35050505050565b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561106f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f6d6967726174653a206e6f206d69677261746f7200000000000000000000000081525060200191505060405180910390fd5b60006006828154811061107e57fe5b9060005260206000209060040201905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561113657600080fd5b505afa15801561114a573d6000803e3d6000fd5b505050506040513d602081101561116057600080fd5b810190808051906020019092919050505090506111c0600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff166127539092919063ffffffff16565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ce5494bb846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561126357600080fd5b505af1158015611277573d6000803e3d6000fd5b505050506040513d602081101561128d57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561131d57600080fd5b505afa158015611331573d6000803e3d6000fd5b505050506040513d602081101561134757600080fd5b810190808051906020019092919050505082146113cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6d6967726174653a20626164000000000000000000000000000000000000000081525060200191505060405180910390fd5b808460000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b60095481565b60006006828154811061142b57fe5b906000526020600020906004020190508060020154431161144c57506117a7565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156114ef57600080fd5b505afa158015611503573d6000803e3d6000fd5b505050506040513d602081101561151957600080fd5b8101908080519060200190929190505050905060008114156115455743826002018190555050506117a7565b6000611555836002015443611d3a565b9050600061159860085461158a866001015461157c6004548761223690919063ffffffff16565b61223690919063ffffffff16565b6122bc90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f19600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661160f600a856122bc90919063ffffffff16565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561167857600080fd5b505af115801561168c573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561173957600080fd5b505af115801561174d573d6000803e3d6000fd5b5050505061179161177e8461177064e8d4a510008561223690919063ffffffff16565b6122bc90919063ffffffff16565b856003015461230690919063ffffffff16565b8460030181905550438460020181905550505050505b50565b6000600682815481106117b957fe5b9060005260206000209060040201905060006007600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506118703382600001548460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661269b9092919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae059583600001546040518082815260200191505060405180910390a36000816000018190555060008160010181905550505050565b6000600680549050905060008090505b81811015611908576118fd8161141c565b8060010190506118ec565b5050565b6119146123d8565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146119d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80156119e4576119e36118dc565b5b611a2982611a1b600686815481106119f857fe5b90600052602060002090600402016001015460085461238e90919063ffffffff16565b61230690919063ffffffff16565b6008819055508160068481548110611a3d57fe5b906000526020600020906004020160010181905550505050565b611a5f6123d8565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a81565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ccd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f6465763a207775743f000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006003548211611d7257611d6b600a611d5d858561238e90919063ffffffff16565b61223690919063ffffffff16565b9050611de6565b6003548310611d9557611d8e838361238e90919063ffffffff16565b9050611de6565b611de3611dad6003548461238e90919063ffffffff16565b611dd5600a611dc78760035461238e90919063ffffffff16565b61223690919063ffffffff16565b61230690919063ffffffff16565b90505b92915050565b6007602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060068381548110611e5857fe5b9060005260206000209060040201905060006007600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050611ec58461141c565b600081600001541115611f2a576000611f1c8260010154611f0e64e8d4a51000611f008760030154876000015461223690919063ffffffff16565b6122bc90919063ffffffff16565b61238e90919063ffffffff16565b9050611f2833826123e0565b505b611f7b3330858560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661295a909392919063ffffffff16565b611f9283826000015461230690919063ffffffff16565b8160000181905550611fcc64e8d4a51000611fbe8460030154846000015461223690919063ffffffff16565b6122bc90919063ffffffff16565b8160010181905550833373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15856040518082815260200191505060405180910390a350505050565b6120316123d8565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612178576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612f266026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008083141561224957600090506122b6565b600082840290508284828161225a57fe5b04146122b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612f4c6021913960400191505060405180910390fd5b809150505b92915050565b60006122fe83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612a47565b905092915050565b600080828401905083811015612384576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60006123d083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612b0d565b905092915050565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561248157600080fd5b505afa158015612495573d6000803e3d6000fd5b505050506040513d60208110156124ab57600080fd5b81019080805190602001909291905050509050808211156125b057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561256f57600080fd5b505af1158015612583573d6000803e3d6000fd5b505050506040513d602081101561259957600080fd5b810190808051906020019092919050505050612696565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561265957600080fd5b505af115801561266d573d6000803e3d6000fd5b505050506040513d602081101561268357600080fd5b8101908080519060200190929190505050505b505050565b61274e8363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612bcd565b505050565b600081148061284d575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561281057600080fd5b505afa158015612824573d6000803e3d6000fd5b505050506040513d602081101561283a57600080fd5b8101908080519060200190929190505050145b6128a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612f976036913960400191505060405180910390fd5b6129558363095ea7b360e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612bcd565b505050565b612a41846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612bcd565b50505050565b60008083118290612af3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612ab8578082015181840152602081019050612a9d565b50505050905090810190601f168015612ae55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581612aff57fe5b049050809150509392505050565b6000838311158290612bba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612b7f578082015181840152602081019050612b64565b50505050905090810190601f168015612bac5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6060612c2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612cbc9092919063ffffffff16565b9050600081511115612cb757808060200190516020811015612c5057600080fd5b8101908080519060200190929190505050612cb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612f6d602a913960400191505060405180910390fd5b5b505050565b6060612ccb8484600085612cd4565b90509392505050565b6060612cdf85612eda565b612d51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612da15780518252602082019150602081019050602083039250612d7e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612e03576040519150601f19603f3d011682016040523d82523d6000602084013e612e08565b606091505b50915091508115612e1d578092505050612ed2565b600081511115612e305780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612e97578082015181840152602081019050612e7c565b50505050905090810190601f168015612ec45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b949350505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015612f1c57506000801b8214155b9250505091905056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220332f85513a93f665c1c5b659a5fdba1f96eafccb642c348a4dd490ec53a9c46b64736f6c63430006060033";