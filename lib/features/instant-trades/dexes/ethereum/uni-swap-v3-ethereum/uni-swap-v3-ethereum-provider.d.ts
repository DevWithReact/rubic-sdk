import { UniSwapV3EthereumTrade } from './uni-swap-v3-ethereum-trade';
import { UniswapV3AbstractProvider } from '../../common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
export declare class UniSwapV3EthereumProvider extends UniswapV3AbstractProvider<UniSwapV3EthereumTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.ETHEREUM;
    readonly InstantTradeClass: typeof UniSwapV3EthereumTrade;
    readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    readonly routerConfiguration: import("../../common/uniswap-v3-abstract/models/uniswap-v3-router-configuration").UniswapV3RouterConfiguration<"USDT" | "WETH" | "USDC" | "WBTC" | "DAI">;
}
