import { UniswapV2AbstractProvider } from '../../common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { TrisolarisAuroraTrade } from './trisolaris-aurora-trade';
export declare class TrisolarisAuroraProvider extends UniswapV2AbstractProvider<TrisolarisAuroraTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.AURORA;
    readonly InstantTradeClass: typeof TrisolarisAuroraTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}
