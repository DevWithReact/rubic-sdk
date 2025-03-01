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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.UniswapV3AbstractTrade = void 0;
var uniswap_v3_quoter_controller_1 = require("./utils/quoter-controller/uniswap-v3-quoter-controller");
var common_1 = require("../../../../../common");
var uniswap_v3_algebra_abstract_trade_1 = require("../uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade");
var swap_router_contract_abi_1 = require("./constants/swap-router-contract-abi");
var token_native_address_proxy_1 = require("../utils/token-native-address-proxy");
var core_1 = require("../../../../../core");
var UniswapV3AbstractTrade = /** @class */ (function (_super) {
    __extends(UniswapV3AbstractTrade, _super);
    function UniswapV3AbstractTrade(tradeStruct) {
        var _this = _super.call(this, tradeStruct) || this;
        _this.contractAddress = swap_router_contract_abi_1.UNISWAP_V3_SWAP_ROUTER_CONTRACT_ADDRESS;
        _this.contractAbi = swap_router_contract_abi_1.UNISWAP_V3_SWAP_ROUTER_CONTRACT_ABI;
        _this.unwrapWethMethodName = 'unwrapWETH9';
        _this.route = tradeStruct.route;
        return _this;
    }
    Object.defineProperty(UniswapV3AbstractTrade.prototype, "path", {
        get: function () {
            var initialPool = this.route.poolsPath[0];
            var path = [
                (0, common_1.compareAddresses)(initialPool.token0.address, this.route.initialTokenAddress)
                    ? initialPool.token0
                    : initialPool.token1
            ];
            this.route.poolsPath.forEach(function (pool) {
                path.push(!(0, common_1.compareAddresses)(pool.token0.address, path[path.length - 1].address)
                    ? pool.token0
                    : pool.token1);
            });
            return (0, token_native_address_proxy_1.createTokenNativeAddressProxyInPathStartAndEnd)(path, core_1.Web3Pure.nativeTokenAddress);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns swap `exactInput` method's name and arguments to use in Swap contract.
     */
    UniswapV3AbstractTrade.prototype.getSwapRouterExactInputMethodData = function (walletAddress) {
        var amountParams = this.getAmountParams();
        if (this.route.poolsPath.length === 1) {
            var methodName_1 = this.exact === 'input' ? 'exactInputSingle' : 'exactOutputSingle';
            var pool = this.route.poolsPath[0];
            var toTokenAddress = (0, common_1.compareAddresses)(pool.token0.address, this.route.initialTokenAddress)
                ? pool.token1.address
                : pool.token0.address;
            return {
                methodName: methodName_1,
                methodArguments: [
                    __spreadArray(__spreadArray([
                        this.route.initialTokenAddress,
                        toTokenAddress,
                        this.route.poolsPath[0].fee,
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
                    uniswap_v3_quoter_controller_1.UniswapV3QuoterController.getEncodedPoolsPath(this.route.poolsPath, this.route.initialTokenAddress),
                    walletAddress,
                    this.deadlineMinutesTimestamp
                ], amountParams, true)
            ]
        };
    };
    __decorate([
        common_1.Cache
    ], UniswapV3AbstractTrade.prototype, "path", null);
    return UniswapV3AbstractTrade;
}(uniswap_v3_algebra_abstract_trade_1.UniswapV3AlgebraAbstractTrade));
exports.UniswapV3AbstractTrade = UniswapV3AbstractTrade;
//# sourceMappingURL=uniswap-v3-abstract-trade.js.map