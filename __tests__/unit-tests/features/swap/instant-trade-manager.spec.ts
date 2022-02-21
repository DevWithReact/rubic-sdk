import { InstantTradesManager } from '@features/swap/instant-trades-manager';
import { TokensManager } from '@features/tokens/tokens-manager';
import { TOKENS } from '__tests__/utils/tokens';
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

    beforeEach(() => {
        instantTradesManager = new InstantTradesManager();
    });

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

    test('Should throw blockchain error trade', () => {
        const fromToken1 = {
            address: '0x0000000000000000000000000000000000000000',
            blockchain: MAINNET_BLOCKCHAIN_NAME.ETHEREUM
        };
        const fromToken2 = {
            address: '0x0000000000000000000000000000000000000000',
            blockchain: MAINNET_BLOCKCHAIN_NAME.POLYGON
        };
        const toToken1 = tokensManager.createTokenFromStruct({
            address: '0x0000000000000000000000000000000000000000',
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        });
        const toToken2 = tokensManager.createTokenFromStruct({
            address: '0x0000000000000000000000000000000000000000',
            blockchain: BLOCKCHAIN_NAME.POLYGON,
            name: 'Matic',
            symbol: 'Matic',
            decimals: 18
        });

        const errorMsg = 'Blockchains of from and to tokens must be same.';

        const call1 = instantTradesManager.calculateTrade(fromToken1, '1', toToken1);
        expect(call1).toThrow(RubicSdkError);
        expect(call1).toThrow(errorMsg);

        const call2 = instantTradesManager.calculateTrade(fromToken2, '1', toToken2);
        expect(call2).toThrow(RubicSdkError);
        expect(call2).toThrow(errorMsg);
    });

    test('Should calculate trade without options', async () => {
        const getFullOptionsSpy = spyOn(
            InstantTradesManager as unknown as { getFullOptions: () => unknown },
            'getFullOptions'
        );
        const trade = await instantTradesManager.calculateTrade(
            TOKENS.ETH,
            BLOCKCHAIN_NAME.ETHEREUM,
            TOKENS.USDT
        );
        expect(getFullOptionsSpy).toHaveBeenCalledWith(undefined);
        expect(getFullOptionsSpy).toHaveReturnedWith({
            timeout: InstantTradesManager.defaultCalculationTimeout,
            disabledProviders: [] as TradeType[]
        });

        const calculateTradeFromTokensSpy = spyOn(
            InstantTradesManager as unknown as { calculateTradeFromTokens: () => unknown },
            'calculateTradeFromTokens'
        );
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

        const tradeCall = await instantTradesManager.calculateTrade(
            TOKENS.ETH,
            BLOCKCHAIN_NAME.ETHEREUM,
            TOKENS.USDT,
            {
                disabledProviders: ethProviders as TradeType[]
            }
        );
        const errorMsg = `There are no providers for ${BLOCKCHAIN_NAME.ETHEREUM} blockchain`;
        expect(tradeCall).toThrow(RubicSdkError);
        expect(tradeCall).toThrow(errorMsg);
    }, 20_000);

    test('Should calculate trade for all providers except providers in block list', async () => {
        const disabledProviders: TradeType[] = [TRADE_TYPE.UNISWAP_V2];
        const trades = await instantTradesManager.calculateTrade(
            TOKENS.ETH,
            BLOCKCHAIN_NAME.ETHEREUM,
            TOKENS.USDT,
            {
                disabledProviders
            }
        );
        expect(trades.every(trade => disabledProviders.includes(trade.type))).toBeTruthy();
    }, 20_000);
});
