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
exports.UniSwapV3EthereumTrade = void 0;
var features_1 = require("../../../..");
var uniswap_v3_abstract_trade_1 = require("../../common/uniswap-v3-abstract/uniswap-v3-abstract-trade");
var UniSwapV3EthereumTrade = /** @class */ (function (_super) {
    __extends(UniSwapV3EthereumTrade, _super);
    function UniSwapV3EthereumTrade(tradeStruct) {
        return _super.call(this, tradeStruct) || this;
    }
    Object.defineProperty(UniSwapV3EthereumTrade, "type", {
        get: function () {
            return features_1.TRADE_TYPE.UNI_SWAP_V3_ETHEREUM;
        },
        enumerable: false,
        configurable: true
    });
    return UniSwapV3EthereumTrade;
}(uniswap_v3_abstract_trade_1.UniswapV3AbstractTrade));
exports.UniSwapV3EthereumTrade = UniSwapV3EthereumTrade;
//# sourceMappingURL=uni-swap-v3-ethereum-trade.js.map