import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { CrossChainContract } from '@features/cross-chain/cross-chain-contract/cross-chain-contract';
import { PancakeSwapProvider } from '@features/swap/providers/bsc/pancake-swap/pancake-swap-provider';
import { UniSwapV2Provider } from '@features/swap/providers/ethereum/uni-swap-v2/uni-swap-v2-provider';
import { QuickSwapProvider } from '@features/swap/providers/polygon/quick-swap/quick-swap-provider';
import { CrossChainSupportedBlockchain } from '@features/cross-chain/constants/CrossChainSupportedBlockchains';
import { SpookySwapProvider } from '@features/swap/providers/fantom/spooky-swap/spooky-swap-provider';
import { JoeProvider } from '@features/swap/providers/avalanche/joe/joe-provider';
import { SolarbeamProvider } from '@features/swap/providers/moonriver/solarbeam/solarbeam-provider';
import { PangolinProvider } from '@features/swap/providers/avalanche/pangolin/pangolin-provider';

export const crossChainContracts: Record<CrossChainSupportedBlockchain, CrossChainContract[]> = {
    [BLOCKCHAIN_NAME.ETHEREUM]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.ETHEREUM,
            '0xb9a94be803eC1197A234406eF5c0113f503d3178',
            new UniSwapV2Provider()
        )
    ],
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
            '0x6b8904739059afbaa91311aab99187f5885c6dc0',
            new PancakeSwapProvider()
        )
    ],
    [BLOCKCHAIN_NAME.POLYGON]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.POLYGON,
            '0xb02c0b6ba0e7719de2d44e613fc4ad01ac2f60ad',
            new QuickSwapProvider()
        )
    ],
    [BLOCKCHAIN_NAME.AVALANCHE]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.AVALANCHE,
            '0x3df5f6165fe8429744F9488a9C18259E9a93B4C0',
            new PangolinProvider()
        ),
        new CrossChainContract(
            BLOCKCHAIN_NAME.AVALANCHE,
            '0x9375e3B9623610919750257C3A8667A62533bc93',
            new JoeProvider()
        )
    ],
    [BLOCKCHAIN_NAME.MOONRIVER]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.MOONRIVER,
            '0x3645Dca27D9f5Cf5ee0d6f52EE53ae366e4ceAc2',
            new SolarbeamProvider()
        )
    ],
    [BLOCKCHAIN_NAME.FANTOM]: [
        new CrossChainContract(
            BLOCKCHAIN_NAME.FANTOM,
            '0xeDfA29ca1BdbFaCBBDc6AAda385c983020015177',
            new SpookySwapProvider()
        )
    ]
};
