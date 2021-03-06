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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getPrice(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPrice",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;

  events: {};
}

export class PriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PriceOracleInterface;

  functions: {
    getPrice(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
    >;

    "getPrice(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
    >;
  };

  getPrice(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
  >;

  "getPrice(address,address)"(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
  >;

  callStatic: {
    getPrice(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
    >;

    "getPrice(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { price: BigNumber; lastUpdate: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    getPrice(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPrice(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPrice(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPrice(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
