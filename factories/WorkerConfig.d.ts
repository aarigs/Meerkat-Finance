/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface WorkerConfigInterface extends ethers.utils.Interface {
  functions: {
    "acceptDebt(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isStable(address)": FunctionFragment;
    "killFactor(address,uint256)": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConfigs(address[],tuple[])": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "workFactor(address,uint256)": FunctionFragment;
    "workers(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptDebt", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isStable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "killFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConfigs",
    values: [
      string[],
      {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "workFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "workers", values: [string]): string;

  decodeFunctionResult(functionFragment: "acceptDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "killFactor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfigs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "workFactor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class WorkerConfig extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WorkerConfigInterface;

  functions: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<[boolean]>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _oracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isStable(worker: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isStable(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    "oracle()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOracle(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;
  };

  acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;

  "acceptDebt(address)"(
    worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _oracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _oracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isStable(worker: string, overrides?: CallOverrides): Promise<boolean>;

  "isStable(address)"(
    worker: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  killFactor(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "killFactor(address,uint256)"(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  "oracle()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setConfigs(
    addrs: string[],
    configs: {
      acceptDebt: boolean;
      workFactor: BigNumberish;
      killFactor: BigNumberish;
      maxPriceDiff: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setConfigs(address[],tuple[])"(
    addrs: string[],
    configs: {
      acceptDebt: boolean;
      workFactor: BigNumberish;
      killFactor: BigNumberish;
      maxPriceDiff: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOracle(
    _oracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOracle(address)"(
    _oracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  workFactor(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "workFactor(address,uint256)"(
    worker: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  workers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      acceptDebt: boolean;
      workFactor: BigNumber;
      killFactor: BigNumber;
      maxPriceDiff: BigNumber;
    }
  >;

  "workers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      acceptDebt: boolean;
      workFactor: BigNumber;
      killFactor: BigNumber;
      maxPriceDiff: BigNumber;
    }
  >;

  callStatic: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<boolean>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(_oracle: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isStable(worker: string, overrides?: CallOverrides): Promise<boolean>;

    "isStable(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    "oracle()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(_oracle: string, overrides?: CallOverrides): Promise<void>;

    "setOracle(address)"(
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        acceptDebt: boolean;
        workFactor: BigNumber;
        killFactor: BigNumber;
        maxPriceDiff: BigNumber;
      }
    >;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    acceptDebt(worker: string, overrides?: CallOverrides): Promise<BigNumber>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(_oracle: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isStable(worker: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isStable(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    "oracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOracle(_oracle: string, overrides?: Overrides): Promise<BigNumber>;

    "setOracle(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptDebt(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "acceptDebt(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _oracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isStable(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isStable(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    killFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "killFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oracle()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setConfigs(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setConfigs(address[],tuple[])"(
      addrs: string[],
      configs: {
        acceptDebt: boolean;
        workFactor: BigNumberish;
        killFactor: BigNumberish;
        maxPriceDiff: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOracle(address)"(
      _oracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    workFactor(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workFactor(address,uint256)"(
      worker: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
