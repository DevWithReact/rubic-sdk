import { JoeProvider } from '@features/swap/dexes/avalanche/joe/joe-provider';
import { SushiSwapEthereumProvider } from '@features/swap/dexes/ethereum/sushi-swap-ethereum/sushi-swap-ethereum-provider';
import { SpookySwapProvider } from '@features/swap/dexes/fantom/spooky-swap/spooky-swap-provider';
import { PancakeSwapProvider } from '@features/swap/dexes/bsc/pancake-swap/pancake-swap-provider';
import { SushiSwapBscProvider } from '@features/swap/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-provider';
import { QuickSwapProvider } from '@features/swap/dexes/polygon/quick-swap/quick-swap-provider';
import { SpiritSwapProvider } from '@features/swap/dexes/fantom/spirit-swap/spirit-swap-provider';
import { SolarbeamProvider } from '@features/swap/dexes/moonriver/solarbeam/solarbeam-provider';
import { UniSwapV2Provider } from '@features/swap/dexes/ethereum/uni-swap-v2/uni-swap-v2-provider';
import { SushiSwapHarmonyProvider } from '@features/swap/dexes/harmony/sushi-swap-harmony/sushi-swap-harmony-provider';
import { PangolinProvider } from '@features/swap/dexes/avalanche/pangolin/pangolin-provider';
import { SushiSwapPolygonProvider } from '@features/swap/dexes/polygon/sushi-swap-polygon/sushi-swap-polygon-provider';
import { SushiSwapAvalancheProvider } from '@features/swap/dexes/avalanche/sushi-swap-avalanche/sushi-swap-avalanche-provider';
import { SushiSwapFantomProvider } from '@features/swap/dexes/fantom/sushi-swap-fantom/sushi-swap-fantom-provider';
import { SushiSwapMoonriverProvider } from '@features/swap/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-provider';

export const uniswapV2TradeProviders = [
    UniSwapV2Provider,
    SushiSwapEthereumProvider,
    PancakeSwapProvider,
    SushiSwapBscProvider,
    QuickSwapProvider,
    SushiSwapPolygonProvider,
    JoeProvider,
    PangolinProvider,
    SushiSwapAvalancheProvider,
    SpiritSwapProvider,
    SpookySwapProvider,
    SushiSwapFantomProvider,
    SushiSwapHarmonyProvider,
    SolarbeamProvider,
    SushiSwapMoonriverProvider
];
