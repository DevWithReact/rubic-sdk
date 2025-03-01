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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgebraProvider = void 0;
var features_1 = require("../../../..");
var core_1 = require("../../../../../core");
var algebra_quoter_controller_1 = require("./utils/quoter-controller/algebra-quoter-controller");
var uniswap_v3_algebra_abstract_provider_1 = require("../../common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider");
var algebra_trade_1 = require("./algebra-trade");
var provider_configuration_1 = require("./constants/provider-configuration");
var AlgebraProvider = /** @class */ (function (_super) {
    __extends(AlgebraProvider, _super);
    function AlgebraProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockchain = core_1.BLOCKCHAIN_NAME.POLYGON;
        _this.InstantTradeClass = algebra_trade_1.AlgebraTrade;
        _this.quoterController = new algebra_quoter_controller_1.AlgebraQuoterController();
        _this.providerConfiguration = provider_configuration_1.ALGEBRA_V3_PROVIDER_CONFIGURATION;
        return _this;
    }
    Object.defineProperty(AlgebraProvider.prototype, "type", {
        get: function () {
            return features_1.TRADE_TYPE.ALGEBRA;
        },
        enumerable: false,
        configurable: true
    });
    AlgebraProvider.prototype.createTradeInstance = function (tradeStruct, route) {
        return new algebra_trade_1.AlgebraTrade(__assign(__assign({}, tradeStruct), { route: route }));
    };
    return AlgebraProvider;
}(uniswap_v3_algebra_abstract_provider_1.UniswapV3AlgebraAbstractProvider));
exports.AlgebraProvider = AlgebraProvider;
//# sourceMappingURL=algebra-provider.js.map