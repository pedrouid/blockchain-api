import fastify from "fastify";
import { IncomingMessage, ServerResponse } from "http";

export interface AssetMetadata {
  symbol: string;
  name: string;
  decimals: string;
}

export interface ChainConfig {
  name: string;
  chainId: string;
  rpcUrl: string;
  derivationPath: string;
  nativeAsset: AssetMetadata;
}

export interface NamespaceConfig {
  [reference: string]: ChainConfig;
}

export interface SupportedChains {
  [chainId: string]: ChainConfig;
}

export declare namespace Ethereum {
  export interface AssetData {
    symbol: string;
    name: string;
    decimals: string;
    contractAddress: string;
    balance?: string;
  }

  export interface ChainData {
    name: string;
    short_name: string;
    chain: string;
    network: string;
    chain_id: number;
    network_id: number;
    rpc_url: string;
    native_currency: AssetData;
  }

  export interface TxData {
    from: string;
    to: string;
    nonce: string;
    gasPrice: string;
    gasLimit: string;
    value: string;
    data: string;
  }

  export interface BlockScoutTx {
    value: string;
    txreceipt_status: string;
    transactionIndex: string;
    to: string;
    timeStamp: string;
    nonce: string;
    isError: string;
    input: string;
    hash: string;
    gasUsed: string;
    gasPrice: string;
    gas: string;
    from: string;
    cumulativeGasUsed: string;
    contractAddress: string;
    confirmations: string;
    blockNumber: string;
    blockHash: string;
  }

  export interface BlockScoutTokenTx {
    value: string;
    transactionIndex: string;
    tokenSymbol: string;
    tokenName: string;
    tokenDecimal: string;
    to: string;
    timeStamp: string;
    nonce: string;
    input: string;
    hash: string;
    gasUsed: string;
    gasPrice: string;
    gas: string;
    from: string;
    cumulativeGasUsed: string;
    contractAddress: string;
    confirmations: string;
    blockNumber: string;
    blockHash: string;
  }

  export interface ParsedTx {
    timestamp: string;
    hash: string;
    from: string;
    to: string;
    nonce: string;
    gasPrice: string;
    gasUsed: string;
    fee: string;
    value: string;
    input: string;
    error: boolean;
    asset: AssetData;
    operations: TxOperation[];
  }

  export interface TxOperation {
    asset: AssetData;
    value: string;
    from: string;
    to: string;
    functionName: string;
  }

  export interface GasPricesResponse {
    fastWait: number;
    avgWait: number;
    blockNum: number;
    fast: number;
    fastest: number;
    fastestWait: number;
    safeLow: number;
    safeLowWait: number;
    speed: number;
    block_time: number;
    average: number;
  }

  export interface GasPrice {
    time: number;
    price: number;
  }

  export interface GasPrices {
    timestamp: number;
    slow: GasPrice;
    average: GasPrice;
    fast: GasPrice;
  }

  export interface GasGuzzlerRaw {
    to_address: string;
    gasused: number;
    pcttot: number;
    ID: string;
  }

  export type IGasGuzzlerResponse = GasGuzzlerRaw[];

  export interface GasGuzzler {
    address: string;
    pct: number;
    gasused: number;
    id: string;
  }

  export interface MethodArgument {
    type: string;
  }

  export interface Method {
    signature: string;
    name: string;
    args: MethodArgument[];
  }
}
export type FastifyRequest = fastify.FastifyRequest<
  IncomingMessage,
  fastify.DefaultQuery,
  fastify.DefaultParams,
  fastify.DefaultHeaders,
  any
>;

export type FastifyResponse = fastify.FastifyReply<ServerResponse>;
