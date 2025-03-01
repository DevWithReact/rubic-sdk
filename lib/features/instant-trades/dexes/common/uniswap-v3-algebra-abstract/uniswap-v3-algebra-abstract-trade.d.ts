import { InstantTrade } from '../../../instant-trade';
import { EncodeTransactionOptions, GasFeeInfo, SwapTransactionOptions, TradeType } from '../../../..';
import { AbiItem } from 'web3-utils';
import { PriceToken, Token } from '../../../../../core';
import { SwapOptions } from '../../../models/swap-options';
import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from '../../../../../core/blockchain/tokens/price-token-amount';
import { TransactionReceipt } from 'web3-eth';
import { MethodData } from '../../../../../core/blockchain/web3-public/models/method-data';
import { TransactionConfig } from 'web3-core';
import { UniswapV3AlgebraRoute } from './models/uniswap-v3-algebra-route';
import { Exact } from '../../../models/exact';
export interface UniswapV3AlgebraTradeStruct {
    from: PriceTokenAmount;
    to: PriceTokenAmount;
    exact: Exact;
    slippageTolerance: number;
    deadlineMinutes: number;
    gasFeeInfo?: GasFeeInfo | null;
}
export declare abstract class UniswapV3AlgebraAbstractTrade extends InstantTrade {
    protected static get contractAbi(): AbiItem[];
    protected static get contractAddress(): string;
    static get type(): TradeType;
    static estimateGasLimitForRoute(fromToken: PriceToken, toToken: PriceToken, exact: Exact, weiAmount: BigNumber, options: Required<SwapOptions>, route: UniswapV3AlgebraRoute): Promise<BigNumber>;
    static estimateGasLimitForRoutes(fromToken: PriceToken, toToken: PriceToken, exact: Exact, weiAmount: BigNumber, options: Required<SwapOptions>, routes: UniswapV3AlgebraRoute[]): Promise<BigNumber[]>;
    private static getEstimateGasParams;
    protected abstract readonly contractAbi: AbiItem[];
    protected abstract readonly unwrapWethMethodName: 'unwrapWETH9' | 'unwrapWNativeToken';
    readonly from: PriceTokenAmount;
    readonly to: PriceTokenAmount;
    protected readonly exact: Exact;
    readonly gasFeeInfo: GasFeeInfo | null;
    slippageTolerance: number;
    deadlineMinutes: number;
    abstract readonly path: ReadonlyArray<Token>;
    get type(): TradeType;
    protected get deadlineMinutesTimestamp(): number;
    private get defaultEstimatedGas();
    protected constructor(tradeStruct: UniswapV3AlgebraTradeStruct);
    protected getAmountParams(): [string, string];
    /**
     * Returns swap `exactInput` method's name and arguments to use in `swap contract`.
     */
    protected abstract getSwapRouterExactInputMethodData(walletAddress: string): MethodData;
    swap(options?: SwapTransactionOptions): Promise<TransactionReceipt>;
    encode(options?: EncodeTransactionOptions): Promise<TransactionConfig>;
    private getSwapRouterMethodData;
    /**
     * Returns encoded data of estimated gas function and default estimated gas.
     */
    private getEstimateGasParams;
}
