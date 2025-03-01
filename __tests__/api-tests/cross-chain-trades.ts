import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { SDK } from '@core/sdk/sdk';
import { minimalConfiguration } from '../utils/configuration';

export const crossChainApiSpec = () =>
    describe('Cross chain trades module tests', () => {
        let sdk: SDK;
        beforeEach(async () => {
            sdk = await SDK.createSDK(minimalConfiguration);
        });

        test('Should create InstantTradesManager instance', async () => {
            expect(typeof sdk.crossChain).toBe('object');
        });

        test('Should calculate MATIC to USDT trade', async () => {
            const fromToken = {
                address: '0x0000000000000000000000000000000000000000',
                blockchain: BLOCKCHAIN_NAME.POLYGON
            };
            const toToken = {
                address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                blockchain: BLOCKCHAIN_NAME.ETHEREUM
            };
            const fromAmount = 100;

            const trade = await sdk.crossChain.calculateTrade(
                fromToken,
                fromAmount.toString(),
                toToken
            );

            expect(!!trade).toBeTruthy();
        }, 400_000);
    });
