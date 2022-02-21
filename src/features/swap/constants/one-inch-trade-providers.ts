import { OneinchEthereumProvider } from '@features/swap/dexes/ethereum/oneinch-ethereum/oneinch-ethereum-provider';
import { OneinchBscProvider } from '@features/swap/dexes/bsc/oneinch-bsc/oneinch-bsc-provider';
import { OneinchPolygonProvider } from '@features/swap/dexes/polygon/oneinch-polygon/oneinch-polygon-provider';

export const oneInchTradeProviders = [
    OneinchEthereumProvider,
    OneinchBscProvider,
    OneinchPolygonProvider
];
