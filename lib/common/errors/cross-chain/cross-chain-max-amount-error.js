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
exports.CrossChainMaxAmountError = void 0;
var rubic_sdk_error_1 = require("../rubic-sdk.error");
var CrossChainMaxAmountError = /** @class */ (function (_super) {
    __extends(CrossChainMaxAmountError, _super);
    function CrossChainMaxAmountError(maxAmount, tokenSymbol) {
        var _this = _super.call(this, "Max amount is ".concat(maxAmount.toFixed(), " ").concat(tokenSymbol)) || this;
        Object.setPrototypeOf(_this, CrossChainMaxAmountError.prototype);
        return _this;
    }
    return CrossChainMaxAmountError;
}(rubic_sdk_error_1.RubicSdkError));
exports.CrossChainMaxAmountError = CrossChainMaxAmountError;
//# sourceMappingURL=cross-chain-max-amount-error.js.map