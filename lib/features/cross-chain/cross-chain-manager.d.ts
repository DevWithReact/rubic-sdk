import { CrossChainSupportedBlockchain } from './constants/cross-chain-supported-blockchains';
import { Token } from '../../core/blockchain/tokens/token';
import { CrossChainOptions } from './models/cross-chain-options';
import { BLOCKCHAIN_NAME } from '../../core/blockchain/models/BLOCKCHAIN_NAME';
import { CrossChainTrade } from './cross-chain-trade/cross-chain-trade';
import { MinMaxAmounts } from './models/min-max-amounts';
export declare class CrossChainManager {
    private readonly providerAddress;
    static isSupportedBlockchain(blockchain: BLOCKCHAIN_NAME): blockchain is CrossChainSupportedBlockchain;
    private readonly contracts;
    private readonly defaultSlippageTolerance;
    constructor(providerAddress: string);
    calculateTrade(fromToken: Token | {
        address: string;
        blockchain: BLOCKCHAIN_NAME;
    }, fromAmount: string | number, toToken: Token | {
        address: string;
        blockchain: BLOCKCHAIN_NAME;
    }, options?: CrossChainOptions): Promise<CrossChainTrade>;
    private getFullOptions;
    private calculateTradeFromTokens;
    private calculateBestTrade;
    private getBestItContractTrade;
    private getItCalculatedTrade;
    private getToTransitTokenAmount;
    private checkMinMaxAmountsErrors;
    getMinMaxAmounts(fromToken: Token | {
        address: string;
        blockchain: BLOCKCHAIN_NAME;
    }, slippageTolerance?: number): Promise<MinMaxAmounts>;
    private getMinMaxAmountsDifficult;
    private getMinOrMaxAmount;
    private getMinMaxTransitTokenAmounts;
    private getTokenAmountForExactTransitTokenAmount;
    private getTokenAmountForExactTransitTokenAmountByProvider;
    private getCryptoFeeTokenAndGasData;
}
