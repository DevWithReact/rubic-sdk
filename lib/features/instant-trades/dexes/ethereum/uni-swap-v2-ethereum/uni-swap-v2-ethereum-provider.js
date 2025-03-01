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
exports.UniSwapV2EthereumProvider = void 0;
var BLOCKCHAIN_NAME_1 = require("../../../../../core/blockchain/models/BLOCKCHAIN_NAME");
var uniswap_v2_abstract_provider_1 = require("../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
var constants_1 = require("./constants");
var uni_swap_v2_ethereum_trade_1 = require("./uni-swap-v2-ethereum-trade");
var UniSwapV2EthereumProvider = /** @class */ (function (_super) {
    __extends(UniSwapV2EthereumProvider, _super);
    function UniSwapV2EthereumProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockchain = BLOCKCHAIN_NAME_1.BLOCKCHAIN_NAME.ETHEREUM;
        _this.InstantTradeClass = uni_swap_v2_ethereum_trade_1.UniSwapV2EthereumTrade;
        _this.providerSettings = constants_1.UNISWAP_V2_ETHEREUM_PROVIDER_CONFIGURATION;
        return _this;
    }
    return UniSwapV2EthereumProvider;
}(uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider));
exports.UniSwapV2EthereumProvider = UniSwapV2EthereumProvider;
//# sourceMappingURL=uni-swap-v2-ethereum-provider.js.map