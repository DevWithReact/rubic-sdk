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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3QuoterController = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var liquidity_pool_1 = require("./models/liquidity-pool");
var blockchain_1 = require("../../../../../../../common/utils/blockchain");
var factory_contract_data_1 = require("./constants/factory-contract-data");
var object_1 = require("../../../../../../../common/utils/object");
var token_1 = require("../../../../../../../core/blockchain/tokens/token");
var cache_decorator_1 = require("../../../../../../../common/decorators/cache.decorator");
var quoter_contract_data_1 = require("./constants/quoter-contract-data");
var web3_pure_1 = require("../../../../../../../core/blockchain/web3-pure/web3-pure");
var injector_1 = require("../../../../../../../core/sdk/injector");
/**
 * Works with requests, related to Uniswap v3 liquidity pools.
 */
var UniswapV3QuoterController = /** @class */ (function () {
    function UniswapV3QuoterController(blockchain, routerConfiguration) {
        this.blockchain = blockchain;
        this.routerConfiguration = routerConfiguration;
        this.feeAmounts = [500, 3000, 10000];
    }
    /**
     * Converts uni v3 route to encoded bytes string to pass it to contract.
     * Structure of encoded string: '0x${tokenAddress_0}${toHex(fee_0)}${tokenAddress_1}${toHex(fee_1)}...${tokenAddress_n}.
     * toHex(fee_i) must be of length 6, so leading zeroes are added.
     * @param pools Liquidity pools, included in route.
     * @param initialTokenAddress From token address.
     * @return string Encoded string.
     */
    UniswapV3QuoterController.getEncodedPoolsPath = function (pools, initialTokenAddress) {
        var contractPath = initialTokenAddress.slice(2).toLowerCase();
        var lastTokenAddress = initialTokenAddress;
        pools.forEach(function (pool) {
            contractPath += pool.fee.toString(16).padStart(6, '0');
            var newToken = (0, blockchain_1.compareAddresses)(pool.token0.address, lastTokenAddress)
                ? pool.token1
                : pool.token0;
            contractPath += newToken.address.slice(2).toLowerCase();
            lastTokenAddress = newToken.address;
        });
        return "0x".concat(contractPath);
    };
    /**
     * Returns swap method's name and arguments to pass it to Quoter contract.
     * @param poolsPath Pools, included in the route.
     * @param from From token.
     * @param to To token.
     * @param exact Is exact input or output trade.
     * @param weiAmount Amount of tokens to trade.
     */
    UniswapV3QuoterController.getQuoterMethodData = function (poolsPath, from, to, exact, weiAmount) {
        if (poolsPath.length === 1) {
            var methodName_1 = exact === 'input' ? 'quoteExactInputSingle' : 'quoteExactOutputSingle';
            var sqrtPriceLimitX96 = 0;
            return {
                poolsPath: poolsPath,
                methodData: {
                    methodName: methodName_1,
                    methodArguments: [
                        from.address,
                        to.address,
                        poolsPath[0].fee,
                        weiAmount,
                        sqrtPriceLimitX96
                    ]
                }
            };
        }
        var methodName = exact === 'input' ? 'quoteExactInput' : 'quoteExactOutput';
        var tokensPath = exact === 'input' ? poolsPath : poolsPath.reverse();
        var initialTokenAddress = exact === 'input' ? from.address : to.address;
        return {
            poolsPath: poolsPath,
            methodData: {
                methodName: methodName,
                methodArguments: [
                    UniswapV3QuoterController.getEncodedPoolsPath(tokensPath, initialTokenAddress),
                    weiAmount
                ]
            }
        };
    };
    Object.defineProperty(UniswapV3QuoterController.prototype, "web3Public", {
        get: function () {
            return injector_1.Injector.web3PublicService.getWeb3Public(this.blockchain);
        },
        enumerable: false,
        configurable: true
    });
    UniswapV3QuoterController.prototype.getOrCreateRouterTokensAndLiquidityPools = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokens_1, liquidityPools;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.routerTokens || !this.routerLiquidityPools)) return [3 /*break*/, 2];
                        return [4 /*yield*/, token_1.Token.createTokens(Object.values(this.routerConfiguration.tokens), this.blockchain)];
                    case 1:
                        tokens_1 = _a.sent();
                        liquidityPools = this.routerConfiguration.liquidityPools.map(function (liquidityPool) {
                            var tokenA = tokens_1.find(function (token) { return token.symbol === liquidityPool.tokenSymbolA; });
                            var tokenB = tokens_1.find(function (token) { return token.symbol === liquidityPool.tokenSymbolB; });
                            return new liquidity_pool_1.LiquidityPool(liquidityPool.poolAddress, tokenA, tokenB, liquidityPool.fee);
                        });
                        this.routerTokens = tokens_1;
                        this.routerLiquidityPools = liquidityPools;
                        _a.label = 2;
                    case 2: return [2 /*return*/, {
                            routerTokens: this.routerTokens,
                            routerLiquidityPools: this.routerLiquidityPools
                        }];
                }
            });
        });
    };
    /**
     * Returns all liquidity pools, containing passed tokens addresses, and concatenates with most popular pools.
     */
    UniswapV3QuoterController.prototype.getAllLiquidityPools = function (firstToken, secondToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, routerTokens, routerLiquidityPools, getPoolsMethodArguments, poolsAddresses;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateRouterTokensAndLiquidityPools()];
                    case 1:
                        _a = _b.sent(), routerTokens = _a.routerTokens, routerLiquidityPools = _a.routerLiquidityPools;
                        getPoolsMethodArguments = [];
                        getPoolsMethodArguments.push.apply(getPoolsMethodArguments, Object.values(routerTokens)
                            .filter(function (routerToken) { return !routerToken.isEqualToTokens([firstToken, secondToken]); })
                            .map(function (routerToken) {
                            return _this.feeAmounts
                                .map(function (fee) { return [
                                { tokenA: firstToken, tokenB: routerToken, fee: fee },
                                { tokenA: secondToken, tokenB: routerToken, fee: fee }
                            ]; })
                                .flat();
                        })
                            .flat());
                        getPoolsMethodArguments.push.apply(getPoolsMethodArguments, this.feeAmounts.map(function (fee) { return ({
                            tokenA: firstToken,
                            tokenB: secondToken,
                            fee: fee
                        }); }));
                        getPoolsMethodArguments = getPoolsMethodArguments.filter(function (methodArguments) {
                            return !routerLiquidityPools.find(function (pool) {
                                return pool.isPoolWithTokens(methodArguments.tokenA.address, methodArguments.tokenB.address) && pool.fee === methodArguments.fee;
                            });
                        });
                        return [4 /*yield*/, this.web3Public.multicallContractMethod(factory_contract_data_1.FACTORY_CONTRACT_ADDRESS, factory_contract_data_1.FACTORY_CONTRACT_ABI, 'getPool', getPoolsMethodArguments.map(function (methodArguments) { return [
                                methodArguments.tokenA.address,
                                methodArguments.tokenB.address,
                                methodArguments.fee
                            ]; }))];
                    case 2:
                        poolsAddresses = (_b.sent()).map(function (result) { return result.output[0]; });
                        return [2 /*return*/, poolsAddresses
                                .map(function (poolAddress, index) {
                                if (!web3_pure_1.Web3Pure.isZeroAddress(poolAddress)) {
                                    return new liquidity_pool_1.LiquidityPool(poolAddress, getPoolsMethodArguments[index].tokenA, getPoolsMethodArguments[index].tokenB, getPoolsMethodArguments[index].fee);
                                }
                                return null;
                            })
                                .filter(object_1.notNull)
                                .concat(routerLiquidityPools)];
                }
            });
        });
    };
    UniswapV3QuoterController.prototype.getAllRoutes = function (from, to, exact, weiAmount, routeMaxTransitTokens) {
        return __awaiter(this, void 0, void 0, function () {
            var routesLiquidityPools, options, quoterMethodsData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllLiquidityPools(from, to)];
                    case 1:
                        routesLiquidityPools = _a.sent();
                        options = {
                            routesLiquidityPools: routesLiquidityPools,
                            from: from,
                            to: to,
                            exact: exact,
                            weiAmount: weiAmount
                        };
                        quoterMethodsData = __spreadArray([], Array(routeMaxTransitTokens + 1), true).map(function (_, maxTransitTokens) {
                            return _this.getQuoterMethodsData(__assign(__assign({}, options), { maxTransitTokens: maxTransitTokens }), [], from.address);
                        })
                            .flat();
                        return [2 /*return*/, this.web3Public
                                .multicallContractMethods(quoter_contract_data_1.QUOTER_CONTRACT_ADDRESS, quoter_contract_data_1.QUOTER_CONTRACT_ABI, quoterMethodsData.map(function (quoterMethodData) { return quoterMethodData.methodData; }))
                                .then(function (results) {
                                return results
                                    .map(function (result, index) {
                                    if (result.success) {
                                        return {
                                            outputAbsoluteAmount: new bignumber_js_1.default(result.output[0]),
                                            poolsPath: quoterMethodsData[index].poolsPath,
                                            initialTokenAddress: from.address
                                        };
                                    }
                                    return null;
                                })
                                    .filter(object_1.notNull);
                            })];
                }
            });
        });
    };
    /**
     * Returns swap methods' names and arguments, built with passed pools' addresses, to use it in Quoter contract.
     */
    UniswapV3QuoterController.prototype.getQuoterMethodsData = function (options, path, lastTokenAddress) {
        var _this = this;
        var routesLiquidityPools = options.routesLiquidityPools, from = options.from, to = options.to, exact = options.exact, weiAmount = options.weiAmount, maxTransitTokens = options.maxTransitTokens;
        if (path.length === maxTransitTokens) {
            var pools = routesLiquidityPools.filter(function (pool) {
                return pool.isPoolWithTokens(lastTokenAddress, to.address);
            });
            return pools.map(function (pool) {
                return UniswapV3QuoterController.getQuoterMethodData(path.concat(pool), from, to, exact, weiAmount);
            });
        }
        return routesLiquidityPools
            .filter(function (pool) { return !path.includes(pool); })
            .map(function (pool) {
            var methodsData = [];
            if ((0, blockchain_1.compareAddresses)(pool.token0.address, lastTokenAddress)) {
                var extendedPath = path.concat(pool);
                methodsData.push.apply(methodsData, _this.getQuoterMethodsData(options, extendedPath, pool.token1.address));
            }
            if ((0, blockchain_1.compareAddresses)(pool.token1.address, lastTokenAddress)) {
                var extendedPath = path.concat(pool);
                methodsData.push.apply(methodsData, _this.getQuoterMethodsData(options, extendedPath, pool.token0.address));
            }
            return methodsData;
        })
            .flat();
    };
    __decorate([
        (0, cache_decorator_1.Cache)({
            maxAge: 1000 * 60 * 10
        })
    ], UniswapV3QuoterController.prototype, "getAllLiquidityPools", null);
    __decorate([
        cache_decorator_1.Cache
    ], UniswapV3QuoterController, "getEncodedPoolsPath", null);
    __decorate([
        cache_decorator_1.Cache
    ], UniswapV3QuoterController, "getQuoterMethodData", null);
    return UniswapV3QuoterController;
}());
exports.UniswapV3QuoterController = UniswapV3QuoterController;
//# sourceMappingURL=uniswap-v3-quoter-controller.js.map