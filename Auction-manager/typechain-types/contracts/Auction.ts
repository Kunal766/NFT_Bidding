/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AuctionInterface extends utils.Interface {
  functions: {
    "allBids()": FunctionFragment;
    "bids(uint256)": FunctionFragment;
    "cancelAuction()": FunctionFragment;
    "creator()": FunctionFragment;
    "directBuyPrice()": FunctionFragment;
    "endTime()": FunctionFragment;
    "getAuctionState()": FunctionFragment;
    "isCancelled()": FunctionFragment;
    "isDirectBuy()": FunctionFragment;
    "maxBid()": FunctionFragment;
    "maxBidder()": FunctionFragment;
    "minIncrement()": FunctionFragment;
    "nftAddress()": FunctionFragment;
    "placeBid()": FunctionFragment;
    "startPrice()": FunctionFragment;
    "startTime()": FunctionFragment;
    "tokenId()": FunctionFragment;
    "withdrawFunds()": FunctionFragment;
    "withdrawToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allBids"
      | "bids"
      | "cancelAuction"
      | "creator"
      | "directBuyPrice"
      | "endTime"
      | "getAuctionState"
      | "isCancelled"
      | "isDirectBuy"
      | "maxBid"
      | "maxBidder"
      | "minIncrement"
      | "nftAddress"
      | "placeBid"
      | "startPrice"
      | "startTime"
      | "tokenId"
      | "withdrawFunds"
      | "withdrawToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "allBids", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bids",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "directBuyPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAuctionState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCancelled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDirectBuy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxBid", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxBidder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minIncrement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "placeBid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allBids", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "directBuyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCancelled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDirectBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxBidder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minIncrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "AuctionCancelled()": EventFragment;
    "NewBid(address,uint256)": EventFragment;
    "WithdrawFunds(address,uint256)": EventFragment;
    "WithdrawToken(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFunds"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawToken"): EventFragment;
}

export interface AuctionCancelledEventObject {}
export type AuctionCancelledEvent = TypedEvent<[], AuctionCancelledEventObject>;

export type AuctionCancelledEventFilter =
  TypedEventFilter<AuctionCancelledEvent>;

export interface NewBidEventObject {
  bidder: string;
  bid: BigNumber;
}
export type NewBidEvent = TypedEvent<[string, BigNumber], NewBidEventObject>;

export type NewBidEventFilter = TypedEventFilter<NewBidEvent>;

export interface WithdrawFundsEventObject {
  withdrawer: string;
  amount: BigNumber;
}
export type WithdrawFundsEvent = TypedEvent<
  [string, BigNumber],
  WithdrawFundsEventObject
>;

export type WithdrawFundsEventFilter = TypedEventFilter<WithdrawFundsEvent>;

export interface WithdrawTokenEventObject {
  withdrawer: string;
}
export type WithdrawTokenEvent = TypedEvent<[string], WithdrawTokenEventObject>;

export type WithdrawTokenEventFilter = TypedEventFilter<WithdrawTokenEvent>;

export interface Auction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allBids(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { sender: string; bid: BigNumber }>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    directBuyPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    endTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAuctionState(overrides?: CallOverrides): Promise<[number]>;

    isCancelled(overrides?: CallOverrides): Promise<[boolean]>;

    isDirectBuy(overrides?: CallOverrides): Promise<[boolean]>;

    maxBid(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxBidder(overrides?: CallOverrides): Promise<[string]>;

    minIncrement(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftAddress(overrides?: CallOverrides): Promise<[string]>;

    placeBid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allBids(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

  bids(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { sender: string; bid: BigNumber }>;

  cancelAuction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creator(overrides?: CallOverrides): Promise<string>;

  directBuyPrice(overrides?: CallOverrides): Promise<BigNumber>;

  endTime(overrides?: CallOverrides): Promise<BigNumber>;

  getAuctionState(overrides?: CallOverrides): Promise<number>;

  isCancelled(overrides?: CallOverrides): Promise<boolean>;

  isDirectBuy(overrides?: CallOverrides): Promise<boolean>;

  maxBid(overrides?: CallOverrides): Promise<BigNumber>;

  maxBidder(overrides?: CallOverrides): Promise<string>;

  minIncrement(overrides?: CallOverrides): Promise<BigNumber>;

  nftAddress(overrides?: CallOverrides): Promise<string>;

  placeBid(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startPrice(overrides?: CallOverrides): Promise<BigNumber>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawFunds(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allBids(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { sender: string; bid: BigNumber }>;

    cancelAuction(overrides?: CallOverrides): Promise<boolean>;

    creator(overrides?: CallOverrides): Promise<string>;

    directBuyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    getAuctionState(overrides?: CallOverrides): Promise<number>;

    isCancelled(overrides?: CallOverrides): Promise<boolean>;

    isDirectBuy(overrides?: CallOverrides): Promise<boolean>;

    maxBid(overrides?: CallOverrides): Promise<BigNumber>;

    maxBidder(overrides?: CallOverrides): Promise<string>;

    minIncrement(overrides?: CallOverrides): Promise<BigNumber>;

    nftAddress(overrides?: CallOverrides): Promise<string>;

    placeBid(overrides?: CallOverrides): Promise<boolean>;

    startPrice(overrides?: CallOverrides): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFunds(overrides?: CallOverrides): Promise<boolean>;

    withdrawToken(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "AuctionCancelled()"(): AuctionCancelledEventFilter;
    AuctionCancelled(): AuctionCancelledEventFilter;

    "NewBid(address,uint256)"(bidder?: null, bid?: null): NewBidEventFilter;
    NewBid(bidder?: null, bid?: null): NewBidEventFilter;

    "WithdrawFunds(address,uint256)"(
      withdrawer?: null,
      amount?: null
    ): WithdrawFundsEventFilter;
    WithdrawFunds(withdrawer?: null, amount?: null): WithdrawFundsEventFilter;

    "WithdrawToken(address)"(withdrawer?: null): WithdrawTokenEventFilter;
    WithdrawToken(withdrawer?: null): WithdrawTokenEventFilter;
  };

  estimateGas: {
    allBids(overrides?: CallOverrides): Promise<BigNumber>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    directBuyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    getAuctionState(overrides?: CallOverrides): Promise<BigNumber>;

    isCancelled(overrides?: CallOverrides): Promise<BigNumber>;

    isDirectBuy(overrides?: CallOverrides): Promise<BigNumber>;

    maxBid(overrides?: CallOverrides): Promise<BigNumber>;

    maxBidder(overrides?: CallOverrides): Promise<BigNumber>;

    minIncrement(overrides?: CallOverrides): Promise<BigNumber>;

    nftAddress(overrides?: CallOverrides): Promise<BigNumber>;

    placeBid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startPrice(overrides?: CallOverrides): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allBids(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bids(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    directBuyPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuctionState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCancelled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDirectBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxBidder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minIncrement(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeBid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFunds(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
