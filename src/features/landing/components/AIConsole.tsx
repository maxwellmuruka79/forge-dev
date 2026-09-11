import { motion } from "framer-motion";
import { Badge, Card } from "@/components/ui";
import { CheckCircle2, LoaderCircle } from "lucide-react";

const steps = [
  "Understanding requirements",
  "Designing architecture",
  "Creating database schema",
  "Generating API endpoints",
  "Preparing development roadmap",
];

export default function AIConsole() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Card className="w-full max-w-md border border-cyan-500/20">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            Forge AI
          </h3>

          <Badge>Working...</Badge>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.4,
              }}
              className="flex items-center gap-3"
            >
              {index < 3 ? (
                <CheckCircle2
                  className="text-emerald-400"
                  size={18}
                />
              ) : (
                <LoaderCircle
                  className="animate-spin text-cyan-400"
                  size={18}
                />
              )}

              <span className="text-slate-300">
                {step}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>Progress</span>
            <span>76%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "76%" }}
              transition={{
                duration: 2,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}