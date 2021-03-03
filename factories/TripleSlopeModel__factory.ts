/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TripleSlopeModel } from "../TripleSlopeModel";

export class TripleSlopeModel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TripleSlopeModel> {
    return super.deploy(overrides || {}) as Promise<TripleSlopeModel>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TripleSlopeModel {
    return super.attach(address) as TripleSlopeModel;
  }
  connect(signer: Signer): TripleSlopeModel__factory {
    return super.connect(signer) as TripleSlopeModel__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TripleSlopeModel {
    return new Contract(address, _abi, signerOrProvider) as TripleSlopeModel;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "floating",
        type: "uint256",
      },
    ],
    name: "getInterestRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610592806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c6dfa13f14610030575b600080fd5b6100666004803603604081101561004657600080fd5b81019080803590602001909291908035906020019092919050505061007c565b6040518082815260200191505060405180910390f35b6000808314801561008d5750600082145b1561009b576000905061020d565b60006100b0838561021390919063ffffffff16565b905060006100e2826100d468056bc75e2d631000008861029b90919063ffffffff16565b61032190919063ffffffff16565b90506804563918244f400000811015610141576301e133806101306804563918244f40000061012267016345785d8a00008561029b90919063ffffffff16565b61032190919063ffffffff16565b8161013757fe5b049250505061020d565b6804e1003b28d9280000811015610171576301e1338067016345785d8a00008161016757fe5b049250505061020d565b68056bc75e2d631000008110156101f2576301e133806101d7678ac7230489e800006101c96706f05b59d3b200006101bb6804e1003b28d92800008761036b90919063ffffffff16565b61029b90919063ffffffff16565b61032190919063ffffffff16565b67016345785d8a000001816101e857fe5b049250505061020d565b6301e133806706f05b59d3b200008161020757fe5b04925050505b92915050565b600080828401905083811015610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000808314156102ae576000905061031b565b60008284029050828482816102bf57fe5b0414610316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061053c6021913960400191505060405180910390fd5b809150505b92915050565b600061036383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506103b5565b905092915050565b60006103ad83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061047b565b905092915050565b60008083118290610461576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561042657808201518184015260208101905061040b565b50505050905090810190601f1680156104535780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161046d57fe5b049050809150509392505050565b6000838311158290610528576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104ed5780820151818401526020810190506104d2565b50505050905090810190601f16801561051a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220156634a4d657bb537dbed461724c5f44128473a5cd6f73ffa4554f4f1bbe99da64736f6c63430006060033";
