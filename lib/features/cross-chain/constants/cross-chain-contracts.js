"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCrossChainContract = exports.crossChainContractsData = void 0;
var BLOCKCHAIN_NAME_1 = require("../../../core/blockchain/models/BLOCKCHAIN_NAME");
var cross_chain_contract_data_1 = require("../cross-chain-contract-data/cross-chain-contract-data");
var pancake_swap_provider_1 = require("../../instant-trades/dexes/bsc/pancake-swap/pancake-swap-provider");
var uni_swap_v2_ethereum_provider_1 = require("../../instant-trades/dexes/ethereum/uni-swap-v2-ethereum/uni-swap-v2-ethereum-provider");
var quick_swap_provider_1 = require("../../instant-trades/dexes/polygon/quick-swap/quick-swap-provider");
var cross_chain_supported_blockchains_1 = require("./cross-chain-supported-blockchains");
var spooky_swap_provider_1 = require("../../instant-trades/dexes/fantom/spooky-swap/spooky-swap-provider");
var joe_provider_1 = require("../../instant-trades/dexes/avalanche/joe/joe-provider");
var solarbeam_provider_1 = require("../../instant-trades/dexes/moonriver/solarbeam/solarbeam-provider");
var pangolin_provider_1 = require("../../instant-trades/dexes/avalanche/pangolin/pangolin-provider");
var sushi_swap_ethereum_provider_1 = require("../../instant-trades/dexes/ethereum/sushi-swap-ethereum/sushi-swap-ethereum-provider");
var sushi_swap_bsc_provider_1 = require("../../instant-trades/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-provider");
var sushi_swap_polygon_provider_1 = require("../../instant-trades/dexes/polygon/sushi-swap-polygon/sushi-swap-polygon-provider");
var sushi_swap_moonriver_provider_1 = require("../../instant-trades/dexes/moonriver/sushi-swap-moonriver/sushi-swap-moonriver-provider");
var spirit_swap_provider_1 = require("../../instant-trades/dexes/fantom/spirit-swap/spirit-swap-provider");
var sushi_swap_fantom_provider_1 = require("../../instant-trades/dexes/fantom/sushi-swap-fantom/sushi-swap-fantom-provider");
var sushi_swap_avalanche_provider_1 = require("../../instant-trades/dexes/avalanche/sushi-swap-avalanche/sushi-swap-avalanche-provider");
var oneinch_ethereum_provider_1 = require("../../instant-trades/dexes/ethereum/oneinch-ethereum/oneinch-ethereum-provider");
var oneinch_bsc_provider_1 = require("../../instant-trades/dexes/bsc/oneinch-bsc/oneinch-bsc-provider");
var oneinch_polygon_provider_1 = require("../../instant-trades/dexes/polygon/oneinch-polygon/oneinch-polygon-provider");
var uni_swap_v3_ethereum_provider_1 = require("../../instant-trades/dexes/ethereum/uni-swap-v3-ethereum/uni-swap-v3-ethereum-provider");
var uni_swap_v3_polygon_provider_1 = require("../../instant-trades/dexes/polygon/uni-swap-v3-polygon/uni-swap-v3-polygon-provider");
var algebra_provider_1 = require("../../instant-trades/dexes/polygon/algebra/algebra-provider");
var viper_swap_harmony_provider_1 = require("../../instant-trades/dexes/harmony/viper-swap-harmony/viper-swap-harmony-provider");
var sushi_swap_harmony_provider_1 = require("../../instant-trades/dexes/harmony/sushi-swap-harmony/sushi-swap-harmony-provider");
var oneinch_arbitrum_provider_1 = require("../../instant-trades/dexes/arbitrum/oneinch-arbitrum/oneinch-arbitrum-provider");
var sushi_swap_arbitrum_provider_1 = require("../../instant-trades/dexes/arbitrum/sushi-swap-arbitrum/sushi-swap-arbitrum-provider");
var uni_swap_v3_arbitrum_provider_1 = require("../../instant-trades/dexes/arbitrum/uni-swap-v3-arbitrum/uni-swap-v3-arbitrum-provider");
var wanna_swap_aurora_provider_1 = require("../../instant-trades/dexes/aurora/wanna-swap-aurora/wanna-swap-aurora-provider");
var trisolaris_aurora_provider_1 = require("../../instant-trades/dexes/aurora/trisolaris-aurora/trisolaris-aurora-provider");
/**
 * Stores contracts info.
 * Every contract may have several instant-trade providers.
 * Because of that every provider has `method suffix` - suffix
 * to add to default swap-method name to call that provider's method.
 */
