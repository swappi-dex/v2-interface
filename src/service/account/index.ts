import { registerWallet } from "@cfx-kit/react-utils/dist/AccountManage";
import {
  MetaMaskProvider,
  FluentEthereumProvider,
  OKXProvider,
  createWalletConnectProvider,
  TokenPocketProvider,
  HaloProvider,
} from "@cfx-kit/react-utils/dist/AccountManagePlugins";
import MetaMaskIcon from "@assets/wallets/MetaMask.svg";
import FluentEthereumIcon from "@assets/wallets/Fluent.svg";
import WalletConnectIcon from "@assets/wallets/WalletConnect.svg";
import TokenPocketIcon from "@assets/wallets/TokenPocket.svg";
import OKXIcon from "@assets/wallets/OKX.svg";
import HaloIcon from "@assets/wallets/Halo.svg";

const allProviders = [
  MetaMaskProvider,
  FluentEthereumProvider,
  createWalletConnectProvider({
    projectId: "ecd29726bdb28aef6ceded6a6c4319f6",
    targetChainId: "71",
  }),
  TokenPocketProvider,
  OKXProvider,
  HaloProvider,
] as const;

const iconConfig = {
  MetaMask: MetaMaskIcon,
  "Fluent-Ethereum": FluentEthereumIcon,
  WalletConnect: WalletConnectIcon,
  TokenPocket: TokenPocketIcon,
  OKX: OKXIcon,
  Halo: HaloIcon,
};

export const walletsConfig = allProviders.map((provider) => ({
  name: provider.walletName,
  iconPath: iconConfig[provider.walletName],
}));

(function () {
  allProviders.forEach((provider) => {
    registerWallet(provider);
  });
})();
