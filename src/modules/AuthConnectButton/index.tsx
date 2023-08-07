import Button from "@components/Button";
import useAuthConnect, {
  handleSwitchChain,
  AuthConnectStatus,
} from "@service/authConnect";
import Popup from "@components/Popup";
import React, { type ComponentProps } from "react";
import { ReactComponent as WrongNetworkIcon } from "@assets/icons/wrong-network.svg";
import AuthConnectModal from "./AuthConnectModal";

const AuthConnectButton: React.FC<ComponentProps<typeof Button>> = ({
  children,
}) => {
  const { authConnectStatus } = useAuthConnect();

  if (authConnectStatus === AuthConnectStatus.Connected)
    return children as React.ReactElement;

  if (authConnectStatus === AuthConnectStatus.NotConnected) {
    return (
      <Popup
        trigger={({ triggerProps }) => (
          <Button
            {...triggerProps}
            id="auth-connect-button"
            type="button"
            color="medigreen"
          >
            Connect Wallet
          </Button>
        )}
      >
        <AuthConnectModal />
      </Popup>
    );
  }

  return (
    <Button id="auth-switch-button" onClick={handleSwitchChain} color="red">
      <WrongNetworkIcon className="h-[16px] w-[16px] mr-[8px]" />
      Wrong NetWork
    </Button>
  );
};

export const ChangeWalletButton: React.FC<
  ComponentProps<typeof Button>
> = () => {
  return (
    <Popup
      title="Change Wallet"
      trigger={({ triggerProps }) => (
        <Button
          {...triggerProps}
          id="change-wallet-button"
          type="button"
          color="gray"
        >
          Change
        </Button>
      )}
    >
      <AuthConnectModal changeWallet/>
    </Popup>
  );
};

export default AuthConnectButton;
