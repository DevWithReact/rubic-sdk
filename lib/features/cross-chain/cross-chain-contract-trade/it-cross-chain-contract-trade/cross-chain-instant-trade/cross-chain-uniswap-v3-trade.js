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
exports.CrossChainUniswapV3Trade = void 0;
var core_1 = require("../../../../../core");
var uniswap_v3_quoter_controller_1 = require("../../../../instant-trades/dexes/common/uniswap-v3-abstract/utils/quoter-controller/uniswap-v3-quoter-controller");
var common_1 = require("../../../../../common");
var CrossChainUniswapV3Trade = /** @class */ (function () {
    function CrossChainUniswapV3Trade(instantTrade) {
        this.instantTrade = instantTrade;
    }
    CrossChainUniswapV3Trade.prototype.getFirstPath = function () {
        var route = this.instantTrade.route;
        return uniswap_v3_quoter_controller_1.UniswapV3QuoterController.getEncodedPoolsPath(route.poolsPath, route.initialTokenAddress);
    };
    CrossChainUniswapV3Trade.prototype.getSecondPath = function () {
        var route = this.instantTrade.route;
        var path = [core_1.Web3Pure.addressToBytes32(route.initialTokenAddress)];
        var lastTokenAddress = route.initialTokenAddress;
        route.poolsPath.forEach(function (pool) {
            var newToken = (0, common_1.compareAddresses)(pool.token0.address, lastTokenAddress)
                ? pool.token1
                : pool.token0;
            lastTokenAddress = newToken.address;
            path.push("0x".concat(pool.fee.toString(16).padStart(6, '0').padEnd(24, '0')).concat(lastTokenAddress
                .slice(2)
                .toLowerCase()));
        });
        return path;
    };
    CrossChainUniswapV3Trade.prototype.modifyArgumentsForProvider = function (methodArguments) {
        return __awaiter(this, void 0, void 0, function () {
            var exactTokensForTokens;
            return __generator(this, function (_a) {
                exactTokensForTokens = true;
                methodArguments[0].push(exactTokensForTokens);
                return [2 /*return*/];
            });
        });
    };
    return CrossChainUniswapV3Trade;
}());
exports.CrossChainUniswapV3Trade = CrossChainUniswapV3Trade;
//# sourceMappingURL=cross-chain-uniswap-v3-trade.js.map