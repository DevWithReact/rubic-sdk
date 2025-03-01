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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3AbstractProvider = void 0;
var uniswap_v3_quoter_controller_1 = require("./utils/quoter-controller/uniswap-v3-quoter-controller");
var common_1 = require("../../../../../common");
var uniswap_v3_algebra_abstract_provider_1 = require("../uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider");
var UniswapV3AbstractProvider = /** @class */ (function (_super) {
    __extends(UniswapV3AbstractProvider, _super);
    function UniswapV3AbstractProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRubicOptimisationEnabled = false;
        return _this;
    }
    Object.defineProperty(UniswapV3AbstractProvider.prototype, "quoterController", {
        get: function () {
            return new uniswap_v3_quoter_controller_1.UniswapV3QuoterController(this.blockchain, this.routerConfiguration);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UniswapV3AbstractProvider.prototype, "type", {
        get: function () {
            return this.InstantTradeClass.type;
        },
        enumerable: false,
        configurable: true
    });
    UniswapV3AbstractProvider.prototype.createTradeInstance = function (tradeStruct, route) {
        return new this.InstantTradeClass(__assign(__assign({}, tradeStruct), { route: route }));
    };
    __decorate([
        common_1.Cache
    ], UniswapV3AbstractProvider.prototype, "quoterController", null);
    return UniswapV3AbstractProvider;
}(uniswap_v3_algebra_abstract_provider_1.UniswapV3AlgebraAbstractProvider));
exports.UniswapV3AbstractProvider = UniswapV3AbstractProvider;
//# sourceMappingURL=uniswap-v3-abstract-provider.js.map