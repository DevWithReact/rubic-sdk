"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAlgebraTrade = exports.isZrxLikeTradeLikeTrade = exports.isOneInchLikeTrade = exports.isUniswapV3LikeTrade = exports.isUniswapV2LikeTrade = void 0;
var uniswap_v2_abstract_trade_1 = require("../dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
var oneinch_trade_1 = require("../dexes/common/oneinch-common/oneinch-trade");
var zrx_trade_1 = require("../dexes/common/zrx-common/zrx-trade");
var uniswap_v3_abstract_trade_1 = require("../dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade");
var algebra_trade_1 = require("../dexes/polygon/algebra/algebra-trade");
function isUniswapV2LikeTrade(trade) {
    return trade instanceof uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade;
}
exports.isUniswapV2LikeTrade = isUniswapV2LikeTrade;
function isUniswapV3LikeTrade(trade) {
    return trade instanceof uniswap_v3_abstract_trade_1.UniswapV3AbstractTrade;
}
exports.isUniswapV3LikeTrade = isUniswapV3LikeTrade;
function isOneInchLikeTrade(trade) {
    return trade instanceof oneinch_trade_1.OneinchTrade;
}
exports.isOneInchLikeTrade = isOneInchLikeTrade;
function isZrxLikeTradeLikeTrade(trade) {
    return trade instanceof zrx_trade_1.ZrxTrade;
}
exports.isZrxLikeTradeLikeTrade = isZrxLikeTradeLikeTrade;
function isAlgebraTrade(trade) {
    return trade instanceof algebra_trade_1.AlgebraTrade;
}
exports.isAlgebraTrade = isAlgebraTrade;
//# sourceMappingURL=type-guards.js.map