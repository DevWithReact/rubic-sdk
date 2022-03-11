import { UniswapV2AbstractTrade } from '../../../..';
import { CrossChainInstantTrade } from './models/cross-chain-instant-trade';
export declare class CrossChainUniswapV2Trade implements CrossChainInstantTrade {
    private readonly instantTrade;
    constructor(instantTrade: UniswapV2AbstractTrade);
    getFirstPath(): string[];
    getSecondPath(): string[];
    modifyArgumentsForProvider(methodArguments: unknown[][]): Promise<void>;
}
