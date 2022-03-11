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
exports.ItCrossChainContractTrade = void 0;
var cross_chain_contract_trade_1 = require("../cross-chain-contract-trade");
var oneinch_trade_1 = require("../../../instant-trades/dexes/common/oneinch-common/oneinch-trade");
var uniswap_v3_abstract_trade_1 = require("../../../instant-trades/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade");
var uniswap_v2_abstract_trade_1 = require("../../../instant-trades/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-trade");
var cross_chain_oneinch_trade_1 = require("./cross-chain-instant-trade/cross-chain-oneinch-trade");
var cross_chain_uniswap_v3_trade_1 = require("./cross-chain-instant-trade/cross-chain-uniswap-v3-trade");
var cross_chain_uniswap_v2_trade_1 = require("./cross-chain-instant-trade/cross-chain-uniswap-v2-trade");
var cross_chain_algebra_trade_1 = require("./cross-chain-instant-trade/cross-chain-algebra-trade");
var ItCrossChainContractTrade = /** @class */ (function (_super) {
    __extends(ItCrossChainContractTrade, _super);
    function ItCrossChainContractTrade(blockchain, contract, providerIndex, slippageTolerance, instantTrade) {
        var _this = _super.call(this, blockchain, contract, providerIndex) || this;
        _this.slippageTolerance = slippageTolerance;
        _this.instantTrade = instantTrade;
        _this.fromToken = _this.instantTrade.from;
        _this.toToken = _this.instantTrade.to;
        _this.toTokenAmountMin = _this.toToken.tokenAmount.multipliedBy(1 - _this.slippageTolerance);
        if (_this.instantTrade instanceof uniswap_v2_abstract_trade_1.UniswapV2AbstractTrade) {
            _this.crossChainInstantTrade = new cross_chain_uniswap_v2_trade_1.CrossChainUniswapV2Trade(_this.instantTrade);
        }
        else if (_this.instantTrade instanceof oneinch_trade_1.OneinchTrade) {
            _this.crossChainInstantTrade = new cross_chain_oneinch_trade_1.CrossChainOneinchTrade(_this.instantTrade);
        }
        else if (_this.instantTrade instanceof uniswap_v3_abstract_trade_1.UniswapV3AbstractTrade) {
            _this.crossChainInstantTrade = new cross_chain_uniswap_v3_trade_1.CrossChainUniswapV3Trade(_this.instantTrade);
        }
        else {
            _this.crossChainInstantTrade = new cross_chain_algebra_trade_1.CrossChainAlgebraTrade(_this.instantTrade);
        }
        return _this;
    }
    ItCrossChainContractTrade.prototype.getFirstPath = function () {
        return this.crossChainInstantTrade.getFirstPath();
    };
    ItCrossChainContractTrade.prototype.getSecondPath = function () {
        return this.crossChainInstantTrade.getSecondPath();
    };
    ItCrossChainContractTrade.prototype.modifyArgumentsForProvider = function (methodArguments, walletAddress) {
        return this.crossChainInstantTrade.modifyArgumentsForProvider(methodArguments, walletAddress);
    };
    return ItCrossChainContractTrade;
}(cross_chain_contract_trade_1.CrossChainContractTrade));
exports.ItCrossChainContractTrade = ItCrossChainContractTrade;
//# sourceMappingURL=it-cross-chain-contract-trade.js.map