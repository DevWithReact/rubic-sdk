import { AbstractConstructorParameters } from '@common/utils/types/abstract-constructor-parameters';
import { Constructor } from '@common/utils/types/constructor';
import { UniswapV2AbstractTrade } from '@features/swap/trades/common/uniswap-v2/uniswap-v2-abstract-trade';

export type UniswapV2TradeClass<T> = Constructor<
    AbstractConstructorParameters<typeof UniswapV2AbstractTrade>,
    T
> &
    Omit<typeof UniswapV2AbstractTrade, 'constructor'>;
