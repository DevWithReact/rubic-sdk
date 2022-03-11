import { RubicSdkError } from '../rubic-sdk.error';
import BigNumber from 'bignumber.js';
export declare class CrossChainMaxAmountError extends RubicSdkError {
    constructor(maxAmount: BigNumber, tokenSymbol: string);
}
