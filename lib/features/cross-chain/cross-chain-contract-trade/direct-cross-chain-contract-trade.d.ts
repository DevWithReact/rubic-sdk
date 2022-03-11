import { CrossChainSupportedBlockchain } from '../constants/cross-chain-supported-blockchains';
import { CrossChainContractData } from '../cross-chain-contract-data/cross-chain-contract-data';
import { PriceTokenAmount } from '../../../core/blockchain/tokens/price-token-amount';
import { CrossChainContractTrade } from './cross-chain-contract-trade';
import BigNumber from 'bignumber.js';
export declare class DirectCrossChainContractTrade extends CrossChainContractTrade {
    private readonly token;
    readonly fromToken: PriceTokenAmount;
    readonly toToken: PriceTokenAmount;
    readonly toTokenAmountMin: BigNumber;
    constructor(blockchain: CrossChainSupportedBlockchain, contract: CrossChainContractData, token: PriceTokenAmount);
    protected getFirstPath(): string[];
    protected getSecondPath(): string[];
    protected modifyArgumentsForProvider(methodArguments: unknown[][]): Promise<void>;
}
