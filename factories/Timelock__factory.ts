/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Timelock } from "../Timelock";

export class Timelock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    inputs: [],
    name: "admin_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516122f93803806122f98339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050620151808110156100aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806122c26037913960400191505060405180910390fd5b62278d00811115610106576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180612287603b913960400191505060405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055506000600360006101000a81548160ff021916908315150217905550505061210e806101796000396000f3fe6080604052600436106100e15760003560e01c80636fc1f57e1161007f578063c1a287e211610059578063c1a287e214610795578063e177246e146107c0578063f2b06537146107fb578063f851a4401461084e576100e8565b80636fc1f57e146107105780637d645fab1461073f578063b1b43ae51461076a576100e8565b80633a66f901116100bb5780633a66f9011461035a5780634dd18bf514610501578063591fcdfe146105525780636a42b8f8146106e5576100e8565b80630825f38f146100ed5780630e18b681146102ec5780632678224714610303576100e8565b366100e857005b600080fd5b610271600480360360a081101561010357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561014a57600080fd5b82018360208201111561015c57600080fd5b8035906020019184600183028401116401000000008311171561017e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156101e157600080fd5b8201836020820111156101f357600080fd5b8035906020019184600183028401116401000000008311171561021557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506108a5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b1578082015181840152602081019050610296565b50505050905090810190601f1680156102de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f857600080fd5b50610301610f81565b005b34801561030f57600080fd5b5061031861110f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036657600080fd5b506104eb600480360360a081101561037d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561045b57600080fd5b82018360208201111561046d57600080fd5b8035906020019184600183028401116401000000008311171561048f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611135565b6040518082815260200191505060405180910390f35b34801561050d57600080fd5b506105506004803603602081101561052457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114fb565b005b34801561055e57600080fd5b506106e3600480360360a081101561057557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156105bc57600080fd5b8201836020820111156105ce57600080fd5b803590602001918460018302840111640100000000831117156105f057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561065357600080fd5b82018360208201111561066557600080fd5b8035906020019184600183028401116401000000008311171561068757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611703565b005b3480156106f157600080fd5b506106fa611a4e565b6040518082815260200191505060405180910390f35b34801561071c57600080fd5b50610725611a54565b604051808215151515815260200191505060405180910390f35b34801561074b57600080fd5b50610754611a67565b6040518082815260200191505060405180910390f35b34801561077657600080fd5b5061077f611a6e565b6040518082815260200191505060405180910390f35b3480156107a157600080fd5b506107aa611a75565b6040518082815260200191505060405180910390f35b3480156107cc57600080fd5b506107f9600480360360208110156107e357600080fd5b8101908080359060200190929190505050611a7c565b005b34801561080757600080fd5b506108346004803603602081101561081e57600080fd5b8101908080359060200190929190505050611bf1565b604051808215151515815260200191505060405180910390f35b34801561085a57600080fd5b50610863611c11565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60606000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461094c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611dee6038913960400191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156109d85780820151818401526020810190506109bd565b50505050905090810190601f168015610a055780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610a3e578082015181840152602081019050610a23565b50505050905090810190601f168015610a6b5780820380516001836020036101000a031916815260200191505b509750505050505050506040516020818303038152906040528051906020012090506004600082815260200190815260200160002060009054906101000a900460ff16610b03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611f7c603d913960400191505060405180910390fd5b82610b0c611c36565b1015610b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180611e906045913960600191505060405180910390fd5b610b796212750084611c3e90919063ffffffff16565b610b81611c36565b1115610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180611e5d6033913960400191505060405180910390fd5b60006004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506060600086511415610c1857849050610cd3565b85805190602001208560405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260040182805190602001908083835b60208310610c9b5780518252602082019150602081019050602083039250610c78565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b600060608973ffffffffffffffffffffffffffffffffffffffff1689846040518082805190602001908083835b60208310610d235780518252602082019150602081019050602083039250610d00565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610d85576040519150601f19603f3d011682016040523d82523d6000602084013e610d8a565b606091505b509150915081610d9982611cc6565b90610e3f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e04578082015181840152602081019050610de9565b50505050905090810190601f168015610e315780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610ecd578082015181840152602081019050610eb2565b50505050905090810190601f168015610efa5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610f33578082015181840152602081019050610f18565b50505050905090810190601f168015610f605780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a38094505050505095945050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611027576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611fb96038913960400191505060405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c60405160405180910390a2565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806120296036913960400191505060405180910390fd5b6111f86002546111ea611c36565b611c3e90919063ffffffff16565b821015611250576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604981526020018061205f6049913960600191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156112dc5780820151818401526020810190506112c1565b50505050905090810190601f1680156113095780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015611342578082015181840152602081019050611327565b50505050905090810190601f16801561136f5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060016004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508673ffffffffffffffffffffffffffffffffffffffff16817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561144a57808201518184015260208101905061142f565b50505050905090810190601f1680156114775780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156114b0578082015181840152602081019050611495565b50505050905090810190601f1680156114dd5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a38091505095945050505050565b600360009054906101000a900460ff1615611599573073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611594576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611ff16038913960400191505060405180910390fd5b61165a565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461163e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180611f09603b913960400191505060405180910390fd5b6001600360006101000a81548160ff0219169083151502179055505b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75660405160405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117a8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611e266037913960400191505060405180910390fd5b60008585858585604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015611834578082015181840152602081019050611819565b50505050905090810190601f1680156118615780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561189a57808201518184015260208101905061187f565b50505050905090810190601f1680156118c75780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060006004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff16817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156119a2578082015181840152602081019050611987565b50505050905090810190601f1680156119cf5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015611a085780820151818401526020810190506119ed565b50505050905090810190601f168015611a355780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60025481565b600360009054906101000a900460ff1681565b62278d0081565b6201518081565b6212750081565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b00576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806120a86031913960400191505060405180910390fd5b62015180811015611b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526034815260200180611ed56034913960400191505060405180910390fd5b62278d00811115611bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611f446038913960400191505060405180910390fd5b806002819055506002547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a250565b60046020528060005260406000206000915054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600042905090565b600080828401905083811015611cbc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6060604482511015611d0f576040518060400160405280601d81526020017f5472616e73616374696f6e2072657665727465642073696c656e746c790000008152509050611de8565b600482019150818060200190516020811015611d2a57600080fd5b8101908080516040519392919084640100000000821115611d4a57600080fd5b83820191506020820185811115611d6057600080fd5b8251866001820283011164010000000082111715611d7d57600080fd5b8083526020830192505050908051906020019080838360005b83811015611db1578082015181840152602081019050611d96565b50505050905090810190601f168015611dde5780820380516001836020036101000a031916815260200191505b5060405250505090505b91905056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2046697273742063616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792e54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2ea264697066735822122040235744483335582e7adb6a871b8e9f145c623d2b6d9780461dd24caad97ebb64736f6c6343000606003354696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e";