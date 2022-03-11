import { UniswapV3AbstractProvider } from '../../common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
import { UniSwapV3ArbitrumTrade } from './uni-swap-v3-arbitrum-trade';
export declare class UniSwapV3ArbitrumProvider extends UniswapV3AbstractProvider<UniSwapV3ArbitrumTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.ARBITRUM;
    protected readonly InstantTradeClass: typeof UniSwapV3ArbitrumTrade;
    protected readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    protected readonly routerConfiguration: import("../../common/uniswap-v3-abstract/models/uniswap-v3-router-configuration").UniswapV3RouterConfiguration<"WETH" | "USDC" | "WBTC" | "DAI" | "GMX">;
}
