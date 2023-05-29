export default function Liquidity() {
  return (
    <div
      style={{
        boxShadow:
          "0px 4px 20px rgba(42, 61, 74, 0.1), 0px 40px 106px 11px rgba(159, 234, 225, 0.15)",
      }}
      className="max-w-[485px] mx-auto lg:mt-15 mt-33 rounded-ss-2xl rounded-ee-2xl"
    >
      <div className="flex pt-5 px-1 justify-between">
        <div className="flex justify-center w-full space-x-5 sm:space-x-6 md:space-x-20 sm:ml-10 ml-5">
          <a
            className="border-transparent font-medium tracking-widest uppercase border-b-[3px] pb-2 px-2 dark:text-white text-ink-green text-base/inherit"
            href="#/swap"
          >
            Exchange
          </a>
          <a
            className="border-lime font-medium tracking-widest uppercase border-b-[3px] pb-2 px-2 dark:text-white text-ink-green text-base/inherit"
            href="#/liquidity"
          >
            Liquidity
          </a>
        </div>
        <div className="flex">
          <div className="flex mx-2 sm:mx-4 sm:space-x-3 space-x-2 pb-3">
            <button className="w-5 h-5">
              <img
                src="data:image/png;base64,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"
                alt="icon"
              />
            </button>
            <button className="w-5 h-5" id="open-settings-dialog-button">
              <img
                src="data:image/png;base64,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"
                alt="icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-3xl rounded-tr-none rounded-bl-none pt-8 relative">
        <div className="">
          <div className="w-full grid row-auto gap-3">
            <div className="border border-grass rounded-xl bg-gradient-to-r from-[#FAFAEA] to-[#FBFFDF] p-4 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <div className="flex justify-between text-sm">
                        <span className="text-ink-green text-opacity-60">
                          LP Balance
                        </span>
                        <a
                          className="text-[#EBA337] underline"
                          id="nav-to-farming"
                          href="#/farming"
                        >
                          Stake CFX/ETH LP to Earn
                        </a>
                      </div>
                      <div className="flex justify-between items-center mt-0.5">
                        <span className="font-medium text-ink-green text-lg">
                          0.7152
                        </span>
                        <div className="flex items-center">
                          <div className="flex min-w-5">
                            <img
                              className="w-5 h-5"
                              alt="ETH"
                              src="data:image/png;base64,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"
                            />
                            <img
                              className="w-5 h-5"
                              alt="CFX"
                              src="/images/cfx.svg"
                            />
                          </div>
                          <span className="text-sm text-ink-green text-opacity-60 ml-1.5">
                            CFX/ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-1.5">
                    <button
                      className="btn btn-secondary text-sm !border-none !font-medium !bg-transparent !px-0.5"
                      id="headlessui-disclosure-button-20"
                      type="button"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className=" w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-grass rounded-xl bg-gradient-to-r from-[#FAFAEA] to-[#FBFFDF] p-4 overflow-hidden">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <div className="flex justify-between text-sm">
                        <span className="text-ink-green text-opacity-60">
                          LP Balance
                        </span>
                        <a
                          className="text-[#EBA337] underline"
                          id="nav-to-farming"
                          href="#/farming"
                        >
                          Stake WBTC/ETH LP to Earn
                        </a>
                      </div>
                      <div className="flex justify-between items-center mt-0.5">
                        <span className="font-medium text-ink-green text-lg">
                          4.622
                        </span>
                        <div className="flex items-center">
                          <div className="flex flex-row max-w-5">
                            <img
                              className="w-5 h-5"
                              alt="ETH"
                              src="data:image/png;base64,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"
                            />
                            <img
                              className="w-5 h-5"
                              alt="WBTC"
                              src="data:image/png;base64,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"
                            />
                          </div>
                          <span className="text-sm text-ink-green text-opacity-60 ml-1.5">
                            WBTC/ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-1.5">
                    <button
                      className="btn btn-secondary text-sm !border-none !font-medium !bg-transparent !px-0.5"
                      id="headlessui-disclosure-button-24"
                      type="button"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className=" w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 mb-3 items-center mx-2 sm:mx-10 text-ink-green">
              <span className="inline-flex items-center mr-2">
                <span className="font-medium">
                  Don't see a pool you joined?
                </span>
                <span className="group ml-1 relative z-10 flex items-center justify-center w-3.5 h-3.5 text-sm/inherit border border-ink-green rounded-full cursor-pointer">
                  <span className="opacity-60">?</span>
                  <div className="group-hover:block hidden absolute left-full top-1/2 -translate-y-1/2 pl-2">
                    <div className="absolute top-1/2 left-0.5 origin-top-left -rotate-45 w-2 h-2 bg-medigreen"></div>
                    <div className="max-w-[256px] w-max px-4 py-[0.6rem] rounded-lg text-base font-normal text-white bg-medigreen">
                      If you have staked all your LP tokens in a farm, that LP
                      pool will not show up here. To view, unstake your LP token
                      from the pool, or add more liquidity directly
                    </div>
                  </div>
                </span>
              </span>
              <a
                className="py-0.5 px-6 text-base text-center border-2 border-ink-green rounded-lg "
                href="#/pool/v2/find"
              >
                Find
              </a>
            </div>
          </div>
          <a
            className="block  mt-4 py-3 w-full rounded-xl disabled:opacity-20 disabled:cursor-auto disabled:pointer-events-none bg-[#163856] text-white"
            href="#/add/v2/CFX"
          >
            <div className="w-full text-center css-xy7yfl">Add Liquidity</div>
          </a>
        </div>
      </div>
    </div>
  );
}
