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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgebraTrade = void 0;
var uniswap_v3_algebra_abstract_trade_1 = require("../../common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade");
var algebra_quoter_controller_1 = require("./utils/quoter-controller/algebra-quoter-controller");
var features_1 = require("../../../..");
var swap_router_contract_data_1 = require("./constants/swap-router-contract-data");
var core_1 = require("../../../../../core");
var token_native_address_proxy_1 = require("../../common/utils/token-native-address-proxy");
var AlgebraTrade = /** @class */ (function (_super) {
    __extends(AlgebraTrade, _super);
    function AlgebraTrade(tradeStruct) {
        var _this = _super.call(this, tradeStruct) || this;
        _this.contractAddress = swap_router_contract_data_1.ALGEBRA_SWAP_ROUTER_CONTRACT_ADDRESS;
        _this.contractAbi = swap_router_contract_data_1.ALGEBRA_SWAP_ROUTER_CONTRACT_ABI;
        _this.unwrapWethMethodName = 'unwrapWNativeToken';
        _this.route = tradeStruct.route;
        _this.wrappedPath = _this.route.path;
        _this.path = (0, token_native_address_proxy_1.createTokenNativeAddressProxyInPathStartAndEnd)(_this.route.path, core_1.Web3Pure.nativeTokenAddress);
        return _this;
    }
    Object.defineProperty(AlgebraTrade, "type", {
        get: function () {
            return features_1.TRADE_TYPE.ALGEBRA;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns swap `exactInput` method's name and arguments to use in Swap contract.
     */
    AlgebraTrade.prototype.getSwapRouterExactInputMethodData = function (walletAddress) {
        var amountParams = this.getAmountParams();
        if (this.route.path.length === 2) {
            var methodName_1 = this.exact === 'input' ? 'exactInputSingle' : 'exactOutputSingle';
            return {
                methodName: methodName_1,
                methodArguments: [
                    __spreadArray(__spreadArray([
                        this.route.path[0].address,
                        this.route.path[1].address,
                        walletAddress,
                        this.deadlineMinutesTimestamp
                    ], amountParams, true), [
                        0
                    ], false)
                ]
            };
        }
        var methodName = this.exact === 'input' ? 'exactInput' : 'exactOutput';
        return {
            methodName: methodName,
            methodArguments: [
                __spreadArray([
                    algebra_quoter_controller_1.AlgebraQuoterController.getEncodedPath(this.route.path),
                    walletAddress,
                    this.deadlineMinutesTimestamp
                ], amountParams, true)
            ]
        };
    };
    return AlgebraTrade;
}(uniswap_v3_algebra_abstract_trade_1.UniswapV3AlgebraAbstractTrade));
exports.AlgebraTrade = AlgebraTrade;
//# sourceMappingURL=algebra-trade.js.map