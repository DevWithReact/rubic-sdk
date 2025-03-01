import { AbstractConstructorParameters } from '../../../../../../common/utils/types/abstract-constructor-parameters';
import { Constructor } from '../../../../../../common/utils/types/constructor';
import { UniswapV3AbstractTrade } from '../uniswap-v3-abstract-trade';
export declare type UniswapV3TradeClass<T> = Constructor<AbstractConstructorParameters<typeof UniswapV3AbstractTrade>, T> & Omit<typeof UniswapV3AbstractTrade, 'constructor'>;
