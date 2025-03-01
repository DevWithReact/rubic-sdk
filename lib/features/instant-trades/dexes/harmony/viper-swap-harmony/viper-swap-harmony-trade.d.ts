import { UniswapV2AbstractTrade, UniswapV2TradeStruct } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-trade';
import { TradeType } from '../../../..';
export declare class ViperSwapHarmonyTrade extends UniswapV2AbstractTrade {
    static get type(): TradeType;
    protected readonly contractAddress = "0xf012702a5f0e54015362cBCA26a26fc90AA832a3";
    constructor(tradeStruct: UniswapV2TradeStruct);
}
