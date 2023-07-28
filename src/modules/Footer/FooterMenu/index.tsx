import cx from "clsx";
import { NavLink } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useMatch } from "react-router-dom";
import Dropdown from "@components/Dropdown";

const menus = [
  {
    name: "Exchange",
    path: "/swap",
  },
  {
    name: "Farming",
    children: [
      {
        name: "Farming",
        path: "/farming/farming",
      },
      {
        name: "Dual Farming",
        path: "/farming/dual-farming",
      },
    ],
  },
  {
    name: "Launchpad",
    path: "/launchpad",
  },
  {
    name: "More",
    children: [
      {
        name: "Staking",
        path: "/staking",
      },
      {
        name: "Lottery",
        path: "/lottery",
      },
      {
        name: "Liquidity",
        path: "/pool/v2",
      },
    ],
  },
];

const DropDownMenu: React.FC<{
  menuList: { name: string; path: string }[];
  menuName: string;
  match: boolean;
}> = ({ menuList, menuName, match }) => {
  const [visible, setVisible] = useState(false);

  const triggerDropdown = useCallback(() => {
    setVisible((pre) => !pre);
  }, []);

  const hideDropdown = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    function onKeyDown(evt: KeyboardEvent) {
      if (evt.keyCode === 27) {
        hideDropdown();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [hideDropdown]);

  return (
    <Dropdown
      visible={visible}
      onClickOutside={hideDropdown}
      offset={[20, 30]}
      Content={
        <div className="bg-white flex flex-col py-1">
          {menuList.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                cx(
                  "capitalize font-medium dark:text-white no-underline px-4 py-2 hover:bg-gray-100",
                  isActive ? "text-[#7fbf4e]" : "text-ink-green"
                )
              }
              to={item.path}
              onClick={hideDropdown}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      }
    >
      <div
        className={cx(
          "py-1.5 px-2.5 flex items-center justify-center rounded-xl font-normal no-underline",
          match && "text-bluegreen bg-[#f0fcf8]"
        )}
        onClick={() => triggerDropdown()}
      >
        {menuName}
      </div>
    </Dropdown>
  );
};

const FooterMenu: React.FC = () => {
  const matchFarming = useMatch("/farming/*");
  const matchStaking = useMatch("/staking");
  const matchLottery = useMatch("/lottery");
  const matchLiquidity = useMatch("/pool/v2");

  return (
    <div className="grid grid-flow-col gap-2 h-12 p-1 rounded-xl bg-white">
      {menus.map((item, index) => (
        <>
          {item.children && (
            <DropDownMenu
              menuList={item.children}
              menuName={item.name}
              match={
                item.name === "Farming"
                  ? !!matchFarming
                  : !!(matchStaking || matchLottery || matchLiquidity)
              }
            />
          )}

          {!item.children && (
            <NavLink
              key={index}
              className={({ isActive }) =>
                cx(
                  isActive ? "text-bluegreen bg-[#f0fcf8]" : "text-ink-green",
                  "py-1.5 px-2.5 flex items-center justify-center rounded-xl font-normal no-underline"
                )
              }
              to={item.path}
            >
              {item?.name || item.path?.replaceAll?.("/", "")}
            </NavLink>
          )}
        </>
      ))}
    </div>
  );
};

export default FooterMenu;
