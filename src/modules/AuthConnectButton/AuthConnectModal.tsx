import useAuthConnect, { handleSwitchChain, AuthConnectStatus } from "@service/authConnect";
import { connect } from "@cfx-kit/react-utils/dist/AccountManage";
import { walletsConfig } from "@service/account";
import { shortenEthereumAddress } from "@cfx-kit/dapp-utils/dist/address";
import { ReactComponent as AccountIcon } from "@assets/icons/account.svg";
import { ReactComponent as CopyIcon } from "@assets/icons/copy.svg";
import { ReactComponent as ShareIcon } from "@assets/icons/share.svg";
import { ReactComponent as CheckedIcon } from "@assets/icons/checked.svg";
import { ReactComponent as ReturnIcon } from "@assets/icons/return.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useCallback, useState, Dispatch, SetStateAction } from "react";
import { useCurrentWalletName } from "@cfx-kit/react-utils/dist/AccountManage";
import Button from "@components/Button";

const WalletSelector: React.FC<{ changeWallet?: boolean }> = ({ changeWallet }) => {
  const currentWalletName = useCurrentWalletName();
  return (
    <div>
      {walletsConfig.map((item, index) => (
        <div
          className="flex justify-between items-center bg-gradient-to-r from-[#fafaea] to-[#fbffdf] border-[#d9ecca] border-1 border-solid rounded-[12px] cursor-pointer p-4 my-3 font-medium"
          key={index}
          onClick={() => connect(item.name)}
        >
          <div className="flex items-center">
            {item.name === currentWalletName && changeWallet && (
              <div className="w-[8px] h-[8px] mr-[8px] bg-lime rounded-[100%]" />
            )}
            {item.name}
          </div>
          <img className="w-6 h-6" src={item.iconPath} />
        </div>
      ))}
    </div>
  );
};

const WalletInfo: React.FC<{ setChangeWallet: Dispatch<SetStateAction<boolean>> }> = ({ setChangeWallet }) => {
  const { account } = useAuthConnect();
  const [copied, setCopied] = useState(false);
  const currentWalletName = useCurrentWalletName();

  const handleClickCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, []);

  return (
    <div className="-m-2">
      <div className="bg-linear-yellow border-[#CED0D9] border-[1px] border-solid rounded-[20px] p-[16px]">
        <div className="flex justify-between items-center text-[14px] font-medium">
          <div>Connected with {currentWalletName}</div>
          <Button
            id="change-wallet-button"
            type="button"
            color="transparent"
            size="small"
            onClick={() => setChangeWallet(true)}
          >
            Change
          </Button>
        </div>
        <div className="flex items-center mt-[14px]">
          <AccountIcon className="rounded-[100%] bg-[#233CE1]" />
          <div className="text-[22px] font-medium ml-[8px]">{shortenEthereumAddress(account)}</div>
        </div>
        <div className="flex items-center text-[14px] font-medium mt-[16px]">
          {copied && (
            <div className="flex items-center cursor-pointer">
              <CheckedIcon />
              <div className="ml-[4px]">Copied</div>
            </div>
          )}
          {!copied && (
            <CopyToClipboard text={account ?? ""} onCopy={handleClickCopy}>
              <div className="flex items-center cursor-pointer">
                <CopyIcon />
                <div className="ml-[4px]">Copy Address</div>
              </div>
            </CopyToClipboard>
          )}
          <div className="flex items-center">
            <a
              className="flex items-center ml-[16px] text-black decoration-none hover:underline"
              href=""
              target="__blank"
            >
              <ShareIcon />
              <div className="ml-[4px]">View on Conflux Scan</div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[28px] mb-[14px]">Your transactions will appear here...</div>
    </div>
  );
};

const AuthConnectModal: React.FC = () => {
  const { authConnectStatus } = useAuthConnect();
  const [changeWallet, setChangeWallet] = useState(false);

  if (authConnectStatus === AuthConnectStatus.Connected) {
    return (
      <>
        {changeWallet && (
          <div>
            <div
              className="absolute -mt-[44px] color-ink-green font-bold cursor-pointer"
              onClick={() => setChangeWallet(false)}
            >
              <ReturnIcon />
            </div>
            <WalletSelector changeWallet />
          </div>
        )}
        {!changeWallet && <WalletInfo setChangeWallet={setChangeWallet} />}
      </>
    );
  }
  if (authConnectStatus === AuthConnectStatus.NotConnected) {
    return <WalletSelector />;
  }
  return (
    <div>
      <div className="text-[16px] leading-[24px]">
        Please connect to a supported network in the dropdown menu or in your wallet.
      </div>
      <div className="flex justify-center mt-[20px] mb-[10px]">
        <Button onClick={handleSwitchChain} color="transparent" size="large">
          Switch Network
        </Button>
      </div>
    </div>
  );
};

export default AuthConnectModal;
