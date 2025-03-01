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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainMinAmountError = void 0;
var rubic_sdk_error_1 = require("../rubic-sdk.error");
var CrossChainMinAmountError = /** @class */ (function (_super) {
    __extends(CrossChainMinAmountError, _super);
    function CrossChainMinAmountError(minAmount, tokenSymbol) {
        var _this = _super.call(this, "Min amount is ".concat(minAmount.toFixed(), " ").concat(tokenSymbol)) || this;
        Object.setPrototypeOf(_this, CrossChainMinAmountError.prototype);
        return _this;
    }
    return CrossChainMinAmountError;
}(rubic_sdk_error_1.RubicSdkError));
exports.CrossChainMinAmountError = CrossChainMinAmountError;
//# sourceMappingURL=cross-chain-min-amount-error.js.map