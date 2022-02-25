import { InstantTradesManager } from '@features/swap/instant-trades-manager';
import { TokensManager } from '@features/tokens/tokens-manager';
import { TOKENS } from '__tests__/utils/tokens';
import { Chain } from '__tests__/utils/chain';
import { mockInjector } from '__tests__/utils/mock-injector';
import {
    BLOCKCHAIN_NAME,
    MAINNET_BLOCKCHAIN_NAME,
    RubicSdkError,
    TRADE_TYPE,
    TradeType,
    TypedTradeProviders
} from '../../../../src';

describe('Instant trade manager tests.', () => {
    let instantTradesManager: InstantTradesManager;
    const tokensManager = new TokensManager();

    beforeEach(async () => {
        const chain = await Chain.reset(BLOCKCHAIN_NAME.ETHEREUM);
        const configuration = await chain.getConfiguration();
        await mockInjector(configuration);
        instantTradesManager = new InstantTradesManager();
    }, 5000);

    test('Should init params', () => {
        expect(InstantTradesManager.defaultCalculationTimeout).toBeDefined();

        const { tradeProviders } = instantTradesManager as unknown as {
            tradeProviders: TypedTradeProviders;
        };
        Object.keys(TRADE_TYPE).forEach(provider => {
            expect(tradeProviders[provider as unknown as TradeType]).toBeDefined();
        });

        const { blockchainTradeProviders } = instantTradesManager;
        Object.keys(tradeProviders).forEach(provider => {
            const tradeProvider = tradeProviders[provider as unknown as TradeType];
            expect(
                blockchainTradeProviders[tradeProvider.blockchain][provider as unknown as TradeType]
            ).toBeDefined();
        });
    });

    test('Should throw blockchain error trade', async () => {
        const fromToken1 = {
            address: '0x0000000000000000000000000000000000000000',
            blockchain: MAINNET_BLOCKCHAIN_NAME.ETHEREUM
        };
        const toToken1 = tokensManager.createTokenFromStruct({
            address: '0x0000000000000000000000000000000000000000',
            blockchain: BLOCKCHAIN_NAME.POLYGON,
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18
        });

        try {
            await instantTradesManager.calculateTrade(fromToken1, '1', toToken1);
        } catch (err) {
            const errorMsg = 'Blockchains of from and to tokens must be same.';
            expect(err instanceof RubicSdkError).toBeTruthy();
            expect(err.message).toBe(errorMsg);
        }
    }, 20_000);

    test('Should calculate trade without options', async () => {
        const getFullOptionsSpy = jest.spyOn(
            instantTradesManager as unknown as { getFullOptions: () => unknown },
            'getFullOptions'
        );
        const calculateTradeFromTokensSpy = jest.spyOn(
            instantTradesManager as unknown as { calculateTradeFromTokens: () => unknown },
            'calculateTradeFromTokens'
        );

        const trade = await instantTradesManager.calculateTrade(TOKENS.ETH, '1', TOKENS.USDT);

        expect(getFullOptionsSpy).toHaveBeenCalledWith(undefined);
        expect(getFullOptionsSpy).toHaveReturnedWith({
            timeout: InstantTradesManager.defaultCalculationTimeout,
            disabledProviders: [] as TradeType[]
        });

        expect(calculateTradeFromTokensSpy).toHaveBeenCalled();
        expect(trade.some(provider => provider.to.tokenAmount.gt(0)));
    }, 20_000);

    test('Should get no providers error on calculate', async () => {
        const { tradeProviders } = instantTradesManager as unknown as {
            tradeProviders: TypedTradeProviders;
        };
        const ethProviders = Object.keys(tradeProviders).filter(provider => {
            const tradeProvider = tradeProviders[provider as unknown as TradeType];
            return tradeProvider.blockchain === BLOCKCHAIN_NAME.ETHEREUM;
        });

        try {
            await instantTradesManager.calculateTrade(TOKENS.ETH, '1', TOKENS.USDT, {
                disabledProviders: ethProviders as TradeType[]
            });
        } catch (err) {
            const errorMsg = `There are no providers for ${BLOCKCHAIN_NAME.ETHEREUM} blockchain`;
            expect(err instanceof RubicSdkError).toBeTruthy();
            expect(err.message).toBe(errorMsg);
        }
    }, 20_000);

    test('Should calculate trade for all providers except providers in block list', async () => {
        const disabledProviders: TradeType[] = [TRADE_TYPE.UNISWAP_V2];
        const trades = await instantTradesManager.calculateTrade(TOKENS.ETH, '1', TOKENS.USDT, {
            disabledProviders
        });
        expect(trades.every(trade => !disabledProviders.includes(trade.type))).toBeTruthy();
    }, 20_000);
});
