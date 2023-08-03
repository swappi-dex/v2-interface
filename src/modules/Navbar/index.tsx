import SwappiLogo from "@assets/images/swappi.svg";
import PPILogo from "@assets/images/ppi.svg";
import { ReactComponent as ArrowRightIcon } from "@assets/icons/arrow-right.svg";
import AssetsLink from "./AssetsLink";
import NavMenu from "./NavMenu";
import AuthConnectButton from "@modules/AuthConnectButton";
import { ReactComponent as WalletIcon } from "@assets/icons/wallet.svg";
import Icon from "@assets/icons/wallet.svg";
import { shortenEthereumAddress } from "@cfx-kit/dapp-utils/dist/address";
import useAuthConnect from "@service/authConnect";
import Button from "@components/Button";

const NetworkInfo: React.FC = () => {
  return (
    <button className="hidden sm:flex items-center ml-1.5 py-1.5 px-1 md:px-2 h-8 border-none rounded-3xl !bg-transparent">
      <div className="hidden xl:block mr-1 tracking-[2px] truncate sm:w-[80px] sm:overflow-ellipsis font-medium text-ink-green text-[15px]">
        Conflux eSpace Testnet
      </div>
      <ArrowRightIcon className="h-[10px]" />
    </button>
  );
};

const NavBar: React.FC = () => {
  const { authConnectStatus, account } = useAuthConnect();

  return (
    <div className="px-2 sm:px-4 lg:px-20 py-3 flex justify-between items-center border-b-[#D0EABC] border-b-solid">
      <div className="flex items-center">
        <a href=".">
          <div className="h-full min-w-[80px] mr-[54px]">
            <img className="hidden sm:inline-block w-full h-full" src={SwappiLogo} alt="logo" />
            <img className="sm:hidden h-[36px]" src={SwappiLogo} alt="logo" />
          </div>
        </a>
        <NavMenu />
      </div>

      <div className="flex items-center space-x-2">
        <div className="px-2 min-w-[70px] md:min-w-[85px] hidden sm:flex flex-row items-center">
          <div className="w-7.5 h-7.5 rounded-full overflow-hidden">
            <img src={PPILogo} alt="ppi" />
          </div>
          <span className="ml-2 text-[15px] font-medium text-ink-green whitespace-nowrap">$ 8537.62</span>
        </div>

        <NetworkInfo />
        <AuthConnectButton>
          {authConnectStatus === "connected" && (
            <Button color="linear-lime" className=" text-medigreen hover:text-white group" startIcon={<WalletIcon />}>
              {shortenEthereumAddress(account)}
            </Button>
          )}
        </AuthConnectButton>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <>
      <header className="relative z-1 sm:pt-0 pt-1">
        <AssetsLink />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
