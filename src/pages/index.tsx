import { createHashRouter, RouterProvider } from "react-router-dom";
import Swap from "./swap";
import Liquidity from "./liquidity";
import Lottery from "./lottery";
import Staking from "./staking";
import Farming from "./farming";
import Launchpad from "./launchpad";

const router = createHashRouter([
  {
    path: "/",
    element: <Swap />,
  },
  {
    path: "/liquidity",
    element: <Liquidity />,
  },
  {
    path: "/lottery",
    element: <Lottery />,
  },
  {
    path: "/staking",
    element: <Staking />,
  },
  {
    path: "/farming",
    element: <Farming />,
  },
  {
    path: "/launchpad",
    element: <Launchpad />,
  },
  {
    path: "/swap",
    element: <Swap />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
