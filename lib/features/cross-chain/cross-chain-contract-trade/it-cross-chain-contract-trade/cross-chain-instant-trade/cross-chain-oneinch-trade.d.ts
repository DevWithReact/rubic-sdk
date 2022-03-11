import { OneinchTrade } from '../../../..';
import { CrossChainInstantTrade } from './models/cross-chain-instant-trade';
export declare class CrossChainOneinchTrade implements CrossChainInstantTrade {
    private readonly instantTrade;
    constructor(instantTrade: OneinchTrade);
    getFirstPath(): string;
    getSecondPath(): string[];
    modifyArgumentsForProvider(methodArguments: unknown[][], walletAddress: string): Promise<void>;
}
