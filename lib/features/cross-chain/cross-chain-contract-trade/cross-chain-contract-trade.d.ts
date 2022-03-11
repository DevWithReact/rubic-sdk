import { CrossChainSupportedBlockchain } from '../constants/cross-chain-supported-blockchains';
import { CrossChainContractData } from '../cross-chain-contract-data/cross-chain-contract-data';
import BigNumber from 'bignumber.js';
import { PriceTokenAmount } from '../../../core/blockchain/tokens/price-token-amount';
import { AbiItem } from 'web3-utils';
import { CrossChainSupportedInstantTradeProvider } from '../models/cross-chain-supported-instant-trade';
export declare abstract class CrossChainContractTrade {
    readonly blockchain: CrossChainSupportedBlockchain;
    readonly contract: CrossChainContractData;
    private readonly providerIndex;
    abstract readonly fromToken: PriceTokenAmount;
    abstract readonly toToken: PriceTokenAmount;
    abstract readonly toTokenAmountMin: BigNumber;
    get provider(): CrossChainSupportedInstantTradeProvider;
    private get providerData();
    protected constructor(blockchain: CrossChainSupportedBlockchain, contract: CrossChainContractData, providerIndex: number);
    /**
     * Returns method's name and contract abi to call in source network.
     */
    getMethodNameAndContractAbi(): {
        methodName: string;
        contractAbi: AbiItem[];
    };
    private getAbiMethodByProvider;
    /**
     * Returns method's arguments to use in source network.
     */
    getMethodArguments(toContractTrade: CrossChainContractTrade, walletAddress: string, providerAddress: string): Promise<unknown[]>;
    protected abstract modifyArgumentsForProvider(methodArguments: unknown[][], walletAddress: string): Promise<void>;
    /**
     * Returns `first path` method argument, converted from instant-trade data and chosen provider.
     * Must be called on source contract.
     */
    protected abstract getFirstPath(): string[] | string;
    /**
     * Returns `second path` method argument, converted from instant-trade data and chosen provider.
     * Must be called on target contract.
     */
    protected abstract getSecondPath(): string[];
    /**
     * Returns swap method name in target network.
     * Must be called on target contract.
     */
    getSwapToUserMethodSignature(): string;
}
