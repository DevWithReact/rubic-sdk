import { TokensManager } from '@features/tokens/tokens-manager';
import BigNumber from 'bignumber.js';
import { BLOCKCHAIN_NAME, Token, TokenBaseStruct } from '../../../../src';
import { TokenStruct } from '../../../../src/core/blockchain/tokens/token';
import { PriceTokenStruct } from '../../../../src/core/blockchain/tokens/price-token';
import {
    PriceTokenAmountBaseStruct,
    PriceTokenAmountStruct
} from '../../../../src/core/blockchain/tokens/price-token-amount';

describe('Tokens manager tests.', () => {
    const tokenManager = new TokensManager();

    const isToken = (token: unknown): token is Token => {
        const properties = [
            (token as Token)?.blockchain,
            (token as Token)?.address,
            (token as Token)?.name,
            (token as Token)?.symbol,
            (token as Token)?.decimals,
            (token as Token)?.isNative,
            (token as Token)?.isEqualTo,
            (token as Token)?.clone
        ];
        return properties.every(prop => prop !== undefined);
    };

    test('Should create Token object from struct', () => {
        const struct: TokenStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000',
            name: 'Test Token',
            symbol: 'Test',
            decimals: 18
        };

        const token = tokenManager.createTokenFromStruct(struct);

        expect(isToken(token)).toBeTruthy();

        expect(token.decimals).toEqual(struct.decimals);
        expect(token.blockchain).toEqual(struct.blockchain);
        expect(token.address).toEqual(struct.address);
        expect(token.name).toEqual(struct.name);
        expect(token.symbol).toEqual(struct.symbol);
    });

    test('Should create Token object from base struct', async () => {
        const struct: TokenBaseStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000'
        };
        const fullStruct: TokenStruct = {
            ...struct,
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        };

        const token = await tokenManager.createToken(struct);

        expect(isToken(token)).toBeTruthy();

        expect(token.blockchain).toEqual(struct.blockchain);
        expect(token.address).toEqual(struct.address);

        expect(token.decimals).toEqual(fullStruct.decimals);
        expect(token.name).toEqual(fullStruct.name);
        expect(token.symbol).toEqual(fullStruct.symbol);
    }, 20_000);

    test('Should create Tokens objects from structs', () => {
        const structs: TokenStruct[] = [
            {
                blockchain: BLOCKCHAIN_NAME.ETHEREUM,
                address: '0x0000000000000000000000000000000000000000',
                name: 'Test Token',
                symbol: 'Test',
                decimals: 18
            },
            {
                blockchain: BLOCKCHAIN_NAME.ETHEREUM,
                address: '0x00000000000000000000000000000000000000e',
                name: 'Test Token2',
                symbol: 'Test2',
                decimals: 24
            }
        ];

        const tokens = tokenManager.createTokensFromStructs(structs);

        expect(tokens.every(token => isToken(token))).toBeTruthy();
        tokens.forEach((token, index) => {
            expect(token.decimals).toEqual(structs[index].decimals);
            expect(token.blockchain).toEqual(structs[index].blockchain);
            expect(token.address).toEqual(structs[index].address);
            expect(token.name).toEqual(structs[index].name);
            expect(token.symbol).toEqual(structs[index].symbol);
        });
    });

    test('Should create Tokens objects from base structs', async () => {
        const addresses = [
            '0x0000000000000000000000000000000000000000',
            '0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3'
        ];
        const blockchain = BLOCKCHAIN_NAME.ETHEREUM;
        const structs: TokenStruct[] = [
            {
                address: addresses[0],
                blockchain,
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
            },
            {
                address: addresses[1],
                blockchain,
                name: 'Rubic',
                symbol: 'RBC',
                decimals: 18
            }
        ];

        const tokens = await tokenManager.createTokens(addresses, blockchain);

        expect(tokens.every(token => isToken(token))).toBeTruthy();
        tokens.forEach((token, index) => {
            expect(token.decimals).toEqual(structs[index].decimals);
            expect(token.blockchain).toEqual(structs[index].blockchain);
            expect(token.address).toEqual(structs[index].address);
            expect(token.name).toEqual(structs[index].name);
            expect(token.symbol).toEqual(structs[index].symbol);
        });
    }, 20_000);

    test('Should create Price token object from price struct', () => {
        const struct: PriceTokenStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000',
            name: 'Test Token',
            symbol: 'Test',
            decimals: 18,
            price: new BigNumber('1')
        };

        const token = tokenManager.createPriceTokenFromStruct(struct);

        expect(token.decimals).toEqual(struct.decimals);
        expect(token.blockchain).toEqual(struct.blockchain);
        expect(token.address).toEqual(struct.address);
        expect(token.name).toEqual(struct.name);
        expect(token.symbol).toEqual(struct.symbol);
        expect(token.price.toString()).toEqual(struct.price.toString());
    });

    test('Should create price Token object from struct', async () => {
        const struct: TokenBaseStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000'
        };
        const fullStruct: TokenStruct = {
            ...struct,
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        };

        const token1 = await tokenManager.createPriceToken(struct);

        expect(token1.blockchain).toEqual(struct.blockchain);
        expect(token1.address).toEqual(struct.address);

        expect(token1.decimals).toBeDefined();
        expect(token1.name).toBeDefined();
        expect(token1.symbol).toBeDefined();
        expect(token1.price).toBeDefined();

        const token2 = await tokenManager.createPriceToken(fullStruct);

        expect(token2.blockchain).toEqual(fullStruct.blockchain);
        expect(token2.address).toEqual(fullStruct.address);

        expect(token2.decimals).toEqual(fullStruct.decimals);
        expect(token2.name).toEqual(fullStruct.name);
        expect(token2.symbol).toEqual(fullStruct.symbol);
        expect(token2.price).toBeDefined();
    }, 20_000);

    test('Should create Price token amount object from price amount struct', () => {
        const struct: PriceTokenAmountStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000',
            name: 'Test Token',
            symbol: 'Test',
            decimals: 18,
            price: new BigNumber('1'),
            tokenAmount: new BigNumber('1')
        };

        const token = tokenManager.createPriceTokenAmountFromStruct(struct);

        expect(token.decimals).toEqual(struct.decimals);
        expect(token.blockchain).toEqual(struct.blockchain);
        expect(token.address).toEqual(struct.address);
        expect(token.name).toEqual(struct.name);
        expect(token.symbol).toEqual(struct.symbol);
        expect(token.price.toString()).toEqual(struct.price.toString());
        expect(token.tokenAmount.toString()).toEqual(struct.tokenAmount.toString());
    });

    test('Should create Price token amount object from base struct', async () => {
        const struct: PriceTokenAmountBaseStruct = {
            blockchain: BLOCKCHAIN_NAME.ETHEREUM,
            address: '0x0000000000000000000000000000000000000000',
            tokenAmount: new BigNumber('1')
        };
        const fullStruct: TokenStruct & ({ weiAmount: BigNumber } | { tokenAmount: BigNumber }) = {
            ...struct,
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        };

        const token1 = await tokenManager.createPriceTokenAmount(struct);

        expect(token1.blockchain).toEqual(struct.blockchain);
        expect(token1.address).toEqual(struct.address);

        expect(token1.decimals).toBeDefined();
        expect(token1.name).toBeDefined();
        expect(token1.symbol).toBeDefined();
        expect(token1.price).toBeDefined();
        expect(token1.tokenAmount.toString()).toEqual(struct.tokenAmount.toString());

        const token2 = await tokenManager.createPriceTokenAmount(fullStruct);

        expect(token2.blockchain).toEqual(fullStruct.blockchain);
        expect(token2.address).toEqual(fullStruct.address);

        expect(token2.decimals).toEqual(fullStruct.decimals);
        expect(token2.name).toEqual(fullStruct.name);
        expect(token2.symbol).toEqual(fullStruct.symbol);
        expect(token2.price).toBeDefined();
        expect(token2.tokenAmount.toString()).toEqual(fullStruct.tokenAmount.toString());
    }, 20_000);
});