exports.crossChainContractsData = (_a = {},
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.ETHEREUM] = {
        address: '0xD8b19613723215EF8CC80fC35A1428f8E8826940',
        providersData: [
            {
                ProviderClass: uni_swap_v2_ethereum_provider_1.UniSwapV2EthereumProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: sushi_swap_ethereum_provider_1.SushiSwapEthereumProvider,
                methodSuffix: '1'
            },
            {
                ProviderClass: uni_swap_v3_ethereum_provider_1.UniSwapV3EthereumProvider,
                methodSuffix: 'V3'
            },
            {
                ProviderClass: oneinch_ethereum_provider_1.OneinchEthereumProvider,
                methodSuffix: 'Inch'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN] = {
        address: '0x70e8C8139d1ceF162D5ba3B286380EB5913098c4',
        providersData: [
            {
                ProviderClass: pancake_swap_provider_1.PancakeSwapProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: sushi_swap_bsc_provider_1.SushiSwapBscProvider,
                methodSuffix: '1'
            },
            {
                ProviderClass: oneinch_bsc_provider_1.OneinchBscProvider,
                methodSuffix: 'Inch'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.POLYGON] = {
        address: '0xeC52A30E4bFe2D6B0ba1D0dbf78f265c0a119286',
        providersData: [
            {
                ProviderClass: quick_swap_provider_1.QuickSwapProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: sushi_swap_polygon_provider_1.SushiSwapPolygonProvider,
                methodSuffix: '1'
            },
            {
                ProviderClass: uni_swap_v3_polygon_provider_1.UniSwapV3PolygonProvider,
                methodSuffix: 'V3'
            },
            {
                ProviderClass: algebra_provider_1.AlgebraProvider,
                methodSuffix: 'ALGB'
            },
            {
                ProviderClass: oneinch_polygon_provider_1.OneinchPolygonProvider,
                methodSuffix: 'Inch'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.AVALANCHE] = {
        address: '0x541eC7c03F330605a2176fCD9c255596a30C00dB',
        providersData: [
            {
                ProviderClass: pangolin_provider_1.PangolinProvider,
                methodSuffix: 'AVAX'
            },
            {
                ProviderClass: joe_provider_1.JoeProvider,
                methodSuffix: 'AVAX1'
            },
            {
                ProviderClass: sushi_swap_avalanche_provider_1.SushiSwapAvalancheProvider,
                methodSuffix: ''
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.MOONRIVER] = {
        address: '0xD8b19613723215EF8CC80fC35A1428f8E8826940',
        providersData: [
            {
                ProviderClass: solarbeam_provider_1.SolarbeamProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: sushi_swap_moonriver_provider_1.SushiSwapMoonriverProvider,
                methodSuffix: '1'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.FANTOM] = {
        address: '0xd23B4dA264A756F427e13C72AB6cA5A6C95E4608',
        providersData: [
            {
                ProviderClass: spooky_swap_provider_1.SpookySwapProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: spirit_swap_provider_1.SpiritSwapProvider,
                methodSuffix: '1'
            },
            {
                ProviderClass: sushi_swap_fantom_provider_1.SushiSwapFantomProvider,
                methodSuffix: '2'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.HARMONY] = {
        address: '0x5681012ccc3ec5bafefac21ce4280ad7fe22bbf2',
        providersData: [
            {
                ProviderClass: sushi_swap_harmony_provider_1.SushiSwapHarmonyProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: viper_swap_harmony_provider_1.ViperSwapHarmonyProvider,
                methodSuffix: '1'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.ARBITRUM] = {
        address: '0x5F3c8d58A01Aad4f875d55E2835D82e12f99723c',
        providersData: [
            {
                ProviderClass: sushi_swap_arbitrum_provider_1.SushiSwapArbitrumProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: uni_swap_v3_arbitrum_provider_1.UniSwapV3ArbitrumProvider,
                methodSuffix: 'V3'
            },
            {
                ProviderClass: oneinch_arbitrum_provider_1.OneinchArbitrumProvider,
                methodSuffix: 'Inch'
            }
        ]
    },
    _a[BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.AURORA] = {
        address: '0x55Be05ecC1c417B16163b000CB71DcE8526a5D06',
        providersData: [
            {
                ProviderClass: trisolaris_aurora_provider_1.TrisolarisAuroraProvider,
                methodSuffix: ''
            },
            {
                ProviderClass: wanna_swap_aurora_provider_1.WannaSwapAuroraProvider,
                methodSuffix: '1'
            }
        ]
    },
    _a);
var crossChainContracts = cross_chain_supported_blockchains_1.crossChainSupportedBlockchains.reduce(function (acc, blockchain) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[blockchain] = null, _a)));
}, {});
function getCrossChainContract(blockchain) {
    var storedContract = crossChainContracts[blockchain];
    if (storedContract) {
        return storedContract;
    }
    var contract = exports.crossChainContractsData[blockchain];
    crossChainContracts[blockchain] = new cross_chain_contract_data_1.CrossChainContractData(blockchain, contract.address, contract.providersData.map(function (providerData) { return ({
        provider: new providerData.ProviderClass(),
        methodSuffix: providerData.methodSuffix
    }); }));
    return crossChainContracts[blockchain];
}
exports.getCrossChainContract = getCrossChainContract;
//# sourceMappingURL=cross-chain-contracts.js.map