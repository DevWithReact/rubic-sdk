import { PriceToken } from '../../../../../../../core';
import { AlgebraRoute } from '../../models/algebra-route';
import { Token } from '../../../../../../../core/blockchain/tokens/token';
import { UniswapV3AlgebraQuoterController } from '../../../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-quoter-controller';
import { Exact } from '../../../../../models/exact';
/**
 * Works with requests, related to Uniswap v3 liquidity pools.
 */
export declare class AlgebraQuoterController implements UniswapV3AlgebraQuoterController {
    private routerTokens;
    /**
     * Converts algebra route to encoded bytes string to pass it to contract.
     * Structure of encoded string: '0x${tokenAddress_0}${tokenAddress_1}...${tokenAddress_n}.
     * @param path Symbol tokens, included in route.
     * @return string Encoded string.
     */
    static getEncodedPath(path: Token[]): string;
    /**
     * Returns swap method's name and arguments to pass it to Quoter contract.
     * @param path Pools, included in route.
     * @param exact Is exact input or output trade.
     * @param weiAmount Amount of tokens to trade.
     */
    private static getQuoterMethodData;
    private get web3Public();
    private getOrCreateRouterTokens;
    getAllRoutes(from: PriceToken, to: PriceToken, exact: Exact, weiAmount: string, routeMaxTransitTokens: number): Promise<AlgebraRoute[]>;
    /**
     * Returns swap methods' names and arguments, built with passed pools' addresses, to use it in Quoter contract.
     */
    private getQuoterMethodsData;
}
