import React from "react";
import { useRequest } from "ahooks";
import { BrowserProvider } from "ethers";
import GithubIcon from "@assets/icons/github.svg";
import TelegramIcon from "@assets/icons/telegram.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import RedditIcon from "@assets/icons/reddit.svg";
import Redium from "@assets/icons/redium.svg";

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

const sleep = (time: number) => {
  return new Promise((res) => setTimeout(res, time));
};

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
              className="text-medigreen hover:text-bluegreen"
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
                className="text-medigreen hover:text-bluegreen"
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
                    className="text-medigreen hover:text-bluegreen"
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

const AuditInfo: React.FC = () => {
  return (
    <div className="flex justify-between text-medigreen space-x-2">
      <span>Audit by</span>
      <span className="w-20">
        <a
          href="https://www.certik.com/projects/swappi-finance"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAABaCAYAAAC2e50SAAAACXBIWXMAADddAAA3XQEZgEZdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABJ7SURBVHgB7Z1NbxtZdobPuaWinOkZRANEagFBx2wECCbdGLR6EcBttdHULlmJhltysrL8C2z/gqaWWbX8CyxvkrGdieVfYDpueRqYhW0gPZjdcKazsOUBRovpgUya9+aeIimIrHurihS/VHwfwJZdXxS/Tr33PeeeyzRFLJTKC+fqYbnJ9AURl9luchxWIzJV1TR3X337X1UCAACQCNOEWb5QLppgvqxJrzNxqZ9zDdEhk9kzhp40Co29w+reIQEAAOhiIoF++cKXJa2UVe20ZX+DIg0JY5W+/etuUGhUX1X3agQAAGA8gT6yZI7mVswcl7Xhax5LZsiYF8z0hN+ZPVg8AIBZZmSBXoL7fGN+SywZ+zArgwZ3UemK6aXRap3YFGkwauLrk9aPDn71yz0CAIAZYqiBfvGfNlY45HXDptSv394h8t0NVRWZR0c9vvvyhX+1fr4ZyM/vvb69gTyCxQMAmAVOHejFbxdLxmheH9Rvl+Cr2NyVxOrR3LsXWZKqEvSbqik3FHtjodKpRgykHum6rr759YMXBAAAOWOgQL/02ZWyUWo9oQQyFQmwzPxEka6++ub0Hvry5zbBa9QWGf7iNBYPs3kEXx8AkCf6DvRLq5uiej+hAeio57fh291RlkJK0DckiV/6wir+FRqMWj2sf4qSTQDAWaevQL906UqZdPAw6/Fiydi/9wJDT44mVOfesXjsM73Wt69vaPvg2f0KAQDAGWaun4NNUy1w2q3BWPtDWfvDBvhhWDKn5dW3v6jZH7vyRyqBwnpYtpaRVfy0nmo7sTlPAABwxonC9vufXb2hlalI4LN/dl7v37/lOlgCZaE+/7zXA+/47UabvTfPzk5CM83XN8Zct89nN3aejBKC5p32CKFmj7t8lp43AGC24GiWaqAed23UfOv1r+7tuE6IShznmjeN5vMS3Eftt4+LxYsbK4pVKSrdNFy0z+326333a7C4uvG8x/s/tH7+h/DzAQDTCC9d3KxYXf9Vz3YELg+uG6Ng6uZTlGcCAKYRZS0LV1WKtWgKNwnEsEF+y7kjpEGrewAAYKQom5R0JxyZbognT+AYsa3sj2uufYoQ6AEA04lKqDOHqu9BB7qSsLtIAAAwhajEvVD1xySpecEwoxQTADCVqJT9UPVtUtS8gBsiAGAqSQv0UPWUrubbFAkAAKaQ9EAPVZ9FzUcsl8pFAgCAKSNLoJ9pVZ9RzQMAwNQSD/RGVmOKMbOq3qfmWw3bAABg+okHejbVaJHt2PbZU/VRuwei9fge3mXDsUDf/CFEQhYAMHU4rZugGVx3bJ45Va+Vdi5krkLedh0fzBsEegDA1OEM9O3WvndjO2ZI1be8ed6K7+HdV9Xo9YnRfMuwcwAAU4c3GauaquLYvDDfKHxFM0BrsZJ46+JjNe/YF7zXQKAHAEwd3oVHRNUvrW6Kqu+qOLGe9c3lUvn2q+pejXIMk/oqerbdW71qflzIiOrc0dwKKS7SmBn2KmGy9rBiNbERYi6ejzY1OveuNqrvo7TvDqakj9Mw36/lixtbo7x+h+j7Wg/L43gswfW8hFigZ0M/7fxbVL0OdKy0UDdCUfUuHz8XLMqL5VLz3LxLEyRaIKZh7HsymVm4597N1eyPKg0Jo9QN3e/yjkMkF88nsFmkRoHev7i5x4X6rWEHfJa1l+NtzCfCMN8vzXxnlNc/vubRuQUbQ+OP1XqcoQb6pYubX9n3quLaF7Nu7IF/3fm3qHrD5nb8NN7K8+SglprvRiqROksj+vIUoxzlLK1evWOU2WG0WgAODFNZNwrPRYETmDkkyJMnyNub9S3l2Fg8+f/GXKPiqhlvq/rc4VPzAZvjSpuwHhZpjERvIpktAiCZBWZ+jEaEs8XSpc2yL8jb7duyUp4rGdv1IREfydo5blX/+Zclyhlpal4ItLOMskYjIKr+8b2JAMRBI8IZIprro+mOax9bN+bgm/sV+bcrGRsLYvVCfSdsFG702gZNwxIUq5QTfGreRvoub16HNtDr3kNsUmwE6LCxQtaUj/9KJDfg8Vb5MI2csT6vMTyfCDMaERDBjmZ6HBVQVGgYl2c+NGbAz7bjdzvV+zuu9+uMIEFeK/PYY+fW3lo3pvMfZ9WN+O8n/WZR9dY+uN27tqy1eUqi6k+q3bOMu9KGam+ePdjtOu7dXNEoQ2OhGaw4PuC1N/v3P6QcIqPHg2ctFZIPePfg2b2RFS4sXbpStkLgYc/mYu93eFBk2G9/7NAALK5uPOae5HT+3t/JYZO8e+TumltToVo7WdWjbBanFrtAsxBL6Iiqd3n1bVV/5vGpeatmYrNgNevYcTbuv6QxMarRAxgBxvyeRohqYJLeLLK4uvm1/fFJ73aJ0RLke8vAFbGOBSh+x8XebT6vvqPq6Yzj8ubJoebbB8deYDKqRgAAMGKkOMMO8p15GBvQt11zfZSVp3FF4FCsQl5V/fKFL0tZ1XybmCfGQfMFAQDACMlSYePaJYuDxwKUdilWyq+qbwacWc1L6ZprQXX0uQEAjJKsFTYulEuJugJZh7ypelHz7JjN6FPzUfuBOIdvfv0Aih4AMBJSKmxevv7mQWJJrTqae+cKUAu+ma95U/U6YNcL5PbmSWYgBrFAb5OjCPIAgJEgLoIEeWfpd6vCppx2DRWV4Dgqb5r1sOQ7KS+qvt2KOLawSII3b3OuutS7bZwVNwCA2SKUjsGuHKKnwsZFa2asMU8cO7z2TV5UvWeZQK+ajzAqlr/QRFD0AIChk1Rhw4quZ+2mG02YkoSstR+62xEzf5F04lmfLRt5XhTvzGlfjLuJ57gqkhoI9EODqby4unGehsyb/Qe57bYKzh66Xvjafs4TCzjY8IJ8H9w7afvg6f09ykgU6G3wqnJ8+uWKeEO+nslJs2VlRhxNOTbIFx2ba2pO7frOkcVIHK9TDYnYofKJfY0/oeGDQA+mBxvAOa2ng2e3VNjY5GuF+iAK9NaqeLG4unnYq87DVsP8Xd/JouoL9flrvf4RT7DH+Gmwv/de0lCIOf682Bj488APm/XlC19WaUQ0A7Xuigd5XxhohkmtsHFx3OuGSXz67sQkM4l9s+s7WVT94sWNbRsg71AO4JBvJx5grJ3F3T1urD+fefgEZhFe0QGPbITrEX0YYeYUa7H/iQbguE0xa1WN7+bUsp0ocemo2jlzWM8rSc37Zs8GhaBKAEwRxpjbBHKJuCXvt/rc9MWxon87/3a30Cj0XmAhS3dKQ/qsq/pEb17QgdpybH4x6TVkc8hLq1qeExiU5KoxMB0Y2jNsBkrGyrrdNj96ePDs/jZl5DjQRzbM6ka11183OlL11aSLyAdr6eJVZ62nMmZqkmCa1Lr9HeMvnDHbqQHbYduw5omuIZtL7BfAfp4qBAbhZZbJM2DyqIzr+y59vlmx34n4/CSmytKlKy8Pnv4yk3Xc1Y9eafXIKFM6uc0wX1solStpK5b7VH2T2vbOFBDdjOKkKiCxbbTjJsbzDH8eTBxZAU0Wx4GSzx/Sv8aq90+cZZY6uLNcKr/IcsPoCvQ++6bQLJQoJekoHzI7IrgWW2iAo7r6XZow/fSb7wW2DRgYQ9v9LrQRLfDN7OxrYoP6LuYEzBb1Qv16oT6/4ohfC7pReGyD/VpasO9aM1ZUe6QOejDa3KAMnFxA+wRFe0eq0ITpq9/8CVptEig2sQoJLzAqpNw5MOaWa58VUlutxeLBrCBxWWle8xS9FHUjfJi2IHxscXBXsM7a2kCStq4bhb3AjUmuTH8aNf8uME7PE9U2YJS8EgHC5P58Wn/2/c+u9l1LDc4ur779Rc3a45ddPcakhDdshImVOLFA3wrW8Ytpw9coAx5VP7GV6UWRu9W8eZHF01SGHKMZ3oVtA0ZNu7+4M+Fvc2lf52FlN5Cd04z0lPMkR8MyqanPosqnTdVrpa85q4HY/YKdxDcSUNxEtQ0YC/WwftPXBlsb9dDXThzkk7SR3vLqplOQOwO9pw1xZlU+Lao+8tedy25ZRZ4yNyA6yjESkJtYlnMBGAbizwbN4LLHn42ScZO0RcH4SRrpaaKdKJnfgzPQR22IiR7FdmRU5dOi6j1tiEmFnOrN+9S8lLHRhLHDNHyxZ4hkf5aK1p99SGCmSBjpLTBzbKQ357uQaqqKDZS9w4CFeWmCT5Rqe4iqt75+qff8tqqv0IjxtiHO6K+31Lzp3Tz2WYf2zay5Oosurm7+yVpshzRGTMNcHnWnTmPFgPUaM+WDTosq1NfOSvMv8WeXL27c0hyfq9KZFv96/37q9xLkAxHjNsZd9qw81anEWevMf1K+C4mKIMfwQKbfZvEFJ63qR6Hms1TpDJtGobHnUnJRjTVTcZx/gnkz8vdtrM/rjJHkz8r3EpU4s0U/lTgq6UKi6l3bm40wU1+bSXn1vtr3LGreX6UzmR4ivtW8wGwi/qxh9xwOqcRZunQFLRBmiKyVOImBPrpjOD5U015Xr5V21ZTWsqj5aCQwJWq+g8ysxALkoMObbx54K3Ha0+KLBGaGLJU4Ku0ijblGxV1Xr+5kCdbjVvWtdsKOvhBMd7OoeXKNBFqNtnZpgrzZf/Cp980EM0cjbKwlVeIg2M8WSSM9qcSZS7uAb8lASzFLYlZUvasrZlvV76Q1S+sXrYI7riRqWhvi1rnGuUCEKqipSHLJmymvWaEZlFjPFe0oY7zVN+FcjYZJq4LpCU2IIxpuMjvgYJt09xyLJoUjGYm1k3FrpHTJecDRuaL9u0aTxPH+KqWrNAU4u+oO+/NN8jYcHZ6rh7HHGvZnT5CRnk3YOz9vTBmxwfq5Ddbx+kzWa2l15WLz2BFAPIgO0PAp8Xe0SVR2VCXYgHg9TZFHXpaj5r69PiOSXACAM0uqddMh8MwkzWLhjMurHzSJ2uoW6Cz5rL211hUBAMAZJnOgj4K12wMqpjXUEYJmcN2xuVOXf2oGLYlsV9k4J5zIucO2lgAAYNxkDvSCJGZdCSAp40mr4T1tXX4ag6r5qELHNQOWeBcLOQAA8kBfgT7qi6yaLmUe1fC6eix0PZinLl83wlOp+pa/3r+ab/vyrrrjWj18i1mGAIBc0FegF8TC0cTuAn1Hj4Wucz2q3p65Naiqb5VE8lbvdskJJClyOwK54fHlSYVqDZYNACAv9B3ohT/u39txJlejHgvJ3fSGrep9bYhtpPcqchl52BHIjnMn0zZ6zQMA8sRAgV5ohA1f69RioRF6g32k6o1r4k//qj6pDbFMDfad40u+SilluwUoAADkhoEDfWcdw0GWtvL0u8/cQ6dDv43Loo6W7m5vwkvUywMA8sjAgV4QdR6wvuzaJ5U4i6sbzsDta9SVtYeO0G/jspQgX7O+PJpBAQByyakCvZCYnE0I9l5VbziTV9+Pms8Q5NfgywMA8kpAQ+Av33/37XvnP5Z2CqXefdI24b2/+6gc/v0/3Duq/faos13+/eMPPv4re0Cp5/jiT87/45M//+E3Nd/jSeC2yVTHDYR3Xz+9d7f3WF+Qj240Zu5fDp7+528JAAByyqkVfYcoientrsgrhUbheW+ydVBV3wyarlFCrA2xdLJsBvp5QpBfe/PsP9D+FwCQa4YW6IXkYN8qvTwZ7Afx6pc+u1KOdcJsndTVhljq5HWgHkcrFvWAIA8AmCWGGuiFDMH+edSXpk3fqp7nnIuKnCyLXFzd/NpXJ48gDwCYNYbi0ffywx++q/o8e8s5Zi6/98HH9MP33z3px6tvtSGmrd4LGmNu/eX737wQP/5H5z+q2gf2VdDUxJNHkAcAzBKZ+9EPgqxfaXRwx2WftLG+en1NmvCHjcLveo+L2hjsP1g7vt7Fq79z+O21g/37Hy5d2rSPRSmPheoaAMDsMdJAL6SUNgqHrHnbsFlwrGJ1vLCJb1ERe+4te/3z9ol4JzvJDUNm8qJ/DQBgFhmJdXOSP//f/x7+5G9//kgrXbJ2zLLjkHM2wP8ziXfO9LPendr6+taWufvjD37+0O53qHX+GbfOdxK1Ndh/8G8nSzsBAGCWGLmiP8nS55sVK6/7b15maM/TTjjhFEm6mlvoKQ8AmHVGruhPIknaH33w0e+Z1IpbnXtwKP0UXgbWjz94er9KAAAw44xV0Xdo+fayslN/Kj0LWMwbAAC6mUig7/A3q1dvKkM3EhK1/VCzidvrkrglAAAAx4zVuulFeuRIotYo81P735VBriFevE3G/ns9rF//4//8N3rWAABADxNV9CeJyidlge8+1L2UTQZhcB218QAA4GdqAn2HqDJH87WUgA+bBgAAMjJ1gV6IkrWtfvNdC4uITaOIt1/v39shAAAAmfh/41wDg5SZYJwAAAAASUVORK5CYII="
            alt="icon"
            className="w-full h-full"
          />
        </a>
      </span>
    </div>
  );
};

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 sm:space-x-6">
      <a
        href="https://github.com/swappidex"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <img src={GithubIcon} alt="github" />
      </a>
      <a
        href="https://t.me/Swappi_DEX"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <img src={TelegramIcon} alt="telegram" />
      </a>
      <a
        href="https://twitter.com/SwappiDEX"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <img src={TwitterIcon} alt="twitter" />
      </a>
      <a
        href="https://www.reddit.com/r/Swappi/"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <img src={RedditIcon} alt="reddit" />
      </a>
      <a
        href="https://medium.com/@swappidex"
        target="_blank"
        className="w-[18px] h-[18px]"
        rel="noreferrer"
      >
        <img src={Redium} alt="redium" />
      </a>
    </div>
  );
};

const BlockNumber: React.FC = () => {
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
    <div className="sm:flex hidden flex-row items-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://evmtestnet.confluxscan.io/block/${data}`}
        className="group relative mr-0.5 text-[11px]  text-medigreenfont-medium"
      >
        <span className="opacity-50">{data}&ensp;</span>
        <div className="group-hover:flex hidden absolute z-10 bottom-full left-1/2 pb-1 flex-col items-center -translate-x-1/2">
          <div className="px-4 py-2 rounded-[8px] max-w-[256px] w-max text-base leading-6 font-normal text-[#e2e8f0] bg-medigreen">
            The most recent block number on this network. Prices update on every
            block.
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
  );
};

const Footer: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-end pointer-events-none">
      <div className="flex flex-col items-center w-full justify-between sm:mb-5 mb-6 pointer-events-auto">
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
        <div className="sm:hidden mt-3">{/* <Menu /> */}</div>
      </div>
    </div>
  );
};

export default Footer;
