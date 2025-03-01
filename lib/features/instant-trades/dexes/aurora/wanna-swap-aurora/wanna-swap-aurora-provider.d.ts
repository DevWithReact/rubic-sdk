import { UniswapV2AbstractProvider } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { WannaSwapAuroraTrade } from './wanna-swap-aurora-trade';
export declare class WannaSwapAuroraProvider extends UniswapV2AbstractProvider<WannaSwapAuroraTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.AURORA;
    readonly InstantTradeClass: typeof WannaSwapAuroraTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
