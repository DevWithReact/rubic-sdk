import { UniswapV2AbstractProvider } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapArbitrumTrade } from './sushi-swap-arbitrum-trade';
export declare class SushiSwapArbitrumProvider extends UniswapV2AbstractProvider<SushiSwapArbitrumTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.ARBITRUM;
    readonly InstantTradeClass: typeof SushiSwapArbitrumTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
