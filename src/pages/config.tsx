import Swap from "./swap";
import Liquidity from "./liquidity";
import Lottery from "./lottery";
import Staking from "./staking";
import Farming from "./farming";
import Launchpad from "./launchpad";

export const config = [
  {
    path: "/",
    element: <Swap />,
  },
  {
    path: "/swap",
    name: "exchange",
    element: <Swap />,
  },
  {
    path: "/liquidity",
    element: <Liquidity />,
  },
  {
    path: "/farming",
    element: <Farming />,
  },
  {
    path: "/staking",
    element: <Staking />,
  },
  {
    path: "/lottery",
    element: <Lottery />,
  },
  {
    path: "/launchpad",
    element: <Launchpad />,
  },
];
