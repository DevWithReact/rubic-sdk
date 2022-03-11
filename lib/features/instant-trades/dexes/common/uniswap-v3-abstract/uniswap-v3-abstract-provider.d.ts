import { TradeType } from '../../../..';
import { UniswapV3QuoterController } from './utils/quoter-controller/uniswap-v3-quoter-controller';
import { UniswapV3AbstractTrade } from './uniswap-v3-abstract-trade';
import { UniswapV3RouterConfiguration } from './models/uniswap-v3-router-configuration';
import { UniswapV3AlgebraAbstractProvider } from '../uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { UniswapV3AlgebraTradeStruct } from '../uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
import { UniswapV3Route } from './models/uniswap-v3-route';
import { UniswapV3TradeClass } from './models/uniswap-v3-trade-class';
export declare abstract class UniswapV3AbstractProvider<T extends UniswapV3AbstractTrade = UniswapV3AbstractTrade> extends UniswapV3AlgebraAbstractProvider<T> {
    protected abstract readonly InstantTradeClass: UniswapV3TradeClass<T>;
    protected abstract readonly routerConfiguration: UniswapV3RouterConfiguration<string>;
    protected readonly isRubicOptimisationEnabled: boolean;
    protected get quoterController(): UniswapV3QuoterController;
    get type(): TradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStruct, route: UniswapV3Route): T;
}
