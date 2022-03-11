import { TradeType } from '../../../..';
import { UniswapV3AbstractTrade, UniswapV3TradeStruct } from '../../common/uniswap-v3-abstract/uniswap-v3-abstract-trade';
export declare class UniSwapV3ArbitrumTrade extends UniswapV3AbstractTrade {
    static get type(): TradeType;
    constructor(tradeStruct: UniswapV3TradeStruct);
}
