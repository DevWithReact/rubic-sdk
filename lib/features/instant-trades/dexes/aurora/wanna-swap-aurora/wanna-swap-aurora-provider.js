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
exports.WannaSwapAuroraProvider = void 0;
var BLOCKCHAIN_NAME_1 = require("../../../../../core/blockchain/models/BLOCKCHAIN_NAME");
var uniswap_v2_abstract_provider_1 = require("../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
var wanna_swap_aurora_trade_1 = require("./wanna-swap-aurora-trade");
var constants_1 = require("./constants");
var WannaSwapAuroraProvider = /** @class */ (function (_super) {
    __extends(WannaSwapAuroraProvider, _super);
    function WannaSwapAuroraProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockchain = BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.AURORA;
        _this.InstantTradeClass = wanna_swap_aurora_trade_1.WannaSwapAuroraTrade;
        _this.providerSettings = constants_1.WANNA_SWAP_AURORA_PROVIDER_CONFIGURATION;
        return _this;
    }
    return WannaSwapAuroraProvider;
}(uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider));
exports.WannaSwapAuroraProvider = WannaSwapAuroraProvider;
//# sourceMappingURL=wanna-swap-aurora-provider.js.map