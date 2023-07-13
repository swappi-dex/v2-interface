import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="relative z-1 sm:pt-0 pt-1">
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
      </header>
    </>
  );
};

export default Header;
