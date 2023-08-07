import useAuthConnect, {
  handleSwitchChain,
  AuthConnectStatus,
} from "@service/authConnect";
import { connect } from "@cfx-kit/react-utils/dist/AccountManage";
import { walletsConfig } from "@service/account";

const WalletSelector: React.FC = () => {
  return (
    <div>
      {walletsConfig.map((item, index) => (
        <div
          className="flex justify-between items-center bg-gradient-to-r from-[#fafaea] to-[#fbffdf] border-[#d9ecca] border-1 border-solid rounded-[12px] cursor-pointer p-4 my-3 font-medium"
          key={index}
          onClick={() => connect(item.name)}
        >
          <div>{item.name}</div>
          <img className="w-6 h-6" src={item.iconPath} />
        </div>
      ))}
    </div>
  );
};

const AuthConnectModal: React.FC<{ changeWallet?: boolean; }> = ({ changeWallet }) => {
  const { authConnectStatus } = useAuthConnect();

  const title =
    authConnectStatus === AuthConnectStatus.NotConnected
      ? "Connect Wallet"
      : "Wrong Network";

  if (authConnectStatus === AuthConnectStatus.Connected) {
    return (
      <div>
        <p>{title}</p>
        <WalletSelector />;
      </div>
    );
  }
  return (
    <div>
      <p>{title}</p>
      <p>
        Please connect to a supported network in the dropdown menu or in your
        wallet.
      </p>
      <button onClick={handleSwitchChain}>Switch Network</button>
    </div>
  );
};

export default AuthConnectModal;
