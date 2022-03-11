import { CrossChainContractData } from '../cross-chain-contract-data/cross-chain-contract-data';
import { PancakeSwapProvider } from '../../instant-trades/dexes/bsc/pancake-swap/pancake-swap-provider';
import { UniSwapV2EthereumProvider } from '../../instant-trades/dexes/ethereum/uni-swap-v2-ethereum/uni-swap-v2-ethereum-provider';
import { QuickSwapProvider } from '../../instant-trades/dexes/polygon/quick-swap/quick-swap-provider';
import { CrossChainSupportedBlockchain } from './cross-chain-supported-blockchains';
import { SpookySwapProvider } from '../../instant-trades/dexes/fantom/spooky-swap/spooky-swap-provider';
import { JoeProvider } from '../../instant-trades/dexes/avalanche/joe/joe-provider';
import { SolarbeamProvider } from '../../instant-trades/dexes/moonriver/solarbeam/solarbeam-provider';
import { PangolinProvider } from '../../instant-trades/dexes/avalanche/pangolin/pangolin-provider';
import { SushiSwapEthereumProvider } from '../../instant-trades/dexes/ethereum/sushi-swap-ethereum/sushi-swap-ethereum-provider';
import { SushiSwapBscProvider } from '../../instant-trades/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-provider';
import { SushiSwapPolygonProvider } from '../../instant-trades/dexes/polygon/sushi-swap-polygon/sushi-swap-polygon-provider';
import { SushiSwapMoonriverProvider } from '../../instant-trades/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-provider';
import { SpiritSwapProvider } from '../../instant-trades/dexes/fantom/spirit-swap/spirit-swap-provider';
import { SushiSwapFantomProvider } from '../../instant-trades/dexes/fantom/sushi-swap-fantom/sushi-swap-fantom-provider';
import { SushiSwapAvalancheProvider } from '../../instant-trades/dexes/avalanche/sushi-swap-avalanche/sushi-swap-avalanche-provider';
import { OneinchEthereumProvider } from '../../instant-trades/dexes/ethereum/oneinch-ethereum/oneinch-ethereum-provider';
import { OneinchBscProvider } from '../../instant-trades/dexes/bsc/oneinch-bsc/oneinch-bsc-provider';
import { OneinchPolygonProvider } from '../../instant-trades/dexes/polygon/oneinch-polygon/oneinch-polygon-provider';
import { UniSwapV3EthereumProvider } from '../../instant-trades/dexes/ethereum/uni-swap-v3-ethereum/uni-swap-v3-ethereum-provider';
import { UniSwapV3PolygonProvider } from '../../instant-trades/dexes/polygon/uni-swap-v3-polygon/uni-swap-v3-polygon-provider';
import { AlgebraProvider } from '../../instant-trades/dexes/polygon/algebra/algebra-provider';
import { ViperSwapHarmonyProvider } from '../../instant-trades/dexes/harmony/viper-swap-harmony/viper-swap-harmony-provider';
import { SushiSwapHarmonyProvider } from '../../instant-trades/dexes/harmony/sushi-swap-harmony/sushi-swap-harmony-provider';
import { OneinchArbitrumProvider } from '../../instant-trades/dexes/arbitrum/oneinch-arbitrum/oneinch-arbitrum-provider';
import { SushiSwapArbitrumProvider } from '../../instant-trades/dexes/arbitrum/sushi-swap-arbitrum/sushi-swap-arbitrum-provider';
import { UniSwapV3ArbitrumProvider } from '../../instant-trades/dexes/arbitrum/uni-swap-v3-arbitrum/uni-swap-v3-arbitrum-provider';
import { WannaSwapAuroraProvider } from '../../instant-trades/dexes/aurora/wanna-swap-aurora/wanna-swap-aurora-provider';
import { TrisolarisAuroraProvider } from '../../instant-trades/dexes/aurora/trisolaris-aurora/trisolaris-aurora-provider';
/**
 * Stores contracts info.
 * Every contract may have several instant-trade providers.
 * Because of that every provider has `method suffix` - suffix
 * to add to default swap-method name to call that provider's method.
 */
