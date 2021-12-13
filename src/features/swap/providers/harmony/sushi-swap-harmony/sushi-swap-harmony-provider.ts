import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/swap/providers/common/uniswap-v2-abstract-provider/uniswap-v2-abstract-provider';
import { SUSHI_SWAP_HARMONY_PROVIDER_CONFIGURATION } from '@features/swap/providers/harmony/sushi-swap-harmony/constants';
import { SushiSwapHarmonyTrade } from '@features/swap/trades/harmony/sushi-swap-harmony/sushi-swap-harmony-trade';

export class SushiSwapHarmonyProvider extends UniswapV2AbstractProvider<SushiSwapHarmonyTrade> {
    public readonly blockchain = BLOCKCHAIN_NAME.HARMONY;

    public readonly InstantTradeClass = SushiSwapHarmonyTrade;

    public readonly providerSettings = SUSHI_SWAP_HARMONY_PROVIDER_CONFIGURATION;
}
