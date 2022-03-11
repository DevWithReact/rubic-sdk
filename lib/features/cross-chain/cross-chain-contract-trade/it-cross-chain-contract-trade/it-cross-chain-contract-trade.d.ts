import { CrossChainSupportedBlockchain } from '../../constants/cross-chain-supported-blockchains';
import { CrossChainContractData } from '../../cross-chain-contract-data/cross-chain-contract-data';
import { CrossChainContractTrade } from '../cross-chain-contract-trade';
import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from '../../../../core';
import { CrossChainSupportedInstantTrade } from '../../models/cross-chain-supported-instant-trade';
export declare class ItCrossChainContractTrade extends CrossChainContractTrade {
    readonly slippageTolerance: number;
    private readonly instantTrade;
    readonly fromToken: PriceTokenAmount;
    readonly toToken: PriceTokenAmount;
    readonly toTokenAmountMin: BigNumber;
    private readonly crossChainInstantTrade;
    constructor(blockchain: CrossChainSupportedBlockchain, contract: CrossChainContractData, providerIndex: number, slippageTolerance: number, instantTrade: CrossChainSupportedInstantTrade);
    protected getFirstPath(): string[] | string;
    protected getSecondPath(): string[];
    protected modifyArgumentsForProvider(methodArguments: unknown[][], walletAddress: string): Promise<void>;
}
