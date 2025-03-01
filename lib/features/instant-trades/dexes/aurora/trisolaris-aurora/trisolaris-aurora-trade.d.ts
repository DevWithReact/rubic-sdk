import { UniswapV2AbstractTrade, UniswapV2TradeStruct } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
import { TradeType } from '../../../..';
export declare class TrisolarisAuroraTrade extends UniswapV2AbstractTrade {
    static get type(): TradeType;
    protected readonly contractAddress = "0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B";
    constructor(tradeStruct: UniswapV2TradeStruct);
}
