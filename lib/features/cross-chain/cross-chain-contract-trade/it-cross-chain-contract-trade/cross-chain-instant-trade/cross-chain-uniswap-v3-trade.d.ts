import { CrossChainInstantTrade } from './models/cross-chain-instant-trade';
import { UniswapV3AbstractTrade } from '../../../../instant-trades/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade';
export declare class CrossChainUniswapV3Trade implements CrossChainInstantTrade {
    private readonly instantTrade;
    constructor(instantTrade: UniswapV3AbstractTrade);
    getFirstPath(): string;
    getSecondPath(): string[];
    modifyArgumentsForProvider(methodArguments: unknown[][]): Promise<void>;
}
