import { Token } from '../../../../../../core';
import { UniswapV3AlgebraRoute } from '../../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-route';
export interface AlgebraRoute extends UniswapV3AlgebraRoute {
    /**
     * List of pools' contract addresses to use in a trade's route.
     */
    path: Token[];
}
