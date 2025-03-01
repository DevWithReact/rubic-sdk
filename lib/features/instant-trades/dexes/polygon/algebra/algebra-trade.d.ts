import { UniswapV3AlgebraAbstractTrade, UniswapV3AlgebraTradeStruct } from '../../common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
import { AlgebraRoute } from './models/algebra-route';
import { MethodData } from '../../../../../core/blockchain/web3-public/models/method-data';
import { TradeType } from '../../../..';
import { Token } from '../../../../../core';
export interface AlgebraTradeStruct extends UniswapV3AlgebraTradeStruct {
    route: AlgebraRoute;
}
export declare class AlgebraTrade extends UniswapV3AlgebraAbstractTrade {
    static get type(): TradeType;
    protected readonly contractAddress = "0x89D6B81A1Ef25894620D05ba843d83B0A296239e";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    protected readonly unwrapWethMethodName = "unwrapWNativeToken";
    private readonly route;
    readonly wrappedPath: ReadonlyArray<Token>;
    readonly path: ReadonlyArray<Token>;
    constructor(tradeStruct: AlgebraTradeStruct);
    /**
     * Returns swap `exactInput` method's name and arguments to use in Swap contract.
     */
    protected getSwapRouterExactInputMethodData(walletAddress: string): MethodData;
}
