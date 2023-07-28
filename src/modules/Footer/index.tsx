import { useLocation } from "react-router-dom";
import CertikLogo from "@assets/images/certik.svg";
import { ReactComponent as GithubIcon } from "@assets/icons/github.svg";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as TiwtterIcon } from "@assets/icons/twitter.svg";
import { ReactComponent as RedditIcon } from "@assets/icons/reddit.svg";
import { ReactComponent as MediumIcon } from "@assets/icons/medium.svg";
import Tooltip from "@components/Tooltip";

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

const OtherLinks: React.FC = () => {
  return (
    <>
      <div className="sm:flex hidden flex-row space-y-0 space-x-9">
        {links.map(({ text, href, no_blank_target }, index) => {
          return (
            <a
              key={index}
              href={href}
              target={no_blank_target ? undefined : "_blank"}
              className="text-medigreen hover:text-bluegreen no-underline"
              rel="noreferrer"
            >
              {text}
            </a>
          );
        })}
      </div>
      <div className="w-full sm:hidden flex flex-row justify-between">
        <div className="flex flex-col space-y-2">
          {links.slice(0, 4).map(({ text, href, no_blank_target }, index) => {
            return (
              <a
                key={index}
                href={href}
                target={no_blank_target ? undefined : "_blank"}
                className="text-medigreen hover:text-bluegreen no-underline"
                rel="noreferrer"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end space-y-2">
            {links
              .slice(-2)
              .reverse()
              .map(({ text, href, no_blank_target }, index) => {
                return (
                  <a
                    key={index}
                    href={href}
                    target={no_blank_target ? undefined : "_blank"}
                    className="text-medigreen hover:text-bluegreen no-underline"
                    rel="noreferrer"
                  >
                    {text}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

function AuditInfo() {
  return (
    <div className="flex justify-between text-medigreen space-x-2 items-center">
      <span>Audit by</span>
      <span className="w-20">
        <a
          href="https://www.certik.com/projects/swappi-finance"
          target="_blank"
          rel="noreferrer"
        >
          <img src={CertikLogo} alt="icon" className="w-full h-full" />
        </a>
      </span>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="flex space-x-3 sm:space-x-6">
      <a
        href="https://github.com/swappidex"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <GithubIcon className="w-full h-full fill-current text-medigreen hover:text-bluegreen" />
      </a>

      <a
        href="https://t.me/Swappi_DEX"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <TelegramIcon className="w-full h-full fill-current text-medigreen hover:text-bluegreen" />
      </a>
      <a
        href="https://twitter.com/SwappiDEX"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <TiwtterIcon className="w-full h-full fill-current text-medigreen hover:text-bluegreen" />
      </a>
      <a
        href="https://www.reddit.com/r/Swappi/"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <RedditIcon className="w-full h-full fill-current text-medigreen hover:text-bluegreen" />
      </a>
      <a
        href="https://medium.com/@swappidex"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <MediumIcon className="w-full h-full fill-current text-medigreen hover:text-bluegreen" />
      </a>
    </div>
  );
}

function BlockNumber() {
  return (
    <div className="sm:flex hidden flex-row items-center">
      <Tooltip
        text={
          <div className="px-4 py-2 rounded-[8px] max-w-[256px] w-max text-base leading-6 font-medium text-[#e2e8f0] bg-medigreen">
            <div>The most recent block</div>
            <div>number on this network.</div>
            <div>Prices update on every block.</div>
          </div>
        }
        placement="left"
        arrow={true}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://evmtestnet.confluxscan.io/block/1`}
          className="group relative mr-0.5 text-[11px] text-medigreenfont-medium"
        >
          <span className="opacity-50">1&ensp;</span>
        </a>
      </Tooltip>
      <div className="relative w-3.5 h-3.5 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-lime" />
        <div
          className={`${
            false ? "opacity-100" : "opacity-0"
          } absolute inset-0 animate-spin rounded-full border border-l-2 border-transparent border-l-lime`}
        />
      </div>
    </div>
  );
}

function Menu() {
  const location = useLocation();
  const menus = [
    {
      text: "Exchange",
      href: "/swap",
    },
    {
      text: "Farming",
      childrenClassName: "-left-1",
      children: [
        {
          text: "Farming",
          href: "/farming",
        },
        {
          text: "Dual Farming",
          href: "",
        },
      ],
    },
    {
      text: "Launchpad",
      href: "/launchpad",
    },
    {
      text: "More",
      childrenClassName: "right-0",
      children: [
        {
          text: "Staking",
          href: "/staking",
        },
        {
          text: "Lottery",
          href: "/lottery",
        },
        {
          text: "Liquidity",
          href: "/liquidity",
        },
      ],
    },
  ];
  return (
    <div className="grid grid-flow-col gap-2 h-12 p-1 rounded-xl bg-white">
      {menus.map(({ text, href, children, childrenClassName }, index) => {
        const isFocus =
          href === location.pathname ||
          (children &&
            !!children.find((item) => item.href === location.pathname));

        if (href) {
          return (
            <a
              className={`${
                isFocus ? "text-bluegreen bg-[#f0fcf8]" : ""
              } py-1.5 px-2.5 flex items-center justify-center rounded-xl font-normal no-underline`}
              href={href}
              key={index}
            >
              {text}
            </a>
          );
        }
        return (
          <div
            onMouseUp={(e) => {
              // e.preventDefault();
            }}
            onMouseDown={(e) => {
              // console.log('onMouseUp')
              // e.preventDefault();
            }}
            onClick={(e) => {
              const children = (e.target as HTMLElement).querySelector(
                "[data-children]"
              );
              console.log({
                active: document.activeElement,
                target: e.target,
                children,
              });
              if (children && children !== document.activeElement) {
                (children as HTMLElement).focus();
              }
            }}
            key={index}
            className={`${
              isFocus ? "text-bluegreen bg-[#f0fcf8]" : ""
            } p-2 relative flex items-center justify-center rounded-xl font-normal`}
          >
            {text}
            <div
              data-children
              tabIndex={0}
              className={`${
                childrenClassName || ""
              }  py-1 focus:opacity-100 focus-within:opacity-100 opacity-0 focus:h-auto focus-within:h-auto h-0 absolute bottom-11 rounded-md shadow-lg bg-white`}
            >
              {children?.map(({ text, href }, index) => {
                const isFocus = href === location.pathname;
                return (
                  <a
                    className={`${
                      isFocus ? "text-inherit" : "text-black"
                    } py-2 px-4 flex items-center rounded-xl dfont-normal whitespace-nowrap no-underline`}
                    href={href}
                    key={index}
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <div className="fixed inset-0 flex flex-col justify-end pointer-events-none px-2 sm:px-4 lg:px-20">
      <div className="flex flex-col items-center justify-between sm:mb-5 mb-6 pointer-events-auto">
        <div className="flex w-full flex-col px-5 sm:px-8 lg:px-24 py-3.5 text-[13px] space-y-4">
          <div className="flex justify-between sm:items-center items-end">
            <OtherLinks />
            <div className="sm:block hidden">
              <SocialMediaLinks />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <AuditInfo />
            <div className="sm:hidden block">
              <SocialMediaLinks />
            </div>
            <BlockNumber />
          </div>
        </div>
        <div className="sm:hidden mt-3">
          <Menu />
        </div>
      </div>
    </div>
  );
}
export default Footer;
