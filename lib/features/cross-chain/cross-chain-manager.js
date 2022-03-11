"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainManager = void 0;
var cross_chain_contracts_1 = require("./constants/cross-chain-contracts");
var cross_chain_supported_blockchains_1 = require("./constants/cross-chain-supported-blockchains");
var token_1 = require("../../core/blockchain/tokens/token");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var blockchain_1 = require("../../common/utils/blockchain");
var price_token_amount_1 = require("../../core/blockchain/tokens/price-token-amount");
var web3_pure_1 = require("../../core/blockchain/web3-pure/web3-pure");
var direct_cross_chain_contract_trade_1 = require("./cross-chain-contract-trade/direct-cross-chain-contract-trade");
var it_cross_chain_contract_trade_1 = require("./cross-chain-contract-trade/it-cross-chain-contract-trade/it-cross-chain-contract-trade");
var cross_chain_trade_1 = require("./cross-chain-trade/cross-chain-trade");
var insufficient_liquidity_error_1 = require("../../common/errors/swap/insufficient-liquidity.error");
var not_supported_blockchain_1 = require("../../common/errors/swap/not-supported-blockchain");
var object_1 = require("../../common/utils/object");
var price_token_1 = require("../../core/blockchain/tokens/price-token");
var rubic_sdk_error_1 = require("../../common/errors/rubic-sdk.error");
var options_1 = require("../../common/utils/options");
var tokens_1 = require("../../common/utils/tokens");
var cross_chain_max_amount_error_1 = require("../../common/errors/cross-chain/cross-chain-max-amount-error");
var cross_chain_min_amount_error_1 = require("../../common/errors/cross-chain/cross-chain-min-amount-error");
var CrossChainManager = /** @class */ (function () {
    function CrossChainManager(providerAddress) {
        this.providerAddress = providerAddress;
        this.defaultSlippageTolerance = 0.02;
        this.contracts = cross_chain_contracts_1.getCrossChainContract;
    }
    CrossChainManager.isSupportedBlockchain = function (blockchain) {
        return cross_chain_supported_blockchains_1.crossChainSupportedBlockchains.some(function (supportedBlockchain) { return supportedBlockchain === blockchain; });
    };
    CrossChainManager.prototype.calculateTrade = function (fromToken, fromAmount, toToken, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, from, to;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (toToken instanceof token_1.Token && fromToken.blockchain === toToken.blockchain) {
                            throw new rubic_sdk_error_1.RubicSdkError('Blockchains of from and to tokens must be different.');
                        }
                        return [4 /*yield*/, (0, tokens_1.getPriceTokensFromInputTokens)(fromToken, fromAmount.toString(), toToken)];
                    case 1:
                        _a = _b.sent(), from = _a.from, to = _a.to;
                        return [2 /*return*/, this.calculateTradeFromTokens(from, to, this.getFullOptions(options))];
                }
            });
        });
    };
    CrossChainManager.prototype.getFullOptions = function (options) {
        return (0, options_1.combineOptions)(options, {
            fromSlippageTolerance: this.defaultSlippageTolerance,
            toSlippageTolerance: this.defaultSlippageTolerance
        });
    };
    CrossChainManager.prototype.calculateTradeFromTokens = function (from, toToken, options) {
        return __awaiter(this, void 0, void 0, function () {
            var fromBlockchain, toBlockchain, _a, fromTransitToken, toTransitToken, _b, _c, _d, _e, _f, _g, _h, fromSlippageTolerance, toSlippageTolerance, fromTrade, _j, toTransitTokenAmount, transitFeeToken, toTrade, _k, cryptoFeeToken, gasData;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        fromBlockchain = from.blockchain;
                        toBlockchain = toToken.blockchain;
                        if (!CrossChainManager.isSupportedBlockchain(fromBlockchain) ||
                            !CrossChainManager.isSupportedBlockchain(toBlockchain)) {
                            throw new not_supported_blockchain_1.NotSupportedBlockchain();
                        }
                        _c = (_b = Promise).all;
                        _d = price_token_1.PriceToken.bind;
                        _e = [{}];
                        return [4 /*yield*/, this.contracts(fromBlockchain).getTransitToken()];
                    case 1:
                        _f = [
                            new (_d.apply(price_token_1.PriceToken, [void 0, __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { price: new bignumber_js_1.default(NaN) }])]))()
                        ];
                        _g = price_token_1.PriceToken.bind;
                        _h = [{}];
                        return [4 /*yield*/, this.contracts(toBlockchain).getTransitToken()];
                    case 2: return [4 /*yield*/, _c.apply(_b, [_f.concat([
                                new (_g.apply(price_token_1.PriceToken, [void 0, __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { price: new bignumber_js_1.default(NaN) }])]))()
                            ])])];
                    case 3:
                        _a = _l.sent(), fromTransitToken = _a[0], toTransitToken = _a[1];
                        fromSlippageTolerance = options.fromSlippageTolerance, toSlippageTolerance = options.toSlippageTolerance;
                        return [4 /*yield*/, this.calculateBestTrade(fromBlockchain, from, fromTransitToken, fromSlippageTolerance)];
                    case 4:
                        fromTrade = _l.sent();
                        return [4 /*yield*/, this.checkMinMaxAmountsErrors(fromTrade)];
                    case 5:
                        _l.sent();
                        return [4 /*yield*/, this.getToTransitTokenAmount(fromTrade, toBlockchain)];
                    case 6:
                        _j = _l.sent(), toTransitTokenAmount = _j.toTransitTokenAmount, transitFeeToken = _j.transitFeeToken;
                        return [4 /*yield*/, this.calculateBestTrade(toBlockchain, new price_token_amount_1.PriceTokenAmount(__assign(__assign({}, toTransitToken.asStruct), { tokenAmount: toTransitTokenAmount })), toToken, toSlippageTolerance)];
                    case 7:
                        toTrade = _l.sent();
                        return [4 /*yield*/, this.getCryptoFeeTokenAndGasData(fromTrade, toTrade)];
                    case 8:
                        _k = _l.sent(), cryptoFeeToken = _k.cryptoFeeToken, gasData = _k.gasData;
                        return [2 /*return*/, new cross_chain_trade_1.CrossChainTrade({
                                fromTrade: fromTrade,
                                toTrade: toTrade,
                                cryptoFeeToken: cryptoFeeToken,
                                transitFeeToken: transitFeeToken,
                                gasData: gasData
                            }, this.providerAddress)];
                }
            });
        });
    };
    CrossChainManager.prototype.calculateBestTrade = function (blockchain, from, toToken, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var contract;
            return __generator(this, function (_a) {
                if ((0, blockchain_1.compareAddresses)(from.address, toToken.address)) {
                    contract = this.contracts(blockchain);
                    return [2 /*return*/, new direct_cross_chain_contract_trade_1.DirectCrossChainContractTrade(blockchain, contract, from)];
                }
                return [2 /*return*/, this.getBestItContractTrade(blockchain, from, toToken, slippageTolerance)];
            });
        });
    };
    CrossChainManager.prototype.getBestItContractTrade = function (blockchain, from, toToken, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, promises, bestTrade;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = this.contracts(blockchain);
                        promises = contract.providersData.map(function (_, providerIndex) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, this.getItCalculatedTrade(contract, providerIndex, from, toToken, slippageTolerance)];
                            });
                        }); });
                        return [4 /*yield*/, Promise.allSettled(promises).then(function (results) { return __awaiter(_this, void 0, void 0, function () {
                                var sortedResults;
                                return __generator(this, function (_a) {
                                    sortedResults = results
                                        .map(function (result) {
                                        if (result.status === 'fulfilled') {
                                            return result.value;
                                        }
                                        return null;
                                    })
                                        .filter(object_1.notNull)
                                        .sort(function (a, b) { return b.toAmount.comparedTo(a.toAmount); });
                                    if (!sortedResults.length) {
                                        throw results[0].reason;
                                    }
                                    return [2 /*return*/, sortedResults[0]];
                                });
                            }); })];
                    case 1:
                        bestTrade = _a.sent();
                        return [2 /*return*/, new it_cross_chain_contract_trade_1.ItCrossChainContractTrade(blockchain, contract, bestTrade.providerIndex, slippageTolerance, bestTrade.instantTrade)];
                }
            });
        });
    };
    CrossChainManager.prototype.getItCalculatedTrade = function (contract, providerIndex, from, toToken, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var instantTrade;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contract.getProvider(providerIndex).calculate(from, toToken, {
                            gasCalculation: 'disabled',
                            slippageTolerance: slippageTolerance
                        })];
                    case 1:
                        instantTrade = _a.sent();
                        return [2 /*return*/, {
                                toAmount: instantTrade.to.tokenAmount,
                                providerIndex: providerIndex,
                                instantTrade: instantTrade
                            }];
                }
            });
        });
    };
    CrossChainManager.prototype.getToTransitTokenAmount = function (fromTrade, toBlockchain) {
        return __awaiter(this, void 0, void 0, function () {
            var fromTransitToken, fromTransitTokenMinAmount, feeInPercents, transitFeeToken, toTransitTokenAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromTransitToken = fromTrade.toToken;
                        fromTransitTokenMinAmount = fromTrade.toTokenAmountMin;
                        return [4 /*yield*/, this.contracts(toBlockchain).getFeeInPercents(fromTrade.contract)];
                    case 1:
                        feeInPercents = _a.sent();
                        transitFeeToken = new price_token_amount_1.PriceTokenAmount(__assign(__assign({}, fromTransitToken.asStruct), { tokenAmount: fromTransitTokenMinAmount.multipliedBy(feeInPercents).dividedBy(100) }));
                        toTransitTokenAmount = fromTransitTokenMinAmount.minus(transitFeeToken.tokenAmount);
                        return [2 /*return*/, {
                                toTransitTokenAmount: toTransitTokenAmount,
                                transitFeeToken: transitFeeToken
                            }];
                }
            });
        });
    };
    CrossChainManager.prototype.checkMinMaxAmountsErrors = function (fromTrade) {
        return __awaiter(this, void 0, void 0, function () {
            var slippageTolerance, _a, minTransitTokenAmount, maxTransitTokenAmount, fromTransitTokenAmount, minAmount, maxAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        slippageTolerance = fromTrade instanceof it_cross_chain_contract_trade_1.ItCrossChainContractTrade
                            ? fromTrade.slippageTolerance
                            : undefined;
                        return [4 /*yield*/, this.getMinMaxTransitTokenAmounts(fromTrade.blockchain, slippageTolerance)];
                    case 1:
                        _a = _b.sent(), minTransitTokenAmount = _a.minAmount, maxTransitTokenAmount = _a.maxAmount;
                        fromTransitTokenAmount = fromTrade.toToken.tokenAmount;
                        if (!fromTransitTokenAmount.lt(minTransitTokenAmount)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getTokenAmountForExactTransitTokenAmount(fromTrade, minTransitTokenAmount)];
                    case 2:
                        minAmount = _b.sent();
                        if (!(minAmount === null || minAmount === void 0 ? void 0 : minAmount.isFinite())) {
                            throw new insufficient_liquidity_error_1.InsufficientLiquidityError();
                        }
                        throw new cross_chain_min_amount_error_1.CrossChainMinAmountError(minAmount, fromTrade.fromToken.symbol);
                    case 3:
                        if (!fromTransitTokenAmount.gt(maxTransitTokenAmount)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getTokenAmountForExactTransitTokenAmount(fromTrade, maxTransitTokenAmount)];
                    case 4:
                        maxAmount = _b.sent();
                        throw new cross_chain_max_amount_error_1.CrossChainMaxAmountError(maxAmount, fromTrade.fromToken.symbol);
                    case 5: return [2 /*return*/, {}];
                }
            });
        });
    };
    CrossChainManager.prototype.getMinMaxAmounts = function (fromToken, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var from, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(fromToken instanceof token_1.Token)) return [3 /*break*/, 1];
                        _a = fromToken;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, token_1.Token.createToken(fromToken)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        from = _a;
                        return [2 /*return*/, this.getMinMaxAmountsDifficult(from, slippageTolerance || this.defaultSlippageTolerance)];
                }
            });
        });
    };
    CrossChainManager.prototype.getMinMaxAmountsDifficult = function (fromToken, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var fromBlockchain, transitToken, _a, minTransitTokenAmount, maxTransitTokenAmount, minAmount, maxAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fromBlockchain = fromToken.blockchain;
                        if (!CrossChainManager.isSupportedBlockchain(fromBlockchain)) {
                            throw new not_supported_blockchain_1.NotSupportedBlockchain();
                        }
                        return [4 /*yield*/, this.contracts(fromBlockchain).getTransitToken()];
                    case 1:
                        transitToken = _b.sent();
                        if ((0, blockchain_1.compareAddresses)(fromToken.address, transitToken.address)) {
                            return [2 /*return*/, this.getMinMaxTransitTokenAmounts(fromBlockchain)];
                        }
                        return [4 /*yield*/, this.getMinMaxTransitTokenAmounts(fromBlockchain, slippageTolerance)];
                    case 2:
                        _a = _b.sent(), minTransitTokenAmount = _a.minAmount, maxTransitTokenAmount = _a.maxAmount;
                        return [4 /*yield*/, this.getMinOrMaxAmount(fromBlockchain, fromToken, transitToken, minTransitTokenAmount, 'min')];
                    case 3:
                        minAmount = _b.sent();
                        return [4 /*yield*/, this.getMinOrMaxAmount(fromBlockchain, fromToken, transitToken, maxTransitTokenAmount, 'max')];
                    case 4:
                        maxAmount = _b.sent();
                        return [2 /*return*/, { minAmount: minAmount, maxAmount: maxAmount }];
                }
            });
        });
    };
    CrossChainManager.prototype.getMinOrMaxAmount = function (fromBlockchain, fromToken, transitToken, transitTokenAmount, type) {
        return __awaiter(this, void 0, void 0, function () {
            var fromContract, promises, sortedAmounts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromContract = this.contracts(fromBlockchain);
                        promises = fromContract.providersData.map(function (providerData) {
                            return _this.getTokenAmountForExactTransitTokenAmountByProvider(fromToken, transitToken, transitTokenAmount, providerData.provider);
                        });
                        return [4 /*yield*/, Promise.allSettled(promises)];
                    case 1:
                        sortedAmounts = (_a.sent())
                            .map(function (result) {
                            if (result.status === 'fulfilled') {
                                return result.value;
                            }
                            return null;
                        })
                            .filter(object_1.notNull)
                            .sort(function (a, b) { return a.comparedTo(b); });
                        if (type === 'min') {
                            return [2 /*return*/, sortedAmounts[0]];
                        }
                        return [2 /*return*/, sortedAmounts[sortedAmounts.length - 1]];
                }
            });
        });
    };
    CrossChainManager.prototype.getMinMaxTransitTokenAmounts = function (fromBlockchain, slippageTolerance) {
        return __awaiter(this, void 0, void 0, function () {
            var fromContract, fromTransitToken, getAmount;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromContract = this.contracts(fromBlockchain);
                        return [4 /*yield*/, fromContract.getTransitToken()];
                    case 1:
                        fromTransitToken = _a.sent();
                        getAmount = function (type) { return __awaiter(_this, void 0, void 0, function () {
                            var fromTransitTokenAmountAbsolute, fromTransitTokenAmount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, fromContract.getMinOrMaxTransitTokenAmount(type)];
                                    case 1:
                                        fromTransitTokenAmountAbsolute = _a.sent();
                                        fromTransitTokenAmount = web3_pure_1.Web3Pure.fromWei(fromTransitTokenAmountAbsolute, fromTransitToken.decimals);
                                        if (type === 'min') {
                                            if (slippageTolerance) {
                                                return [2 /*return*/, fromTransitTokenAmount.dividedBy(1 - slippageTolerance)];
                                            }
                                            return [2 /*return*/, fromTransitTokenAmount];
                                        }
                                        return [2 /*return*/, fromTransitTokenAmount];
                                }
                            });
                        }); };
                        return [2 /*return*/, Promise.all([getAmount('min'), getAmount('max')]).then(function (_a) {
                                var minAmount = _a[0], maxAmount = _a[1];
                                return ({
                                    minAmount: minAmount,
                                    maxAmount: maxAmount
                                });
                            })];
                }
            });
        });
    };
    CrossChainManager.prototype.getTokenAmountForExactTransitTokenAmount = function (fromTrade, transitTokenAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var transitToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fromTrade.contract.getTransitToken()];
                    case 1:
                        transitToken = _a.sent();
                        if ((0, blockchain_1.compareAddresses)(fromTrade.fromToken.address, transitToken.address) ||
                            transitTokenAmount.eq(0)) {
                            return [2 /*return*/, transitTokenAmount];
                        }
                        return [2 /*return*/, this.getTokenAmountForExactTransitTokenAmountByProvider(fromTrade.fromToken, transitToken, transitTokenAmount, fromTrade.provider)];
                }
            });
        });
    };
    CrossChainManager.prototype.getTokenAmountForExactTransitTokenAmountByProvider = function (fromToken, transitToken, transitTokenAmount, provider) {
        return provider.calculateExactOutputAmount(new price_token_1.PriceToken(__assign(__assign({}, fromToken), { price: new bignumber_js_1.default(NaN) })), new price_token_amount_1.PriceTokenAmount(__assign(__assign({}, transitToken), { tokenAmount: transitTokenAmount, price: new bignumber_js_1.default(NaN) })), {
            gasCalculation: 'disabled'
        });
    };
    CrossChainManager.prototype.getCryptoFeeTokenAndGasData = function (fromTrade, toTrade) {
        return __awaiter(this, void 0, void 0, function () {
            var cryptoFeeToken, gasData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fromTrade.contract.getCryptoFeeToken(toTrade.contract)];
                    case 1:
                        cryptoFeeToken = _a.sent();
                        return [4 /*yield*/, cross_chain_trade_1.CrossChainTrade.getGasData(fromTrade, toTrade, cryptoFeeToken)];
                    case 2:
                        gasData = _a.sent();
                        return [2 /*return*/, {
                                cryptoFeeToken: cryptoFeeToken,
                                gasData: gasData
                            }];
                }
            });
        });
    };
    return CrossChainManager;
}());
exports.CrossChainManager = CrossChainManager;
//# sourceMappingURL=cross-chain-manager.js.map