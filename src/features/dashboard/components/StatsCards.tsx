import { Card } from "@/components/ui";
import {
  FolderKanban,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    label: "Projects",
    value: "12",
    icon: FolderKanban,
  },
  {
    label: "Generating",
    value: "3",
    icon: Clock3,
  },
  {
    label: "Completed",
    value: "9",
    icon: CheckCircle2,
  },
];

export default function StatsCards() {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {stat.label}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <Icon className="h-8 w-8 text-cyan-400" />
            </div>
          </Card>
        );
      })}
    </div>
  );
}