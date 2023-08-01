import {
  useAccount,
  useChainId,
  connect,
  switchChain,
} from "@cfx-kit/react-utils/dist/AccountManage";

const eSpaceChainId = `${import.meta.env.VITE_ESpaceChainId}`;
const useAuthConnect = () => {
  const account = useAccount();
  const chainId = useChainId();
  const isChainMatch = chainId === eSpaceChainId;

  const authConnectStatus = account ? isChainMatch ? "connected" : "not-chainMatch" : "not-connected";

  return authConnectStatus;
};
export const handleConnect = (walletName: string) => {
  connect(walletName);
};

export const handleSwitchChain = () => {
  switchChain(eSpaceChainId, {});
};

export default useAuthConnect;
