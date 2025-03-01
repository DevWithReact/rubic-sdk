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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3PrivateFactory = void 0;
var wrong_chain_id_error_1 = require("../../../common/errors/provider/wrong-chain-id.error");
var rubic_sdk_error_1 = require("../../../common/errors/rubic-sdk.error");
var blockchains_info_1 = require("../blockchains-info");
var web3_private_1 = require("./web3-private");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var web3_1 = __importDefault(require("web3"));
var Web3PrivateFactory = /** @class */ (function () {
    function Web3PrivateFactory(core, walletAddrrss, chainId) {
        this.core = core;
        this.walletAddrrss = walletAddrrss;
        this.chainId = chainId;
    }
    Web3PrivateFactory.createWeb3Private = function (walletProvider) {
        return __awaiter(this, void 0, void 0, function () {
            var web3PrivateFactory;
            return __generator(this, function (_a) {
                if (!walletProvider) {
                    return [2 /*return*/, Web3PrivateFactory.createWeb3PrivateEmptyProxy()];
                }
                web3PrivateFactory = new Web3PrivateFactory(walletProvider.core, walletProvider.address, new bignumber_js_1.default(walletProvider.chainId).toNumber());
                return [2 /*return*/, web3PrivateFactory.createWeb3Private()];
            });
        });
    };
    Web3PrivateFactory.createWeb3PrivateEmptyProxy = function () {
        return Promise.resolve(new Proxy({}, {
            get: function (_, prop) {
                // Promise resolving procedure checks if `then` property exists in resolved object
                // https://promisesaplus.com/
                if (prop === 'then') {
                    return;
                }
                if (prop === 'address') {
                    return;
                }
                throw new rubic_sdk_error_1.RubicSdkError('Cant call web3Private method because walletProvider was not configurated. Try to pass walletProvider to sdk configuration');
            }
        }));
    };
    Web3PrivateFactory.prototype.createWeb3Private = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.createWeb3();
                        return [4 /*yield*/, this.parseChainId()];
                    case 1:
                        _a.sent();
                        this.parseAddress();
                        return [2 /*return*/, this.createWeb3PrivateInstance()];
                }
            });
        });
    };
    Web3PrivateFactory.prototype.createWeb3 = function () {
        var web3 = this.core;
        if (!(this.core instanceof web3_1.default)) {
            web3 = new web3_1.default(this.core);
        }
        this.web3 = web3;
    };
    Web3PrivateFactory.prototype.parseChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var realChainId, blockchainName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.web3) {
                            throw new rubic_sdk_error_1.RubicSdkError('Web3 is not initialized');
                        }
                        return [4 /*yield*/, this.web3.eth.getChainId()];
                    case 1:
                        realChainId = _a.sent();
                        if (!new bignumber_js_1.default(realChainId).eq(this.chainId)) {
                            throw new wrong_chain_id_error_1.WrongChainIdError();
                        }
                        blockchainName = blockchains_info_1.BlockchainsInfo.getBlockchainById(realChainId);
                        if (!blockchainName) {
                            throw new wrong_chain_id_error_1.WrongChainIdError();
                        }
                        this.blockchainName = blockchainName.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    Web3PrivateFactory.prototype.parseAddress = function () {
        if (!this.web3) {
            throw new rubic_sdk_error_1.RubicSdkError('Web3 is not initialized');
        }
        this.address = this.web3.utils.toChecksumAddress(this.walletAddrrss);
    };
    Web3PrivateFactory.prototype.createWeb3PrivateInstance = function () {
        var walletConfiguration = {
            web3: this.web3,
            address: this.address,
            blockchainName: this.blockchainName
        };
        return new web3_private_1.Web3Private(walletConfiguration);
    };
    return Web3PrivateFactory;
}());
exports.Web3PrivateFactory = Web3PrivateFactory;
//# sourceMappingURL=web3-private-factory.js.map