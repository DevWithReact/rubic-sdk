import { InstantTradeProvider } from '../../../instant-trade-provider';
import { PriceToken } from '../../../../../core';
import { SwapCalculationOptions } from '../../../..';
import BigNumber from 'bignumber.js';
import { UniswapV3AlgebraQuoterController } from './models/uniswap-v3-algebra-quoter-controller';
import { UniswapV3AlgebraProviderConfiguration } from './models/uniswap-v3-algebra-provider-configuration';
import { PriceTokenAmount } from '../../../../../core/blockchain/tokens/price-token-amount';
import { UniswapV3AlgebraAbstractTrade, UniswapV3AlgebraTradeStruct } from './uniswap-v3-algebra-abstract-trade';
import { AlgebraTrade } from '../../polygon/algebra/algebra-trade';
import { UniswapV3TradeClass } from '../uniswap-v3-abstract/models/uniswap-v3-trade-class';
import { UniswapV3AlgebraRoute } from './models/uniswap-v3-algebra-route';
export declare abstract class UniswapV3AlgebraAbstractProvider<T extends UniswapV3AlgebraAbstractTrade = UniswapV3AlgebraAbstractTrade> extends InstantTradeProvider {
    protected abstract readonly InstantTradeClass: UniswapV3TradeClass<T> | typeof AlgebraTrade;
    protected abstract readonly quoterController: UniswapV3AlgebraQuoterController;
    protected abstract readonly providerConfiguration: UniswapV3AlgebraProviderConfiguration;
    protected readonly isRubicOptimisationEnabled: boolean;
    protected readonly gasMargin = 1.2;
    protected readonly defaultOptions: Required<SwapCalculationOptions>;
    protected abstract createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStruct, route: UniswapV3AlgebraRoute): T;
    calculate(from: PriceTokenAmount, toToken: PriceToken, options?: SwapCalculationOptions): Promise<T>;
    calculateExactOutput(fromToken: PriceToken, to: PriceTokenAmount, options?: SwapCalculationOptions): Promise<T>;
    calculateExactOutputAmount(fromToken: PriceToken, to: PriceTokenAmount, options?: SwapCalculationOptions): Promise<BigNumber>;
    private calculateDifficultTrade;
    private getRoute;
}