export declare const crossChainContractsData: {
    readonly ETH: {
        readonly address: "0xD8b19613723215EF8CC80fC35A1428f8E8826940";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof UniSwapV2EthereumProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof SushiSwapEthereumProvider;
            readonly methodSuffix: "1";
        }, {
            readonly ProviderClass: typeof UniSwapV3EthereumProvider;
            readonly methodSuffix: "V3";
        }, {
            readonly ProviderClass: typeof OneinchEthereumProvider;
            readonly methodSuffix: "Inch";
        }];
    };
    readonly BSC: {
        readonly address: "0x70e8C8139d1ceF162D5ba3B286380EB5913098c4";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof PancakeSwapProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof SushiSwapBscProvider;
            readonly methodSuffix: "1";
        }, {
            readonly ProviderClass: typeof OneinchBscProvider;
            readonly methodSuffix: "Inch";
        }];
    };
    readonly POLYGON: {
        readonly address: "0xeC52A30E4bFe2D6B0ba1D0dbf78f265c0a119286";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof QuickSwapProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof SushiSwapPolygonProvider;
            readonly methodSuffix: "1";
        }, {
            readonly ProviderClass: typeof UniSwapV3PolygonProvider;
            readonly methodSuffix: "V3";
        }, {
            readonly ProviderClass: typeof AlgebraProvider;
            readonly methodSuffix: "ALGB";
        }, {
            readonly ProviderClass: typeof OneinchPolygonProvider;
            readonly methodSuffix: "Inch";
        }];
    };
    readonly AVALANCHE: {
        readonly address: "0x541eC7c03F330605a2176fCD9c255596a30C00dB";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof PangolinProvider;
            readonly methodSuffix: "AVAX";
        }, {
            readonly ProviderClass: typeof JoeProvider;
            readonly methodSuffix: "AVAX1";
        }, {
            readonly ProviderClass: typeof SushiSwapAvalancheProvider;
            readonly methodSuffix: "";
        }];
    };
    readonly MOONRIVER: {
        readonly address: "0xD8b19613723215EF8CC80fC35A1428f8E8826940";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof SolarbeamProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof SushiSwapMoonriverProvider;
            readonly methodSuffix: "1";
        }];
    };
    readonly FANTOM: {
        readonly address: "0xd23B4dA264A756F427e13C72AB6cA5A6C95E4608";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof SpookySwapProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof SpiritSwapProvider;
            readonly methodSuffix: "1";
        }, {
            readonly ProviderClass: typeof SushiSwapFantomProvider;
            readonly methodSuffix: "2";
        }];
    };
    readonly HARMONY: {
        readonly address: "0x5681012ccc3ec5bafefac21ce4280ad7fe22bbf2";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof SushiSwapHarmonyProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof ViperSwapHarmonyProvider;
            readonly methodSuffix: "1";
        }];
    };
    readonly ARBITRUM: {
        readonly address: "0x5F3c8d58A01Aad4f875d55E2835D82e12f99723c";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof SushiSwapArbitrumProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof UniSwapV3ArbitrumProvider;
            readonly methodSuffix: "V3";
        }, {
            readonly ProviderClass: typeof OneinchArbitrumProvider;
            readonly methodSuffix: "Inch";
        }];
    };
    readonly AURORA: {
        readonly address: "0x55Be05ecC1c417B16163b000CB71DcE8526a5D06";
        readonly providersData: readonly [{
            readonly ProviderClass: typeof TrisolarisAuroraProvider;
            readonly methodSuffix: "";
        }, {
            readonly ProviderClass: typeof WannaSwapAuroraProvider;
            readonly methodSuffix: "1";
        }];
    };
};
export declare function getCrossChainContract(blockchain: CrossChainSupportedBlockchain): CrossChainContractData;
