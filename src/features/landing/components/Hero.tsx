import { motion } from "framer-motion";
import { Button, Badge, } from "@/components/ui";
import AIConsole from "./AIConsole";
import PromptBox from "./PromptBox";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-20 lg:flex-row">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <Badge>
          ✨ AI Engineering Platform
        </Badge>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
  Build Software

  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
    that thinks ahead.
  </span>
</h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
          Forge Dev acts like an AI engineering team — helping you
plan, architect, and organize software projects before
a single line of code is written.
        </p>

        <PromptBox />

        <div className="mt-10 flex flex-wrap gap-4">
          <Button glow>
            Get Started Free
          </Button>

          <Button className="border border-white/10 bg-white/5 hover:bg-white/10">
            View Demo
          </Button>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
>
  <AIConsole />
</motion.div>
    </section>
  );
}