import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { config } from "./config";
import { useAccount, connect } from "@cfxjs/use-wallet-react/ethereum";

export function Header(props: PropsWithChildren<{}>) {
  const location = useLocation();
  const account = useAccount();
  return (
    <>
      <header className="relative z-1">
        <div className="hidden lg:flex w-full h-18 flex-row justify-center bg-medigreen">
          <div className="flex items-center">
            <div className="flex rounded-3xl bg-[#DACFCE] bg-opacity-20 py-2.5 px-7 ml-2 space-x-1">
              <span className="text-orange">Bridge Your Assets</span>
              <span className="text-white pl-2">from Conflux Core here:</span>
              <span>
                <a
                  className="text-bluegreen underline"
                  target="_blank"
                  href="https://confluxhub.io/cross-space"
                  rel="noreferrer"
                >
                  confluxhub.io
                </a>
              </span>
              <span className="text-white pl-2">
                from Ethereum and Others here:
              </span>
              <div className="space-x-2">
                <span>
                  <a
                    className="text-bluegreen underline"
                    target="_blank"
                    href="https://conflux.multichain.org"
                    rel="noreferrer"
                  >
                    conflux.multichain.org
                  </a>
                </span>
                <span>
                  <a
                    className="text-bluegreen underline"
                    target="_blank"
                    href="https://cbridge.celer.network/"
                    rel="noreferrer"
                  >
                    cbridge.celer.network
                  </a>
                </span>
                <span>
                  <a
                    className="text-bluegreen underline"
                    target="_blank"
                    href="https://meson.fi"
                    rel="noreferrer"
                  >
                    meson.fi
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 sm:px-4 lg:px-20 py-3.5 flex justify-between w-full items-center border-b border-[#D0EABC]">
          <div className="flex items-center">
            <a href="." className="sc-mo5v3c-2 hATJut">
              <div className="text-xl lg:text-2xl sm:pr-4 lg:mr-2 font-medium dark:text-white text-ink-green">
                <div className="h-full min-w-[80px]">
                  <img
                    className="hidden sm:inline-block w-full h-full"
                    src="/images/swappi.svg"
                    alt="logo"
                  />
                  <img
                    className="sm:hidden h-[36px]"
                    src="data:image/png;base64,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"
                    alt="logo"
                  />
                </div>
              </div>
            </a>
            <div className="hidden space-x-8 md:flex lg:space-x-11 ml-3 mr-6 items-center">
              {config
                .filter((item) => {
                  return item.path !== "/";
                })
                .map((item) => {
                  const isFocus = item.path === location.pathname;
                  return (
                    <a
                      className={`capitalize font-medium dark:text-white ${
                        isFocus ? "text-[#7fbf4e] active" : "text-ink-green"
                      }`}
                      href={`#${item.path}`}
                      aria-current="page"
                    >
                      {item.name || item.path.replaceAll("/", "")}
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="px-2 min-w-[70px] md:min-w-[85px] hidden sm:flex flex-row items-center">
              <div className="w-7.5 h-7.5 rounded-full overflow-hidden">
                <img src="/images/ppi.png" alt="ppi" />
              </div>
              <span className="ml-2 text-[15px] font-medium text-ink-green whitespace-nowrap">
                $ 8537.62
              </span>
            </div>
            <button className="hidden sm:flex flex-row items-center ml-1.5  py-1.5 px-1 md:px-2 h-8 text-sm border-none rounded-3xl ">
              <div className="hidden xl:block mr-1 tracking-[2px] truncate sm:w-[80px] sm:overflow-ellipsis font-medium text-ink-green text-[15px]">
                Conflux eSpace Testnet
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {!account && (
              <button
                onClick={connect}
                className="ml-1 px-3 h-[32px] rounded-3xl text-[15px] tracking-[2px] text-white font-normal bg-medigreen"
              >
                Connect Wallet
              </button>
            )}
            {!!account && (
              <button className="border-2 flex items-center px-3 rounded-3xl h-[32px] bg-gradient-to-r from-[#ecfbfe] to-[#f8feca] border-transparent hover:bg-none hover:bg-medigreen hover:text-white group">
                <div className="mr-3 w-4 h-4">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-current text-ink-green group-hover:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.8308 5.32463V2.85083C15.8309 2.60635 15.7813 2.36467 15.6853 2.14179C15.5893 1.91891 15.4492 1.71993 15.2742 1.55803C15.0993 1.39614 14.8934 1.27502 14.6703 1.20272C14.4472 1.13042 14.212 1.10858 13.9803 1.13865L3.14553 2.54462C2.55169 2.6274 2.00677 2.93315 1.61213 3.405C1.21748 3.87686 0.99995 4.4827 1 5.10986V7.9123V9.63743V13.0876C1 13.3164 1.08681 13.5358 1.24133 13.6976C1.39584 13.8593 1.60541 13.9502 1.82394 13.9502C2.04246 13.9502 2.25203 13.8593 2.40655 13.6976C2.56107 13.5358 2.64787 13.3164 2.64787 13.0876V7.9123C2.64787 7.68353 2.73468 7.46414 2.8892 7.30238C3.04372 7.14062 3.25329 7.04974 3.47181 7.04974H15.0021L15.0069 7.04976L15.0117 7.04974H16.6548C16.8733 7.04974 17.0829 7.14062 17.2374 7.30238C17.3919 7.46414 17.4787 7.68353 17.4787 7.9123V8.77487H14.183C13.3089 8.77487 12.4706 9.13838 11.8526 9.78542C11.2345 10.4325 10.8873 11.31 10.8873 12.2251C10.8873 13.1402 11.2345 14.0177 11.8526 14.6648C12.4706 15.3118 13.3089 15.6753 14.183 15.6753H17.4787V16.5379C17.4787 16.7666 17.3919 16.986 17.2374 17.1478C17.0829 17.3096 16.8733 17.4004 16.6548 17.4004H3.47181C3.25329 17.4004 3.04372 17.3096 2.8892 17.1478C2.73468 16.986 2.64787 16.7666 2.64787 16.5379C2.64787 16.3091 2.56107 16.0897 2.40655 15.928C2.25203 15.7662 2.04246 15.6753 1.82394 15.6753C1.60541 15.6753 1.39584 15.7662 1.24133 15.928C1.08681 16.0897 1 16.3091 1 16.5379C1 17.2242 1.26042 17.8824 1.72398 18.3676C2.18753 18.8529 2.81624 19.1255 3.47181 19.1255H16.6548C16.9794 19.1255 17.3008 19.0586 17.6007 18.9286C17.9006 18.7985 18.1731 18.6079 18.4026 18.3676C18.6321 18.1273 18.8142 17.8421 18.9384 17.5281C19.0627 17.2142 19.1266 16.8777 19.1266 16.5379V14.8183L19.1266 14.8128V9.63743L19.1266 9.63186V7.9123C19.1266 7.57248 19.0627 7.23599 18.9384 6.92204C18.8142 6.60809 18.6321 6.32283 18.4026 6.08254C18.1731 5.84225 17.9006 5.65164 17.6007 5.5216C17.3008 5.39156 16.9794 5.32463 16.6548 5.32463H15.8308ZM14.183 10.5H17.4787V13.9502H14.183C13.9666 13.9502 13.7523 13.9056 13.5523 13.8189C13.3524 13.7323 13.1707 13.6052 13.0177 13.445C12.8646 13.2848 12.7432 13.0946 12.6604 12.8853C12.5776 12.676 12.535 12.4517 12.535 12.2251C12.535 11.9985 12.5776 11.7742 12.6604 11.5649C12.7432 11.3556 12.8646 11.1654 13.0177 11.0052C13.1707 10.845 13.3524 10.7179 13.5523 10.6313C13.7523 10.5446 13.9666 10.5 14.183 10.5ZM14.183 5.32463H3.47181C3.18842 5.32463 2.91005 5.37557 2.64787 5.47262V5.10986C2.64787 4.67772 2.95355 4.312 3.35563 4.25593L14.183 2.84996V5.32463ZM14.2457 12.5552C14.2043 12.4505 14.183 12.3383 14.183 12.2251C14.183 12.1118 14.2043 11.9996 14.2457 11.895C14.2871 11.7903 14.3478 11.6953 14.4243 11.6152C14.5008 11.5351 14.5916 11.4715 14.6916 11.4282C14.7916 11.3848 14.8987 11.3625 15.0069 11.3625C15.1151 11.3625 15.2222 11.3848 15.3222 11.4282C15.4222 11.4715 15.513 11.5351 15.5895 11.6152C15.666 11.6953 15.7267 11.7903 15.7681 11.895C15.8095 11.9996 15.8308 12.1118 15.8308 12.2251C15.8308 12.3383 15.8095 12.4505 15.7681 12.5552C15.7267 12.6598 15.666 12.7549 15.5895 12.835C15.513 12.9151 15.4222 12.9786 15.3222 13.022C15.2222 13.0653 15.1151 13.0876 15.0069 13.0876C14.8987 13.0876 14.7916 13.0653 14.6916 13.022C14.5916 12.9786 14.5008 12.9151 14.4243 12.835C14.3478 12.7549 14.2871 12.6598 14.2457 12.5552Z"
                    />
                  </svg>
                </div>
                <p className="text-base font-normal tracking-[2px]">
                  {account?.slice(0, 6)}...{account?.slice(-4)}
                </p>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
