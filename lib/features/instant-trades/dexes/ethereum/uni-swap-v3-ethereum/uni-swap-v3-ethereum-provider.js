"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniSwapV3EthereumProvider = void 0;
var BLOCKCHAIN_NAME_1 = require("../../../../../core/blockchain/models/BLOCKCHAIN_NAME");
var uni_swap_v3_ethereum_trade_1 = require("./uni-swap-v3-ethereum-trade");
var uniswap_v3_abstract_provider_1 = require("../../common/uniswap-v3-abstract/uniswap-v3-abstract-provider");
var provider_configuration_1 = require("./constants/provider-configuration");
var router_configuration_1 = require("./constants/router-configuration");
var UniSwapV3EthereumProvider = /** @class */ (function (_super) {
    __extends(UniSwapV3EthereumProvider, _super);
    function UniSwapV3EthereumProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockchain = BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.ETHEREUM;
        _this.InstantTradeClass = uni_swap_v3_ethereum_trade_1.UniSwapV3EthereumTrade;
        _this.providerConfiguration = provider_configuration_1.UNI_SWAP_V3_ETHEREUM_PROVIDER_CONFIGURATION;
        _this.routerConfiguration = router_configuration_1.UNI_SWAP_V3_ETHEREUM_ROUTER_CONFIGURATION;
        return _this;
    }
    return UniSwapV3EthereumProvider;
}(uniswap_v3_abstract_provider_1.UniswapV3AbstractProvider));
exports.UniSwapV3EthereumProvider = UniSwapV3EthereumProvider;
//# sourceMappingURL=uni-swap-v3-ethereum-provider.js.map