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
exports.AlgebraQuoterController = void 0;
var core_1 = require("../../../../../../../core");
var common_1 = require("../../../../../../../common");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var quoter_contract_data_1 = require("./constants/quoter-contract-data");
var injector_1 = require("../../../../../../../core/sdk/injector");
var router_tokens_1 = require("./constants/router-tokens");
var token_1 = require("../../../../../../../core/blockchain/tokens/token");
/**
 * Works with requests, related to Uniswap v3 liquidity pools.
 */
var AlgebraQuoterController = /** @class */ (function () {
    function AlgebraQuoterController() {
    }
    /**
     * Converts algebra route to encoded bytes string to pass it to contract.
     * Structure of encoded string: '0x${tokenAddress_0}${tokenAddress_1}...${tokenAddress_n}.
     * @param path Symbol tokens, included in route.
     * @return string Encoded string.
     */
    AlgebraQuoterController.getEncodedPath = function (path) {
        var encodedPath = path.reduce(function (accEncodedPath, token) { return accEncodedPath + token.address.slice(2).toLowerCase(); }, '');
        return "0x".concat(encodedPath);
    };
    /**
     * Returns swap method's name and arguments to pass it to Quoter contract.
     * @param path Pools, included in route.
     * @param exact Is exact input or output trade.
     * @param weiAmount Amount of tokens to trade.
     */
    AlgebraQuoterController.getQuoterMethodData = function (path, exact, weiAmount) {
        if (path.length === 2) {
            var methodName_1 = exact === 'input' ? 'quoteExactInputSingle' : 'quoteExactOutputSingle';
            var limitSqrtPrice = 0;
            return {
                path: path,
                methodData: {
                    methodName: methodName_1,
                    methodArguments: [path[0].address, path[1].address, weiAmount, limitSqrtPrice]
                }
            };
        }
        var methodName = exact === 'input' ? 'quoteExactInput' : 'quoteExactOutput';
        var tokensPath = exact === 'input' ? path : path.reverse();
        return {
            path: path,
            methodData: {
                methodName: methodName,
                methodArguments: [AlgebraQuoterController.getEncodedPath(tokensPath), weiAmount]
            }
        };
    };
    Object.defineProperty(AlgebraQuoterController.prototype, "web3Public", {
        get: function () {
            return injector_1.Injector.web3PublicService.getWeb3Public(core_1.BLOCKCHAIN_NAME.POLYGON);
        },
        enumerable: false,
        configurable: true
    });
    AlgebraQuoterController.prototype.getOrCreateRouterTokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.routerTokens) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, token_1.Token.createTokens(router_tokens_1.ROUTER_TOKENS, core_1.BLOCKCHAIN_NAME.POLYGON)];
                    case 1:
                        _a.routerTokens = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.routerTokens];
                }
            });
        });
    };
    AlgebraQuoterController.prototype.getAllRoutes = function (from, to, exact, weiAmount, routeMaxTransitTokens) {
        return __awaiter(this, void 0, void 0, function () {
            var routesTokens, options, quoterMethodsData, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateRouterTokens()];
                    case 1:
                        routesTokens = (_a.sent()).filter(function (token) { return !token.isEqualToTokens([from, to]); });
                        options = {
                            routesTokens: routesTokens,
                            to: to,
                            exact: exact,
                            weiAmount: weiAmount
                        };
                        quoterMethodsData = __spreadArray([], Array(routeMaxTransitTokens + 1), true).map(function (_, maxTransitTokens) {
                            return _this.getQuoterMethodsData(__assign(__assign({}, options), { maxTransitTokens: maxTransitTokens }), [from]);
                        })
                            .flat();
                        return [4 /*yield*/, this.web3Public.multicallContractMethods(quoter_contract_data_1.QUOTER_CONTRACT_ADDRESS, quoter_contract_data_1.QUOTER_CONTRACT_ABI, quoterMethodsData.map(function (quoterMethodData) { return quoterMethodData.methodData; }))];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, results
                                .map(function (result, index) {
                                if (result.success) {
                                    return {
                                        outputAbsoluteAmount: new bignumber_js_1.default(result.output[0]),
                                        path: quoterMethodsData[index].path
                                    };
                                }
                                return null;
                            })
                                .filter(common_1.notNull)];
                }
            });
        });
    };
    /**
     * Returns swap methods' names and arguments, built with passed pools' addresses, to use it in Quoter contract.
     */
    AlgebraQuoterController.prototype.getQuoterMethodsData = function (options, path) {
        var _this = this;
        var routesTokens = options.routesTokens, to = options.to, exact = options.exact, weiAmount = options.weiAmount, maxTransitTokens = options.maxTransitTokens;
        if (path.length === maxTransitTokens + 1) {
            return [AlgebraQuoterController.getQuoterMethodData(path.concat(to), exact, weiAmount)];
        }
        return routesTokens
            .filter(function (token) { return !path.includes(token); })
            .map(function (token) { return _this.getQuoterMethodsData(options, path.concat(token)); })
            .flat();
    };
    return AlgebraQuoterController;
}());
exports.AlgebraQuoterController = AlgebraQuoterController;
//# sourceMappingURL=algebra-quoter-controller.js.map