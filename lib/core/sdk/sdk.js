"use strict";
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
exports.SDK = void 0;
var default_http_client_1 = require("../../common/http/default-http-client");
var web3_private_factory_1 = require("../blockchain/web3-private/web3-private-factory");
var web3_public_service_1 = require("../blockchain/web3-public/web3-public-service");
var injector_1 = require("./injector");
var cross_chain_manager_1 = require("../../features/cross-chain/cross-chain-manager");
var instant_trades_manager_1 = require("../../features/instant-trades/instant-trades-manager");
var tokens_manager_1 = require("../../features/tokens/tokens-manager");
var empty_address_1 = require("../blockchain/constants/empty-address");
var SDK = /** @class */ (function () {
    function SDK(providerAddress) {
        this.tokens = new tokens_manager_1.TokensManager();
        this.web3PublicService = injector_1.Injector.web3PublicService;
        this.web3Private = injector_1.Injector.web3Private;
        this.gasPriceApi = injector_1.Injector.gasPriceApi;
        this.cryptoPriceApi = injector_1.Injector.coingeckoApi;
        this.instantTrades = new instant_trades_manager_1.InstantTradesManager();
        this.crossChain = new cross_chain_manager_1.CrossChainManager(providerAddress);
    }
    SDK.createSDK = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, web3PublicService, web3Private, httpClient;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            SDK.createWeb3PublicService(configuration),
                            SDK.createWeb3Private(configuration),
                            SDK.createHttpClient(configuration)
                        ])];
                    case 1:
                        _a = _b.sent(), web3PublicService = _a[0], web3Private = _a[1], httpClient = _a[2];
                        injector_1.Injector.createInjector(web3PublicService, web3Private, httpClient);
                        return [2 /*return*/, new SDK(configuration.providerAddress || empty_address_1.EMPTY_ADDRESS)];
                }
            });
        });
    };
    SDK.createWeb3Private = function (configuration) {
        return web3_private_factory_1.Web3PrivateFactory.createWeb3Private(configuration.walletProvider);
    };
    SDK.createWeb3PublicService = function (configuration) {
        return web3_public_service_1.Web3PublicService.createWeb3PublicService(configuration.rpcProviders);
    };
    SDK.createHttpClient = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!configuration.httpClient) {
                    return [2 /*return*/, default_http_client_1.DefaultHttpClient.getInstance()];
                }
                return [2 /*return*/, configuration.httpClient];
            });
        });
    };
    SDK.prototype.updateConfiguration = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, web3PublicService, web3Private, httpClient;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            SDK.createWeb3PublicService(configuration),
                            SDK.createWeb3Private(configuration),
                            SDK.createHttpClient(configuration)
                        ])];
                    case 1:
                        _a = _b.sent(), web3PublicService = _a[0], web3Private = _a[1], httpClient = _a[2];
                        injector_1.Injector.createInjector(web3PublicService, web3Private, httpClient);
                        return [2 /*return*/];
                }
            });
        });
    };
    return SDK;
}());
exports.SDK = SDK;
//# sourceMappingURL=sdk.js.map