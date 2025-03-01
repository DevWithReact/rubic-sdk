import { BLOCKCHAIN_NAME } from 'src/core';
import { SushiSwapBscProvider } from 'src/features/instant-trades/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-provider';
import { SushiSwapBscTrade } from 'src/features/instant-trades/dexes/bsc/sushi-swap-bsc/sushi-swap-bsc-trade';
import { SUSHI_SWAP_BSC_PROVIDER_CONFIGURATION } from 'src/features/instant-trades/dexes/bsc/sushi-swap-bsc/constants';

export const sushiSwapBscProviderSpec = () => {
    let sushiSwapBscProvider: SushiSwapBscProvider;

    beforeAll(() => {
        sushiSwapBscProvider = new SushiSwapBscProvider();
    });

    test('Initialize values', () => {
        expect(sushiSwapBscProvider.blockchain).toBe(BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN);
        expect(typeof sushiSwapBscProvider.InstantTradeClass).toBe(typeof SushiSwapBscTrade);
        expect(sushiSwapBscProvider.providerSettings).toBe(SUSHI_SWAP_BSC_PROVIDER_CONFIGURATION);
    });
};
