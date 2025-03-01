import { UniswapV2AbstractTrade, UniswapV2TradeStruct } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
import { TradeType } from '../../../..';
export declare class WannaSwapAuroraTrade extends UniswapV2AbstractTrade {
    static get type(): TradeType;
    protected readonly contractAddress = "0xa3a1eF5Ae6561572023363862e238aFA84C72ef5";
    constructor(tradeStruct: UniswapV2TradeStruct);
}
