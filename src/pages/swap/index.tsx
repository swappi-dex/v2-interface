export default function Swap() {
  return (
    <div
      style={{
        boxShadow:
          "0px 4px 20px rgba(42, 61, 74, 0.1), 0px 40px 106px 11px rgba(159, 234, 225, 0.15)",
      }}
      className="max-w-[485px] mx-auto lg:mt-15 mt-33 rounded-ss-2xl rounded-ee-2xl overflow-hidden"
    >
      <div className="flex pt-5 px-1 justify-between">
        <div className="flex justify-center w-full space-x-5 sm:space-x-6 md:space-x-20 sm:ml-10 ml-5">
          <a
            className="pb-2 px-2 text-[16px] border-lime font-medium tracking-widest uppercase border-b-[3px] dark:text-white text-ink-green "
            href="#/swap"
          >
            Exchange
          </a>
          <a
            className="pb-2 px-2 text-[16px] border-transparent font-medium tracking-widest uppercase border-b-[3px] dark:text-white text-ink-green"
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
            <button className="w-5 h-5">
              <img
                src="data:image/png;base64,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"
                alt="icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 pt-8 rounded-tl-3xl relative">
        <div className="grid row-auto gap-2">
          <div>
            <div className="from-[#ECFBFE] to-[#F8FECA] bg-gradient-to-r relative rounded-xl  w-full border border-transparent hover:border hover:border-[#D9ECCA]">
              <div>
                <div className="px-4 pt-4 flex items-center justify-between">
                  <label className="text-sm text-ink-green text-opacity-60">
                    From:
                  </label>
                  <div>
                    <div className="sc-bdnxRM Row-sc-137ohb9-0 Row__RowBetween-sc-137ohb9-1 lmTMKd jBqCDv ipAOom">
                      <div className="styled__LoadingOpacityContainer-sc-8wjps9-1 bgQpVs">
                        <div className="theme__TextWrapper-sc-1fhyvuh-0 kgRhDV css-djrxae" />
                      </div>
                      <div className="sc-bdnxRM Row-sc-137ohb9-0 Row__RowFixed-sc-137ohb9-4 lmTMKd jBqCDv dxwSyX">
                        <div
                          className="theme__TextWrapper-sc-1fhyvuh-0 hDFtnD text-ink-green !ml-1 css-1ecm0so"
                          style={{ display: "inline", cursor: "pointer" }}
                        >
                          Balance: 832.5
                        </div>
                        <button className="ml-2 py-0.5 px-3 text-xs tracking-[0.05em] font-medium text-white rounded bg-bluegreen">
                          Max
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-1 px-4 pb-4 flex items-center">
                  <div className="flex flex-auto">
                    <input
                      className="w-full outline-none bg-transparent text-xl text-ink-green"
                      inputMode="decimal"
                      autoComplete="off"
                      autoCorrect="off"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      placeholder={"0.0"}
                      minLength={1}
                      maxLength={79}
                      spellCheck="false"
                      defaultValue=""
                    />
                  </div>
                  <button className="ml-3 px-0 bg-transparent text-ink-green ">
                    <span className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="w-5 h-5"
                          alt="CFX"
                          src="/images/cfx.svg"
                          style={{ marginRight: "0.2rem" }}
                        />
                        <span className="mx-1">CFX</span>
                      </div>
                      <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-1"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#2A3D4A"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-2 relative z-10 flex items-center justify-center">
              <button className="w-10 h-10">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVpSURBVHgB7Z3NbhtVGIa/cUwJJAWXRqqRosoRXqRsCBKwKRKOumDFPaSbbnMrdE9Fb4AVqy5KyqISEixcCUEXrTKCglxRWrdyUBqSDP6mOVFw59hjz5mZM2/fR5rEmXEmkZ85v+PzOpAjtra/bkjtcDOKos7wx46QChJ0o+jg6qWVK9eP9+iXodxWFBxsDR+2hCAQBtHc+vrK5TAW/F341bZQLhoq+cO5m9vXNoJANoSg0Yjk8Hl9KHdz9Ehz8T2Zry8KqQ67+wPpDe7/b18QBJ/VRaK1kztV7urZT4VUkxHJndroE1hyq0uSu5oQaCgYHAoGh4LBoWBwKBgcCgaHgsGhYHAoGBwKBoeCwaFgcCgYHAoGh4LBoWBwKBgcCgaHgsGhYHAoGBwKBqcuHhI+vSMPnv0SP24utqV95mNxiTn//uGe9Tn12ilZPPVOvDXmz8nSG+elingn+O7ft6U3uHf8sxGxevaiuODekx+PL55x6N/s7/biTZ+vbyrXi625UK1lPV5V0aNyDbpPj7kg6fxp0LU/Yb8r3Yc3pLcz2znKwBvBNrkGl5KzoKLvProd1wRVwAvBk+QaXEhefuuCuECrbR8uuEmULjitXENWya2312LJ2onKiv4vvpfkUjtZ08o1mN+ZtePVPvNJvI1jsPdYBv8+lkf//D7cfrM+70UHbEGWT78vPlKa4FnlGrJKnoQZIjUX2nG7q50r/Z5E2L8T97DrQfZawTWlVNFZ5RqK6njpsOijd7+IhSehQ6o0Q68yKFywK7mGoiRrm7127nPrGPjBs19lP9oT3yhU8CS5Gh9hP9a2HitSsq1J0FKs7bZvFCY4jdxx2SD6wvoguTHfjLckxnXGyqIQwVnlGnyRbKtp+rsPxTdyF6zjRBdyDWkkh0+7kieN15NLsK2XXSa5C3Yp1zBJsnZ48sTW0Rp3d6osSpvJyprHNUkyeUHugpPmfl2Frdkkj+uNv2rkPpOlc79adZkEtuXTF6TVWBNXqOR67bXczl91CpmqTDP36/P5qwzfkwUOBYNDweBQMDgUDA4Fg0PB4FAwOBQMDgWDQ8HgUDA4FAwOBYNDweBQMDgUDA4Fg0PB4FAwOBQMDgWDQ8HgeJl0VxZFJezldf4kKPiI0QQ81wl7SQl+uiJDV37kCavoI/JM2LOtj857FaRCwRPIKtl1Jsm0eCfYFlCW9+LqcQl4s0rOkkniCu8E2xZX95/3JE+0LXQZD5FGbhEL5rwTrNnMSZjloXniKgPEVSaJC7wTbAvejrObcy7FSlbJPslVvBOsaXK2dlhjfIsIG0sjeZZjRctVvOxk2To8cWZk74YXkqelDLmKl8MkTW61lWJNk/vpz28LiSxyJbksuYqXglVuq/GB9bjK/eGPb+Tnv7bieH2N/c2LrJLLlKt4O1WppVhFjpvt0ejANPGBesFkmfs105XTTliULVfxeiZLx4kuqkgT95slAW/akuyDXMX7qUp9Yd19zkK2ud+0kn2Rq1RiLlpL8urSRS8+r2iSZJ/kKpW5XajR+hoCqu1gb+f+TL1oV3O/tjbZN7lKpe4HawnWFDvdtHOlM1uDvSfx0GnSx9S9qgl7lb3hv/Tm+Xgrkyok7PF+MDgUDA4Fg0PB4FAwOBQMDgWDQ8HgUDA4FAwOBYNDweBQMDgUDA4Fg0PB4FAwOBQMDgWDQ8HgUDA4FAwOBYPzkuDd/R0h1STJnb7x/dZw65gdZjnGfH1BSHVQuS8vbw269SiKvg+CoHNyd5nBXcQdUXRwtVaT+pfDx6EQNMJLK1eu19ZXLveDaG5dKBmJ8MipBCf33ty+thEEsjks3P4tkyNpuKVNrtbKWnB1x3/3W2Ye3+DdyQAAAABJRU5ErkJggg=="
                  alt="icon"
                />
              </button>
            </div>
            <div className="from-[#FAFAEA] to-[#FBFFDF] bg-gradient-to-r relative rounded-xl  w-full border border-transparent hover:border hover:border-[#D9ECCA]">
              <div>
                <div className="px-4 pt-4 flex items-center justify-between">
                  <label className="text-sm text-ink-green text-opacity-60">
                    To:
                  </label>
                </div>
                <div className="pt-1 px-4 pb-4 flex items-center">
                  <div className="flex flex-auto">
                    <input
                      className="w-full outline-none bg-transparent text-xl text-ink-green"
                      inputMode="decimal"
                      autoComplete="off"
                      autoCorrect="off"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      placeholder={"0.0"}
                      minLength={1}
                      maxLength={79}
                      spellCheck="false"
                      defaultValue=""
                    />
                  </div>
                  <button className="ml-3 px-0 bg-transparent text-ink-green">
                    <span className="flex items-center">
                      <div className="flex items-center">
                        <span className="text-base">Select a token</span>
                      </div>
                      <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-1"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#2A3D4A"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            disabled={true}
            className="w-full py-3 rounded-xl disabled:opacity-20 disabled:cursor-auto disabled:pointer-events-none bg-[#163856] text-white"
          >
            Select a token
          </button>
        </div>
      </div>
    </div>
  );
}
