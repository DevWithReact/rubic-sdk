import { TradeType } from '../../../..';
import { AlgebraQuoterController } from './utils/quoter-controller/algebra-quoter-controller';
import { UniswapV3AlgebraAbstractProvider } from '../../common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { AlgebraTrade } from './algebra-trade';
import { UniswapV3AlgebraTradeStruct } from '../../common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
import { AlgebraRoute } from './models/algebra-route';
export declare class AlgebraProvider extends UniswapV3AlgebraAbstractProvider<AlgebraTrade> {
    readonly blockchain = MAINNET_BLOCKCHAIN_NAME.POLYGON;
    protected readonly InstantTradeClass: typeof AlgebraTrade;
    protected readonly quoterController: AlgebraQuoterController;
    readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    get type(): TradeType;
    protected createTradeInstance(tradeStruct: UniswapV3AlgebraTradeStruct, route: AlgebraRoute): AlgebraTrade;
}
