import { connect } from "@cfx-kit/react-utils/dist/AccountManage";
import { walletsConfig } from "@service/account";
const AuthConnectModal: React.FC = () => {
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

export default AuthConnectModal;
