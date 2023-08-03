import Button from "@components/Button";
import useAuthConnect, { handleSwitchChain } from "@service/authConnect";
import Popup from "@components/Popup";
import AuthConnectModal from "@modules/AuthConnectModal";
import React, { ComponentProps, useState } from "react";
import { ReactComponent as WrongNetworkIcon } from "@assets/icons/wrong-network.svg";
import AuthSwitchModal from "@modules/AuthSwitchModal";

const TriggerButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const { authConnectStatus } = useAuthConnect();
  return (
    <Button
      {...props}
      id="auth-connect-button"
      type="button"
      color={
        authConnectStatus === "not-chainMatch" ? "red" : authConnectStatus === "connected" ? "linear-lime" : "medigreen"
      }
    >
      {authConnectStatus === "not-connected" && "Connect Wallet"}
      {authConnectStatus === "not-chainMatch" && (
        <>
          <WrongNetworkIcon className="h-[16px] w-[16px] mr-[8px]" />
          Wrong NetWork
        </>
      )}
    </Button>
  );
};

const AuthConnectButton: React.FC<ComponentProps<typeof Button>> = ({ children }) => {
  const { authConnectStatus } = useAuthConnect();
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    if (authConnectStatus === "not-chainMatch") {
      handleSwitchChain();
    } else {
      setIsOpen(true);
    }
  };

  if (authConnectStatus === "connected") return children as React.ReactElement;
  return (
    <>
      <Popup
        title="Connect Wallet"
        open={open}
        // trigger={({ triggerProps }) => (
        //   <TriggerButton {...(authConnectStatus === "not-chainMatch" ? handleClick : triggerProps)} />
        // )}
      >
        {authConnectStatus === "not-connected" && <AuthConnectModal />}
        {authConnectStatus === "connected" && <AuthSwitchModal />}
      </Popup>
      <TriggerButton onClick={handleClick} />
    </>
  );
};

export default AuthConnectButton;
