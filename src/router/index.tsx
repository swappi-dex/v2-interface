import React, { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Spin from "@cfx-kit/ui-components/dist/Spin";
import TopLevelErrorBoundary from "@modules/TopLevelErrorBoundary";
import SwapPage from "@pages/Swap";
import LiquidityPage from "@pages/Liquidity";
import FarmingPage from "@pages/Farming";
import DualFarmingPage from "@pages/DualFarming";
import StakingPage from "@pages/Staking";
import LotteryPage from "@pages/Lottery";
import LaunchpadPage from "@pages/Launchpad";
import Navbar from "@modules/Navbar";
import Footer from "@modules/Footer";

const AppRouter: React.FC = () => {
  return (
    <TopLevelErrorBoundary>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route index path="swap" element={<SwapPage />} />
          <Route path="pool/v2" element={<LiquidityPage />} />
          <Route path="farming">
            <Route path="farming" element={<FarmingPage />} />
            <Route path="dual-farming" element={<DualFarmingPage />} />
          </Route>
          <Route path="staking" element={<StakingPage />} />
          <Route path="lottery" element={<LotteryPage />} />
          <Route path="launchpad" element={<LaunchpadPage />} />
          <Route
            path="/farming/*"
            element={<Navigate to="/farming/farming" replace />}
          />
          <Route
            path="/farming/"
            element={<Navigate to="/farming/farming" replace />}
          />
          <Route
            path="/dual-farming/*"
            element={<Navigate to="/farming/dual-farming" replace />}
          />
          <Route
            path="/dual-farming/"
            element={<Navigate to="/farming/dual-farming" replace />}
          />
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
