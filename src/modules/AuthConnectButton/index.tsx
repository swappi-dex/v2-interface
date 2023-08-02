import React, { useCallback, type ComponentProps, useState } from "react";
import Button from "@components/Button";
import useAuthConnect, { handleSwitchChain } from "@service/authConnect";
import AccountConnector from "@modules/AccountConnector";

const AuthConnectButton: React.FC<ComponentProps<typeof Button>> = ({ children, ...props }) => {
  const status = useAuthConnect();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    if (status === "not-connected") {
      setIsOpen(true);
    } else {
      handleSwitchChain();
    }
  }, [status]);

  if (status === "connected") return children as React.ReactElement;
  return (
    <>
      <Button id="auth-connect-btn" {...props} onClick={handleClick} type="button">
        {status === "not-connected" && "Connect Wallet"}
        {status === "not-chainMatch" && "Wrong Network"}
      </Button>
      <AccountConnector />
    </>
  );
};

export default AuthConnectButton;
