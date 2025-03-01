import { UniswapV3Route } from './models/uniswap-v3-route';
import { MethodData } from '../../../../../core/blockchain/web3-public/models/method-data';
import { Token } from '../../../../../core/blockchain/tokens/token';
import { UniswapV3AlgebraAbstractTrade, UniswapV3AlgebraTradeStruct } from '../uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
export interface UniswapV3TradeStruct extends UniswapV3AlgebraTradeStruct {
    route: UniswapV3Route;
}
export declare abstract class UniswapV3AbstractTrade extends UniswapV3AlgebraAbstractTrade {
    protected readonly contractAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
    protected readonly contractAbi: import("web3-utils").AbiItem[];
    protected readonly unwrapWethMethodName = "unwrapWETH9";
    readonly route: UniswapV3Route;
    get path(): ReadonlyArray<Token>;
    protected constructor(tradeStruct: UniswapV3TradeStruct);
    /**
     * Returns swap `exactInput` method's name and arguments to use in Swap contract.
     */
    protected getSwapRouterExactInputMethodData(walletAddress: string): MethodData;
}
