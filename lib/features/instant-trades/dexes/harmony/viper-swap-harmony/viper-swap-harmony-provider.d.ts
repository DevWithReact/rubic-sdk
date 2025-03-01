import { UniswapV2AbstractProvider } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { ViperSwapHarmonyTrade } from './viper-swap-harmony-trade';
export declare class ViperSwapHarmonyProvider extends UniswapV2AbstractProvider<ViperSwapHarmonyTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.HARMONY;
    readonly InstantTradeClass: typeof ViperSwapHarmonyTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
