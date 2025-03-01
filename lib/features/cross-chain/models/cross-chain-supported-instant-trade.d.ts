import { OneinchAbstractProvider, OneinchTrade, UniswapV2AbstractProvider, UniswapV2AbstractTrade } from '../..';
import { UniswapV3AbstractTrade } from '../../instant-trades/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade';
import { AlgebraTrade } from '../../instant-trades/dexes/polygon/algebra/algebra-trade';
import { UniswapV3AbstractProvider } from '../../instant-trades/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
import { AlgebraProvider } from '../../instant-trades/dexes/polygon/algebra/algebra-provider';
export declare type CrossChainSupportedInstantTradeProvider = UniswapV2AbstractProvider | OneinchAbstractProvider | UniswapV3AbstractProvider | AlgebraProvider;
export declare type CrossChainSupportedInstantTrade = UniswapV2AbstractTrade | OneinchTrade | UniswapV3AbstractTrade | AlgebraTrade;
