import { CrossChainInstantTrade } from './models/cross-chain-instant-trade';
import { AlgebraTrade } from '../../../../instant-trades/dexes/polygon/algebra/algebra-trade';
export declare class CrossChainAlgebraTrade implements CrossChainInstantTrade {
    private readonly instantTrade;
    constructor(instantTrade: AlgebraTrade);
    getFirstPath(): string;
    getSecondPath(): string[];
    modifyArgumentsForProvider(methodArguments: unknown[][]): Promise<void>;
}
