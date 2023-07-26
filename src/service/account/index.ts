import { registerWallet } from "@cfx-kit/react-utils/dist/AccountManage";
import {
  MetaMaskProvider,
  FluentEthereumProvider,
  OKXProvider,
  createWalletConnectProvider,
} from "@cfx-kit/react-utils/dist/AccountManagePlugins";

const allProviders = [
  MetaMaskProvider,
  FluentEthereumProvider,
  OKXProvider,
  createWalletConnectProvider({
    projectId: "ecd29726bdb28aef6ceded6a6c4319f6",
    targetChainId: "71",
  }),
] as const;

export const walletsName = allProviders.map((provider) => provider.walletName);

(function () {
  allProviders.forEach((provider) => {
    registerWallet(provider);
  });
})();
