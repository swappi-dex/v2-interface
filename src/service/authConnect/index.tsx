import { useAccount, useChainId, connect, switchChain } from "@cfx-kit/react-utils/dist/AccountManage";

export enum AuthConnectStatus {
  Connected = 'connected',
  NotConnected = 'not-connected',
  NotChainMatch = 'not-chainMatch'
}

const eSpaceChainId = `${import.meta.env.VITE_ESpaceChainId}`;
const useAuthConnect = () => {
  const account = useAccount();
  const chainId = useChainId();
  const isChainMatch = chainId === eSpaceChainId;

  const authConnectStatus = account ? (isChainMatch ? AuthConnectStatus.Connected : AuthConnectStatus.NotChainMatch) : AuthConnectStatus.NotConnected;

  return { authConnectStatus, account };
};

export const handleConnect = (walletName: string) => {
  connect(walletName);
};

export const handleSwitchChain = () => {
  switchChain(eSpaceChainId, {});
};

export default useAuthConnect;
