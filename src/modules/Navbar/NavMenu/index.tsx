import React, { useCallback, useState, useEffect } from "react";
import { NavLink, useMatch } from "react-router-dom";
import cx from "clsx";
import routerConfig from "@router/routerConfig";
import Dropdown from "@components/Dropdown";

const FarmingMenu: React.FC<{
  farmingMenu: { name: string; path: string }[];
  hideDropdown: () => void;
}> = ({ farmingMenu, hideDropdown }) => {
  return (
    <div className="bg-white flex flex-col py-1">
      {farmingMenu.map((item, index) => (
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
  );
};

const NavMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const match = useMatch("/farming/*");

  const triggerDropdown = useCallback(() => setVisible((pre) => !pre), []);

  const hideDropdown = useCallback(() => setVisible(false), []);

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
    <div className="hidden space-x-8 md:flex lg:space-x-11 ml-3 mr-6 items-center">
      {routerConfig.map((item, index) => (
        <>
          {item.children && (
            <Dropdown
              visible={visible}
              onClickOutside={hideDropdown}
              offset={[20, 30]}
              Content={
                <FarmingMenu
                  farmingMenu={item.children}
                  hideDropdown={hideDropdown}
                />
              }
            >
              <div
                className={cx(
                  "capitalize font-medium dark:text-white no-underline cursor-pointer",
                  match ? "text-[#7fbf4e]" : "text-ink-green"
                )}
                onClick={triggerDropdown}
              >
                {item?.name}
              </div>
            </Dropdown>
          )}

          {!item.children && (
            <NavLink
              key={index}
              className={({ isActive }) =>
                cx(
                  "capitalize font-medium dark:text-white no-underline",
                  isActive ? "text-[#7fbf4e]" : "text-ink-green"
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

export default NavMenu;
