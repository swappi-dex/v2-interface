import { useRequest } from "ahooks";
import { BrowserProvider } from "ethers";

const links = [
  {
    href: "https://docs.swappi.io",
    text: "Documentation",
  },
  {
    href: "https://forms.gle/xjpxQhrqPFnG2ybSA",
    text: "Token Listing",
  },
  {
    href: "https://forms.gle/xjpxQhrqPFnG2ybSA",
    text: "Apply for Farm",
  },
  {
    href: "https://immunefi.com/bounty/swappi",
    text: "Bug Bounty",
  },
  {
    href: "https://info.swappi.io",
    text: "Analytics",
  },
  {
    no_blank_target: true,
    href: "#/genesis",
    text: "Genesis NFT",
  },
];

function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

function Footer() {
  const { data, loading } = useRequest(
    async () => {
      const [blockNumber] = await Promise.all([
        new BrowserProvider(window.ethereum).getBlockNumber(),
        sleep(1000),
      ]);

      return blockNumber;
    },
    {
      pollingInterval: 2000,
    }
  );

  return (
    <div className="fixed inset-0 flex flex-col justify-end pointer-events-none">
      <div className="w-full mb-4 z-10 pointer-events-auto">
        <div className="flex w-full justify-between px-6 sm:px-8 lg:px-24 py-3.5 sm:mb-0 mb-16">
          <div className="flex w-full flex-col text-[13px] space-y-4">
            <div className="flex justify-between sm:items-center items-end">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-9">
                {links.map(({ text, href, no_blank_target }, index) => {
                  return (
                    <a
                      key={index}
                      href={href}
                      target={no_blank_target ? undefined : "_blank"}
                      className="text-medigreen hover:text-bluegreen"
                      rel="noreferrer"
                    >
                      {text}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col items-end space-y-0.5 -mb-8 sm:mb-0 z-10">
                <div className="flex space-x-3 sm:space-x-6">
                  <a
                    href="https://github.com/swappidex"
                    target="_blank"
                    className="w-[18px] h-[18px]"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      color="#B8ADD2"
                      className="w-full h-full fill-current text-medigreen hover:text-bluegreen"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/Swappi_DEX"
                    target="_blank"
                    className="w-[18px] h-[18px]"
                    rel="noreferrer"
                  >
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                      className="w-full h-full fill-current text-medigreen hover:text-bluegreen"
                    >
                      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/SwappiDEX"
                    target="_blank"
                    className="w-[18px] h-[18px]"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 18 15"
                      width="20px"
                      color="#B8ADD2"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current text-medigreen hover:text-bluegreen"
                    >
                      <path d="M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.reddit.com/r/Swappi/"
                    target="_blank"
                    className="w-[18px] h-[18px]"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      color="#B8ADD2"
                      className="w-full h-full fill-current text-medigreen hover:text-bluegreen"
                    >
                      <path d="M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z" />
                      <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z" />
                      <path d="M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z" />
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@swappidex"
                    target="_blank"
                    className="w-[18px] h-[18px]"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      color="#B8ADD2"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current text-medigreen hover:text-bluegreen"
                    >
                      <path d="M7.64 6.32c3.116 0 5.641 2.544 5.641 5.68 0 3.137-2.525 5.68-5.64 5.68C4.526 17.68 2 15.136 2 12c0-3.136 2.525-5.68 5.64-5.68zm9.008.333c1.558 0 2.82 2.394 2.82 5.347h.001c0 2.953-1.263 5.347-2.82 5.347-1.558 0-2.82-2.395-2.82-5.347 0-2.952 1.262-5.347 2.82-5.347zm4.36.557c.548 0 .992 2.145.992 4.79s-.444 4.79-.992 4.79-.992-2.145-.992-4.79.444-4.79.992-4.79z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between text-medigreen space-x-2">
                <span>Audit by</span>
                <span className="w-20">
                  <a
                    href="https://www.certik.com/projects/swappi-finance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="icon"
                      className="w-full h-full"
                    />
                  </a>
                </span>
              </div>
              <div className="flex flex-row items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://evmtestnet.confluxscan.io/block/${data}`}
                  className="group relative mr-0.5 text-[11px]  text-medigreenfont-medium"
                >
                  <span className="opacity-50">{data}&ensp;</span>
                  <div className="group-hover:flex hidden absolute z-10 bottom-full left-1/2 pb-1 flex-col items-center -translate-x-1/2">
                    <div className="px-4 py-2 rounded-[8px] max-w-[256px] w-max text-base leading-6 font-normal text-[#e2e8f0] bg-medigreen">
                      The most recent block number on this network. Prices
                      update on every block.
                    </div>
                    <div className="w-2 h-2 bg-medigreen rotate-45 origin-top-right transform-gpu"></div>
                  </div>
                </a>
                <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-lime" />
                  <div
                    className={`${
                      loading ? "opacity-100" : "opacity-0"
                    } absolute inset-0 animate-spin rounded-full border border-l-2 border-transparent border-l-lime`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
