import { BLOCKCHAIN_NAME } from '../../../core/blockchain/models/BLOCKCHAIN_NAME';
import { Token } from '../../../core/blockchain/tokens/token';
import { PriceTokenAmount } from '../../../core/blockchain/tokens/price-token-amount';
import BigNumber from 'bignumber.js';
import { ProviderData } from './models/provider-data';
import { CrossChainSupportedInstantTradeProvider } from '../models/cross-chain-supported-instant-trade';
/**
 * Class to work with readable methods of cross-chain contract.
 */
export declare class CrossChainContractData {
    private readonly blockchain;
    readonly address: string;
    readonly providersData: ProviderData[];
    private readonly web3Public;
    constructor(blockchain: BLOCKCHAIN_NAME, address: string, providersData: ProviderData[]);
    getProvider(providerIndex: number): CrossChainSupportedInstantTradeProvider;
    getNumOfBlockchain(): Promise<number>;
    getTransitToken(): Promise<Token>;
    getFeeInPercents(fromContract: CrossChainContractData): Promise<number>;
    getCryptoFeeToken(toContract: CrossChainContractData): Promise<PriceTokenAmount>;
    getMinOrMaxTransitTokenAmount(type: 'min' | 'max'): Promise<string>;
    isPaused(): Promise<boolean>;
    getMaxGasPrice(): Promise<BigNumber>;
}
