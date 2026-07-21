import { Routes, Route } from "react-router-dom";

import LandingPage from "@/features/landing/pages/LandingPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import CreateProjectPage from "@/features/project/pages/CreateProjectPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects/new" element={<CreateProjectPage />} />
    </Routes>
  );
}