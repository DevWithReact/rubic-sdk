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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.UniswapV3AlgebraAbstractProvider = void 0;
var instant_trade_provider_1 = require("../../../instant-trade-provider");
var core_1 = require("../../../../../core");
var options_1 = require("../../../../../common/utils/options");
var token_native_address_proxy_1 = require("../utils/token-native-address-proxy");
var common_1 = require("../../../../../common");
var gas_price_api_1 = require("../../../../../common/http/gas-price-api");
var get_from_to_tokens_amounts_by_exact_1 = require("../utils/get-from-to-tokens-amounts-by-exact");
var UniswapV3AlgebraAbstractProvider = /** @class */ (function (_super) {
    __extends(UniswapV3AlgebraAbstractProvider, _super);
    function UniswapV3AlgebraAbstractProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRubicOptimisationEnabled = true;
        _this.gasMargin = 1.2;
        _this.defaultOptions = {
            gasCalculation: 'calculate',
            disableMultihops: false,
            deadlineMinutes: 20,
            slippageTolerance: 0.02
        };
        return _this;
    }
    UniswapV3AlgebraAbstractProvider.prototype.calculate = function (from, toToken, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.calculateDifficultTrade(from, toToken, 'input', from.weiAmount, options)];
            });
        });
    };
    UniswapV3AlgebraAbstractProvider.prototype.calculateExactOutput = function (fromToken, to, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.calculateDifficultTrade(fromToken, to, 'output', to.weiAmount, options)];
            });
        });
    };
    UniswapV3AlgebraAbstractProvider.prototype.calculateExactOutputAmount = function (fromToken, to, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calculateExactOutput(fromToken, to, options)];
                    case 1: return [2 /*return*/, (_a.sent()).from.tokenAmount];
                }
            });
        });
    };
    UniswapV3AlgebraAbstractProvider.prototype.calculateDifficultTrade = function (fromToken, toToken, exact, weiAmount, options) {
        return __awaiter(this, void 0, void 0, function () {
            var fullOptions, fromClone, toClone, gasPriceInfo, _a, route, estimatedGas, _b, from, to, tradeStruct, gasFeeInfo;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        fullOptions = (0, options_1.combineOptions)(options, this.defaultOptions);
                        fromClone = (0, token_native_address_proxy_1.createTokenNativeAddressProxy)(fromToken, this.providerConfiguration.wethAddress);
                        toClone = (0, token_native_address_proxy_1.createTokenNativeAddressProxy)(toToken, this.providerConfiguration.wethAddress);
                        if (!(fullOptions.gasCalculation !== 'disabled' &&
                            gas_price_api_1.GasPriceApi.isSupportedBlockchain(fromToken.blockchain))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getGasPriceInfo()];
                    case 1:
                        gasPriceInfo = _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.getRoute(fromClone, toClone, exact, weiAmount, fullOptions, gasPriceInfo === null || gasPriceInfo === void 0 ? void 0 : gasPriceInfo.gasPriceInUsd)];
                    case 3:
                        _a = _c.sent(), route = _a.route, estimatedGas = _a.estimatedGas;
                        _b = (0, get_from_to_tokens_amounts_by_exact_1.getFromToTokensAmountsByExact)(fromToken, toToken, exact, weiAmount, route.outputAbsoluteAmount), from = _b.from, to = _b.to;
                        tradeStruct = {
                            from: from,
                            to: to,
                            exact: exact,
                            slippageTolerance: fullOptions.slippageTolerance,
                            deadlineMinutes: fullOptions.deadlineMinutes
                        };
                        if (fullOptions.gasCalculation === 'disabled') {
                            return [2 /*return*/, this.createTradeInstance(tradeStruct, route)];
                        }
                        gasFeeInfo = this.getGasFeeInfo(estimatedGas, gasPriceInfo);
                        return [2 /*return*/, this.createTradeInstance(__assign(__assign({}, tradeStruct), { gasFeeInfo: gasFeeInfo }), route)];
                }
            });
        });
    };
    UniswapV3AlgebraAbstractProvider.prototype.getRoute = function (from, to, exact, weiAmount, options, gasPriceInUsd) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var routes, estimatedGasLimits_1, calculatedProfits, route, estimatedGas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.quoterController.getAllRoutes(from, to, exact, weiAmount.toFixed(0), options.disableMultihops ? 0 : this.providerConfiguration.maxTransitTokens)];
                    case 1:
                        routes = (_b.sent()).sort(function (a, b) {
                            return b.outputAbsoluteAmount.comparedTo(a.outputAbsoluteAmount) *
                                (exact === 'input' ? 1 : -1);
                        });
                        if (routes.length === 0) {
                            throw new common_1.InsufficientLiquidityError();
                        }
                        if (options.gasCalculation === 'disabled') {
                            return [2 /*return*/, {
                                    route: routes[0]
                                }];
                        }
                        if (!(!this.isRubicOptimisationEnabled &&
                            options.gasCalculation === 'rubicOptimisation' &&
                            ((_a = to.price) === null || _a === void 0 ? void 0 : _a.isFinite()) &&
                            gasPriceInUsd)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.InstantTradeClass.estimateGasLimitForRoutes(from, to, exact, weiAmount, options, routes)];
                    case 2:
                        estimatedGasLimits_1 = _b.sent();
                        calculatedProfits = routes.map(function (route, index) {
                            var estimatedGas = estimatedGasLimits_1[index];
                            var gasFeeInUsd = gasPriceInUsd.multipliedBy(estimatedGas);
                            var profit = core_1.Web3Pure.fromWei(route.outputAbsoluteAmount, to.decimals)
                                .multipliedBy(to.price)
                                .minus(gasFeeInUsd);
                            return {
                                route: route,
                                estimatedGas: estimatedGas,
                                profit: profit
                            };
                        });
                        return [2 /*return*/, calculatedProfits.sort(function (a, b) { return b.profit.comparedTo(a.profit); })[0]];
                    case 3:
                        route = routes[0];
                        return [4 /*yield*/, this.InstantTradeClass.estimateGasLimitForRoute(from, to, exact, weiAmount, options, route)];
                    case 4:
                        estimatedGas = _b.sent();
                        return [2 /*return*/, {
                                route: route,
                                estimatedGas: estimatedGas
                            }];
                }
            });
        });
    };
    return UniswapV3AlgebraAbstractProvider;
}(instant_trade_provider_1.InstantTradeProvider));
exports.UniswapV3AlgebraAbstractProvider = UniswapV3AlgebraAbstractProvider;
//# sourceMappingURL=uniswap-v3-algebra-abstract-provider.js.map