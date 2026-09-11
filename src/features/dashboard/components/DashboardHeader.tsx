import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Continue building your software projects with Forge AI.
        </p>
      </div>

      <Button glow onClick={() => navigate("/projects/new")}>
        <Plus className="mr-2 h-4 w-4" />
        New Project
      </Button>
    </div>
  );
}