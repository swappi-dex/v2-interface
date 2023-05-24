import { PropsWithChildren } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { config } from "./config";

export function Header(props: PropsWithChildren<{}>) {
  const location = useLocation();
  console.log({
    location,
  });
  return (
    <>
      <div className="hidden z-0 fixed -top-full -left-full w-[200vw] h-[200vh] pointer-events-none"></div>
      <header className="relative z-1">
        <div className="hidden lg:flex w-full h-18 flex-row justify-center bg-medigreen">
          <div className="flex items-center">
            <div className="flex rounded-3xl bg-[#DACFCE] bg-opacity-20 py-2.5 px-7 ml-2 space-x-1">
              <span className="text-orange">Bridge Your Assets</span>
              <span className="text-white pl-2">from Conflux Core here:</span>
              <span className="">
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
                <span className="">
                  <a
                    className="text-bluegreen underline"
                    target="_blank"
                    href="https://conflux.multichain.org"
                    rel="noreferrer"
                  >
                    conflux.multichain.org
                  </a>
                </span>
                <span className="">
                  <a
                    className="text-bluegreen underline"
                    target="_blank"
                    href="https://cbridge.celer.network/"
                    rel="noreferrer"
                  >
                    cbridge.celer.network
                  </a>
                </span>
                <span className="">
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
        <div className="flex w-full border-b border-[#D0EABC] px-2 sm:px-4 lg:px-20 py-3.5">
          <div className="flex justify-between w-full items-center">
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
          </div>
        </div>
      </header>
    </>
  );
}
