import { LiquidityPool } from './models/liquidity-pool';
import { UniswapV3Route } from '../../models/uniswap-v3-route';
import { Token } from '../../../../../../../core/blockchain/tokens/token';
import { BLOCKCHAIN_NAME } from '../../../../../../../core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV3RouterConfiguration } from '../../models/uniswap-v3-router-configuration';
import { UniswapV3AlgebraQuoterController } from '../../../uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-quoter-controller';
import { Exact } from '../../../../../models/exact';
/**
 * Works with requests, related to Uniswap v3 liquidity pools.
 */
export declare class UniswapV3QuoterController implements UniswapV3AlgebraQuoterController {
    private readonly blockchain;
    private readonly routerConfiguration;
    /**
     * Converts uni v3 route to encoded bytes string to pass it to contract.
     * Structure of encoded string: '0x${tokenAddress_0}${toHex(fee_0)}${tokenAddress_1}${toHex(fee_1)}...${tokenAddress_n}.
     * toHex(fee_i) must be of length 6, so leading zeroes are added.
     * @param pools Liquidity pools, included in route.
     * @param initialTokenAddress From token address.
     * @return string Encoded string.
     */
    static getEncodedPoolsPath(pools: LiquidityPool[], initialTokenAddress: string): string;
    /**
     * Returns swap method's name and arguments to pass it to Quoter contract.
     * @param poolsPath Pools, included in the route.
     * @param from From token.
     * @param to To token.
     * @param exact Is exact input or output trade.
     * @param weiAmount Amount of tokens to trade.
     */
    private static getQuoterMethodData;
    private routerTokens;
    private routerLiquidityPools;
    private readonly feeAmounts;
    private get web3Public();
    constructor(blockchain: BLOCKCHAIN_NAME, routerConfiguration: UniswapV3RouterConfiguration<string>);
    private getOrCreateRouterTokensAndLiquidityPools;
    /**
     * Returns all liquidity pools, containing passed tokens addresses, and concatenates with most popular pools.
     */
    private getAllLiquidityPools;
    getAllRoutes(from: Token, to: Token, exact: Exact, weiAmount: string, routeMaxTransitTokens: number): Promise<UniswapV3Route[]>;
    /**
     * Returns swap methods' names and arguments, built with passed pools' addresses, to use it in Quoter contract.
     */
    private getQuoterMethodsData;
}
