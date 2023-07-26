import React, { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Spin from "@cfx-kit/ui-components/dist/Spin";
import TopLevelErrorBoundary from "@modules/TopLevelErrorBoundary";
import SwapPage from "@pages/Swap";
import LiquidityPage from "@pages/Liquidity";
import FarmingPage from "@pages/Farming";
import StakingPage from "@pages/Staking";
import LotteryPage from "@pages/Lottery";
import LaunchpadPage from "@pages/Launchpad";
import Navbar from "@modules/Navbar";
import Footer from "@modules/Footer";

export const routerConfig = [
  {
    path: "/swap",
    name: "exchange",
    element: <SwapPage />,
  },
  {
    path: "/pool",
    element: <LiquidityPage />,
  },
  {
    path: "/farming",
    element: <FarmingPage />,
  },
  {
    path: "/staking",
    element: <StakingPage />,
  },
  {
    path: "/lottery",
    element: <LotteryPage />,
  },
  {
    path: "/launchpad",
    element: <LaunchpadPage />,
  },
];

const AppRouter: React.FC = () => {
  return (
    <TopLevelErrorBoundary>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route path="swap" element={<SwapPage />} />
          <Route path="pool" element={<LiquidityPage />} />
          <Route path="farming" element={<FarmingPage />} />
          <Route path="staking" element={<StakingPage />} />
          <Route path="lottery" element={<LotteryPage />} />
          <Route path="launchpad" element={<LaunchpadPage />} />
          <Route path="*" element={<Navigate to="/swap" replace />} />
          <Route path="/" element={<Navigate to="/swap" replace />} />
        </Route>
      </Routes>
    </TopLevelErrorBoundary>
  );
};

const PageLevelLoading: React.FC = () => (
  <Spin className="block mx-auto mt-180px text-(40px white-normal)" />
);

const RouteWrapper: React.FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLevelLoading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRouter;
