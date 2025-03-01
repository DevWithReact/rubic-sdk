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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3AlgebraAbstractTrade = void 0;
var instant_trade_1 = require("../../../instant-trade");
var common_1 = require("../../../../../common");
var core_1 = require("../../../../../core");
var injector_1 = require("../../../../../core/sdk/injector");
var options_1 = require("../../../../../common/utils/options");
var estimated_gas_1 = require("./constants/estimated-gas");
var get_from_to_tokens_amounts_by_exact_1 = require("../utils/get-from-to-tokens-amounts-by-exact");
var UniswapV3AlgebraAbstractTrade = /** @class */ (function (_super) {
    __extends(UniswapV3AlgebraAbstractTrade, _super);
    function UniswapV3AlgebraAbstractTrade(tradeStruct) {
        var _this = _super.call(this, tradeStruct.from.blockchain) || this;
        _this.from = tradeStruct.from;
        _this.to = tradeStruct.to;
        _this.exact = tradeStruct.exact;
        _this.gasFeeInfo = tradeStruct.gasFeeInfo || null;
        _this.slippageTolerance = tradeStruct.slippageTolerance;
        _this.deadlineMinutes = tradeStruct.deadlineMinutes;
        return _this;
    }
    Object.defineProperty(UniswapV3AlgebraAbstractTrade, "contractAbi", {
        get: function () {
            // see  https://github.com/microsoft/TypeScript/issues/34516
            // @ts-ignore
            var instance = new this();
            if (!instance.contractAbi) {
                throw new common_1.RubicSdkError('Trying to read abstract class field');
            }
            return instance.contractAbi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniswapV3AlgebraAbstractTrade, "contractAddress", {
        get: function () {
            // see  https://github.com/microsoft/TypeScript/issues/34516
            // @ts-ignore
            var instance = new this();
            if (!instance.contractAddress) {
                throw new common_1.RubicSdkError('Trying to read abstract class field');
            }
            return instance.contractAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniswapV3AlgebraAbstractTrade, "type", {
        get: function () {
            throw new common_1.RubicSdkError("Static TRADE_TYPE getter is not implemented by ".concat(this.name));
        },
        enumerable: false,
        configurable: true
    });
    UniswapV3AlgebraAbstractTrade.estimateGasLimitForRoute = function (fromToken, toToken, exact, weiAmount, options, route) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, from, to, estimateGasParams, gasLimit, walletAddress, web3Public, estimatedGas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, get_from_to_tokens_amounts_by_exact_1.getFromToTokensAmountsByExact)(fromToken, toToken, exact, weiAmount, route.outputAbsoluteAmount), from = _a.from, to = _a.to;
                        estimateGasParams = this.getEstimateGasParams(from, to, exact, options, route);
                        gasLimit = estimateGasParams.defaultGasLimit;
                        walletAddress = injector_1.Injector.web3Private.address;
                        if (!walletAddress) return [3 /*break*/, 2];
                        web3Public = injector_1.Injector.web3PublicService.getWeb3Public(from.blockchain);
                        return [4 /*yield*/, web3Public.getEstimatedGas(this.contractAbi, this.contractAddress, estimateGasParams.callData.contractMethod, estimateGasParams.callData.params, walletAddress, estimateGasParams.callData.value)];
                    case 1:
                        estimatedGas = _b.sent();
                        if (estimatedGas === null || estimatedGas === void 0 ? void 0 : estimatedGas.isFinite()) {
                            gasLimit = estimatedGas;
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/, gasLimit];
                }
            });
        });
    };
    UniswapV3AlgebraAbstractTrade.estimateGasLimitForRoutes = function (fromToken, toToken, exact, weiAmount, options, routes) {
        return __awaiter(this, void 0, void 0, function () {
            var routesEstimateGasParams, gasLimits, walletAddress, web3Public, estimatedGasLimits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        routesEstimateGasParams = routes.map(function (route) {
                            var _a = (0, get_from_to_tokens_amounts_by_exact_1.getFromToTokensAmountsByExact)(fromToken, toToken, exact, weiAmount, route.outputAbsoluteAmount), from = _a.from, to = _a.to;
                            return _this.getEstimateGasParams(from, to, exact, options, route);
                        });
                        gasLimits = routesEstimateGasParams.map(function (estimateGasParams) { return estimateGasParams.defaultGasLimit; });
                        walletAddress = injector_1.Injector.web3Private.address;
                        if (!walletAddress) return [3 /*break*/, 2];
                        web3Public = injector_1.Injector.web3PublicService.getWeb3Public(fromToken.blockchain);
                        return [4 /*yield*/, web3Public.batchEstimatedGas(this.contractAbi, this.contractAddress, walletAddress, routesEstimateGasParams.map(function (estimateGasParams) { return estimateGasParams.callData; }))];
                    case 1:
                        estimatedGasLimits = _a.sent();
                        estimatedGasLimits.forEach(function (elem, index) {
                            if (elem === null || elem === void 0 ? void 0 : elem.isFinite()) {
                                gasLimits[index] = elem;
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/, gasLimits];
                }
            });
        });
    };
    UniswapV3AlgebraAbstractTrade.getEstimateGasParams = function (from, to, exact, options, route) {
        try {
            // @ts-ignore
            return new this({
                from: from,
                to: to,
                exact: exact,
                slippageTolerance: options.slippageTolerance,
                deadlineMinutes: options.deadlineMinutes,
                route: route
            }).getEstimateGasParams();
        }
        catch (err) {
            console.debug(err);
            throw new common_1.RubicSdkError('Trying to call abstract class method');
        }
    };
    Object.defineProperty(UniswapV3AlgebraAbstractTrade.prototype, "type", {
        get: function () {
            return this.constructor.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniswapV3AlgebraAbstractTrade.prototype, "deadlineMinutesTimestamp", {
        get: function () {
            return (0, options_1.deadlineMinutesTimestamp)(this.deadlineMinutes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniswapV3AlgebraAbstractTrade.prototype, "defaultEstimatedGas", {
        get: function () {
            return estimated_gas_1.DEFAULT_ESTIMATED_GAS[this.path.length - 2].plus(this.from.isNative ? estimated_gas_1.WETH_TO_ETH_ESTIMATED_GAS : 0);
        },
        enumerable: false,
        configurable: true
    });
    UniswapV3AlgebraAbstractTrade.prototype.getAmountParams = function () {
        if (this.exact === 'input') {
            var amountOutMin = this.to.weiAmountMinusSlippage(this.slippageTolerance).toFixed(0);
            return [this.from.stringWeiAmount, amountOutMin];
        }
        var amountInMax = this.from.weiAmountPlusSlippage(this.slippageTolerance).toFixed(0);
        return [this.to.stringWeiAmount, amountInMax];
    };
    UniswapV3AlgebraAbstractTrade.prototype.swap = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, methodName, methodArguments, _b, gas, gasPrice;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.checkWalletState()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.checkAllowanceAndApprove(options)];
                    case 2:
                        _c.sent();
                        _a = this.getSwapRouterMethodData(), methodName = _a.methodName, methodArguments = _a.methodArguments;
                        _b = this.getGasParams(options), gas = _b.gas, gasPrice = _b.gasPrice;
                        return [2 /*return*/, injector_1.Injector.web3Private.tryExecuteContractMethod(this.contractAddress, this.contractAbi, methodName, methodArguments, {
                                value: this.from.isNative ? this.from.stringWeiAmount : undefined,
                                onTransactionHash: options.onConfirm,
                                gas: gas,
                                gasPrice: gasPrice
                            })];
                }
            });
        });
    };
    UniswapV3AlgebraAbstractTrade.prototype.encode = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, methodName, methodArguments, gasParams;
            return __generator(this, function (_b) {
                _a = this.getSwapRouterMethodData(), methodName = _a.methodName, methodArguments = _a.methodArguments;
                gasParams = this.getGasParams(options);
                return [2 /*return*/, core_1.Web3Pure.encodeMethodCall(this.contractAddress, this.contractAbi, methodName, methodArguments, this.from.isNative ? this.from.stringWeiAmount : undefined, gasParams)];
            });
        });
    };
    UniswapV3AlgebraAbstractTrade.prototype.getSwapRouterMethodData = function () {
        if (!this.to.isNative) {
            var _a = this.getSwapRouterExactInputMethodData(this.walletAddress), exactInputMethodName_1 = _a.methodName, exactInputMethodArguments_1 = _a.methodArguments;
            return {
                methodName: exactInputMethodName_1,
                methodArguments: exactInputMethodArguments_1
            };
        }
        var _b = this.getSwapRouterExactInputMethodData(core_1.Web3Pure.ZERO_ADDRESS), exactInputMethodName = _b.methodName, exactInputMethodArguments = _b.methodArguments;
        var exactInputMethodEncoded = core_1.Web3Pure.encodeFunctionCall(this.contractAbi, exactInputMethodName, exactInputMethodArguments);
        var amountOutMin = this.to.weiAmountMinusSlippage(this.slippageTolerance).toFixed(0);
        var unwrapWETHMethodEncoded = core_1.Web3Pure.encodeFunctionCall(this.contractAbi, this.unwrapWethMethodName, [amountOutMin, this.walletAddress]);
        return {
            methodName: 'multicall',
            methodArguments: [[exactInputMethodEncoded, unwrapWETHMethodEncoded]]
        };
    };
    /**
     * Returns encoded data of estimated gas function and default estimated gas.
     */
    UniswapV3AlgebraAbstractTrade.prototype.getEstimateGasParams = function () {
        var _a = this.getSwapRouterMethodData(), methodName = _a.methodName, methodArguments = _a.methodArguments;
        return {
            callData: {
                contractMethod: methodName,
                params: methodArguments,
                value: this.from.isNative ? this.from.stringWeiAmount : undefined
            },
            defaultGasLimit: this.defaultEstimatedGas
        };
    };
    __decorate([
        common_1.Cache
    ], UniswapV3AlgebraAbstractTrade, "contractAddress", null);
    return UniswapV3AlgebraAbstractTrade;
}(instant_trade_1.InstantTrade));
exports.UniswapV3AlgebraAbstractTrade = UniswapV3AlgebraAbstractTrade;
//# sourceMappingURL=uniswap-v3-algebra-abstract-trade.js.map