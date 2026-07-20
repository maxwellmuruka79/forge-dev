import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../features/auth/pages/LoginPage";
import CreateProjectPage from "@/features/project/pages/CreateProjectPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/projects/new" element={<CreateProjectPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}