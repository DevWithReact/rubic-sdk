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
exports.UniSwapV3ArbitrumProvider = void 0;
var BLOCKCHAIN_NAME_1 = require("../../../../../core/blockchain/models/BLOCKCHAIN_NAME");
var uniswap_v3_abstract_provider_1 = require("../../common/uniswap-v3-abstract/uniswap-v3-abstract-provider");
var uni_swap_v3_arbitrum_trade_1 = require("./uni-swap-v3-arbitrum-trade");
var provider_configuration_1 = require("./constants/provider-configuration");
var router_configuration_1 = require("./constants/router-configuration");
var UniSwapV3ArbitrumProvider = /** @class */ (function (_super) {
    __extends(UniSwapV3ArbitrumProvider, _super);
    function UniSwapV3ArbitrumProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockchain = BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.ARBITRUM;
        _this.InstantTradeClass = uni_swap_v3_arbitrum_trade_1.UniSwapV3ArbitrumTrade;
        _this.providerConfiguration = provider_configuration_1.UNI_SWAP_V3_ARBITRUM_PROVIDER_CONFIGURATION;
        _this.routerConfiguration = router_configuration_1.UNI_SWAP_V3_ARBITRUM_ROUTER_CONFIGURATION;
        return _this;
    }
    return UniSwapV3ArbitrumProvider;
}(uniswap_v3_abstract_provider_1.UniswapV3AbstractProvider));
exports.UniSwapV3ArbitrumProvider = UniSwapV3ArbitrumProvider;
//# sourceMappingURL=uni-swap-v3-arbitrum-provider.js.map