import { ChainKey } from '@lifinance/sdk';

export type SwapFormValues = {
  fromAmount: number;
  fromChain: ChainKey;
  fromToken: string;
  toChain: ChainKey;
  toToken: string;
};

export enum SwapFormKey {
  BridgePrioritization = 'bridgePrioritization',
  EnabledBridges = 'enabledBridges',
  EnabledExchanges = 'enabledExchanges',
  FromAmount = 'fromAmount',
  FromChain = 'fromChain',
  FromSearchTokensFilter = 'fromSearchTokensFilter',
  FromToken = 'fromToken',
  GasPrice = 'gasPrice',
  IsAddressConfirmed = 'isAddressConfirmed',
  IsSendToRecipient = 'isSendToRecipient',
  MyTokensFilter = 'myTokensFilter',
  RecipientsAddress = 'recipientsAddress',
  RoutePriority = 'routePriority',
  Slippage = 'slippage',
  SwapRoute = 'swapRoute',
  ToAmount = 'toAmount',
  ToChain = 'toChain',
  ToSearchTokensFilter = 'toSearchTokensFilter',
  ToToken = 'toToken',
}

export type SwapFormDirection = 'from' | 'to';

export const SwapFormKeyHelper = {
  getChainKey: (type: SwapFormDirection) => `${type}Chain`,
  getTokenKey: (type: SwapFormDirection) => `${type}Token`,
  getSearchTokensFilterKey: (type: SwapFormDirection) =>
    `${type}SearchTokensFilter`,
};

export interface SwapFormTypeProps {
  formType: SwapFormDirection;
}
