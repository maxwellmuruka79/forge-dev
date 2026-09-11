import { Card, Badge, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  progress: number;
  status: string;
};

export default function ProjectCard({
  title,
  progress,
  status,
}: Props) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <Badge>{status}</Badge>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm text-slate-400">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Button className="mt-6 w-full">
        Continue

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
}