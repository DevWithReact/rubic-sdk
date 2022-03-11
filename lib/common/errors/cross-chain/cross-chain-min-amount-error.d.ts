import { RubicSdkError } from '../rubic-sdk.error';
import BigNumber from 'bignumber.js';
export declare class CrossChainMinAmountError extends RubicSdkError {
    constructor(minAmount: BigNumber, tokenSymbol: string);
}
