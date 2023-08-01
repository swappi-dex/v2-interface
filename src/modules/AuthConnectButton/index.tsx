import React, { useCallback, type ComponentProps } from "react";
import Button from "@components/Button";
import showAccountConnector from "@modules/AccountConnector";
import useAuthConnect, { handleSwitchChain } from "@service/authConnect";

const AuthConnectButton: React.FC<ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  const status = useAuthConnect();
  const handleClick = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    if (status === "not-connected") {
      showAccountConnector();
    } else {
      handleSwitchChain();
    }
  }, [status]);

  if (status === "connected") return children as React.ReactElement;
  return (
    <Button
      id="auth-connect-btn"
      {...props}
      onClick={handleClick}
      type="button"
    >
      {status === "not-connected" && "Connect Wallet"}
      {status === "not-chainMatch" && "Wrong Network"}
    </Button>
  );
};

export default AuthConnectButton;
