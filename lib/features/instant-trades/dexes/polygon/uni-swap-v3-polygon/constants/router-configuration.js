"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNI_SWAP_V3_POLYGON_ROUTER_CONFIGURATION = void 0;
/**
 * Most popular tokens in uni v3 to use in a route.
 */
var tokensSymbols = ['WMATIC', 'WETH', 'DAI', 'USDT', 'USDC'];
var routerTokens = {
    WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
};
var routerLiquidityPools = [
    {
        poolAddress: '0x167384319B41F7094e62f7506409Eb38079AbfF8',
        tokenSymbolA: 'WMATIC',
        tokenSymbolB: 'WETH',
        fee: 3000
    },
    {
        poolAddress: '0x45dDa9cb7c25131DF268515131f647d726f50608',
        tokenSymbolA: 'USDC',
        tokenSymbolB: 'WETH',
        fee: 500
    },
    {
        poolAddress: '0x0e44cEb592AcFC5D3F09D996302eB4C499ff8c10',
        tokenSymbolA: 'USDC',
        tokenSymbolB: 'WETH',
        fee: 3000
    },
    {
        poolAddress: '0x3F5228d0e7D75467366be7De2c31D0d098bA2C23',
        tokenSymbolA: 'USDC',
        tokenSymbolB: 'USDT',
        fee: 500
    },
    {
        poolAddress: '0x88f3C15523544835fF6c738DDb30995339AD57d6',
        tokenSymbolA: 'WMATIC',
        tokenSymbolB: 'USDC',
        fee: 3000
    },
    {
        poolAddress: '0x86f1d8390222A3691C28938eC7404A1661E618e0',
        tokenSymbolA: 'WMATIC',
        tokenSymbolB: 'WETH',
        fee: 500
    }
];
exports.UNI_SWAP_V3_POLYGON_ROUTER_CONFIGURATION = {
    tokens: routerTokens,
    liquidityPools: routerLiquidityPools
};
//# sourceMappingURL=router-configuration.js.map