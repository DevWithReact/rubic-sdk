import { PriceToken } from '../../../../../core';
import { PriceTokenAmount } from '../../../../../core/blockchain/tokens/price-token-amount';
import BigNumber from 'bignumber.js';
import { Exact } from '../../../models/exact';
export declare function getFromToTokensAmountsByExact(fromToken: PriceToken, toToken: PriceToken, exact: Exact, initialWeiAmount: BigNumber, routeWeiAmount: BigNumber): {
    from: PriceTokenAmount;
    to: PriceTokenAmount;
};
