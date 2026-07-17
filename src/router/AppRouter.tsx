import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../features/auth/pages/LoginPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}