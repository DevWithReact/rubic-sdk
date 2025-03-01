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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainContractTrade = void 0;
var cross_chain_contract_abi_v2_1 = require("./constants/cross-chain-contract-abi-v2");
var core_1 = require("../../../core");
var common_1 = require("../../../common");
var cross_chain_contract_abi_v3_1 = require("./constants/cross-chain-contract-abi-v3");
var uniswap_v3_algebra_abstract_provider_1 = require("../../instant-trades/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider");
var uniswap_v2_abstract_provider_1 = require("../../instant-trades/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider");
var cross_chain_contract_abi_inch_1 = require("./constants/cross-chain-contract-abi-inch");
var TO_OTHER_BLOCKCHAIN_SWAP_METHOD;
(function (TO_OTHER_BLOCKCHAIN_SWAP_METHOD) {
    TO_OTHER_BLOCKCHAIN_SWAP_METHOD["SWAP_TOKENS"] = "swapTokensToOtherBlockchain";
    TO_OTHER_BLOCKCHAIN_SWAP_METHOD["SWAP_CRYPTO"] = "swapCryptoToOtherBlockchain";
})(TO_OTHER_BLOCKCHAIN_SWAP_METHOD || (TO_OTHER_BLOCKCHAIN_SWAP_METHOD = {}));
var TO_USER_SWAP_METHOD;
(function (TO_USER_SWAP_METHOD) {
    TO_USER_SWAP_METHOD["SWAP_TOKENS"] = "swapTokensToUserWithFee";
    TO_USER_SWAP_METHOD["SWAP_CRYPTO"] = "swapCryptoToUserWithFee";
})(TO_USER_SWAP_METHOD || (TO_USER_SWAP_METHOD = {}));
var CrossChainContractTrade = /** @class */ (function () {
    function CrossChainContractTrade(blockchain, contract, providerIndex) {
        this.blockchain = blockchain;
        this.contract = contract;
        this.providerIndex = providerIndex;
    }
    Object.defineProperty(CrossChainContractTrade.prototype, "provider", {
        get: function () {
            return this.contract.providersData[this.providerIndex].provider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CrossChainContractTrade.prototype, "providerData", {
        get: function () {
            return this.contract.providersData[this.providerIndex];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns method's name and contract abi to call in source network.
     */
    CrossChainContractTrade.prototype.getMethodNameAndContractAbi = function () {
        var methodName = this.fromToken.isNative
            ? TO_OTHER_BLOCKCHAIN_SWAP_METHOD.SWAP_CRYPTO
            : TO_OTHER_BLOCKCHAIN_SWAP_METHOD.SWAP_TOKENS;
        var contractAbiMethod = this.getAbiMethodByProvider(methodName);
        methodName += this.providerData.methodSuffix;
        contractAbiMethod.name = methodName;
        return {
            methodName: methodName,
            contractAbi: [contractAbiMethod]
        };
    };
    CrossChainContractTrade.prototype.getAbiMethodByProvider = function (methodName) {
        if (this.provider instanceof uniswap_v2_abstract_provider_1.UniswapV2AbstractProvider) {
            return __assign({}, cross_chain_contract_abi_v2_1.crossChainContractAbiV2.find(function (method) { return method.name === methodName; }));
        }
        if (this.provider instanceof uniswap_v3_algebra_abstract_provider_1.UniswapV3AlgebraAbstractProvider) {
            return __assign({}, cross_chain_contract_abi_v3_1.crossChainContractAbiV3.find(function (method) { return method.name.startsWith(methodName); }));
        }
        return __assign({}, cross_chain_contract_abi_inch_1.crossChainContractAbiInch.find(function (method) { return method.name.startsWith(methodName); }));
    };
    /**
     * Returns method's arguments to use in source network.
     */
    CrossChainContractTrade.prototype.getMethodArguments = function (toContractTrade, walletAddress, providerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var toNumOfBlockchain, tokenInAmountAbsolute, firstPath, secondPath, fromTransitTokenAmountMinAbsolute, tokenOutAmountMinAbsolute, toWalletAddressBytes32, isToTokenNative, swapToUserMethodSignature, methodArguments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toContractTrade.contract.getNumOfBlockchain()];
                    case 1:
                        toNumOfBlockchain = _a.sent();
                        tokenInAmountAbsolute = this.fromToken.stringWeiAmount;
                        firstPath = this.getFirstPath();
                        secondPath = toContractTrade.getSecondPath();
                        fromTransitTokenAmountMinAbsolute = core_1.Web3Pure.toWei(this.toTokenAmountMin, this.toToken.decimals);
                        tokenOutAmountMinAbsolute = core_1.Web3Pure.toWei(toContractTrade.toTokenAmountMin, this.toToken.decimals);
                        toWalletAddressBytes32 = core_1.Web3Pure.addressToBytes32(walletAddress);
                        isToTokenNative = this.toToken.isNative;
                        swapToUserMethodSignature = toContractTrade.getSwapToUserMethodSignature();
                        methodArguments = [
                            [
                                toNumOfBlockchain,
                                tokenInAmountAbsolute,
                                firstPath,
                                secondPath,
                                fromTransitTokenAmountMinAbsolute,
                                tokenOutAmountMinAbsolute,
                                toWalletAddressBytes32,
                                providerAddress,
                                isToTokenNative
                            ]
                        ];
                        return [4 /*yield*/, this.modifyArgumentsForProvider(methodArguments, this.contract.address)];
                    case 2:
                        _a.sent();
                        methodArguments[0].push(swapToUserMethodSignature);
                        return [2 /*return*/, methodArguments];
                }
            });
        });
    };
    /**
     * Returns swap method name in target network.
     * Must be called on target contract.
     */
    CrossChainContractTrade.prototype.getSwapToUserMethodSignature = function () {
        var methodName = this.toToken.isNative
            ? TO_USER_SWAP_METHOD.SWAP_CRYPTO
            : TO_USER_SWAP_METHOD.SWAP_TOKENS;
        methodName += this.providerData.methodSuffix;
        return methodName;
    };
    __decorate([
        common_1.Cache
    ], CrossChainContractTrade.prototype, "provider", null);
    __decorate([
        common_1.Cache
    ], CrossChainContractTrade.prototype, "providerData", null);
    return CrossChainContractTrade;
}());
exports.CrossChainContractTrade = CrossChainContractTrade;
//# sourceMappingURL=cross-chain-contract-trade.js.map