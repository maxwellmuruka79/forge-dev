import { motion } from "framer-motion";
import { Card } from "@/components/ui";

const problems = [
  {
    title: "Planning takes too long",
    description:
      "Ideas often stay in notebooks because planning a project from scratch is overwhelming.",
  },
  {
    title: "Architecture is difficult",
    description:
      "Choosing the right technologies and system design can slow down even experienced teams.",
  },
  {
    title: "Documentation gets ignored",
    description:
      "Requirements, roadmaps, and test plans are frequently left until it's too late.",
  },
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Building software is hard.
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          Forge Dev removes the friction between an idea and a production-ready plan.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((problem) => (
          <Card key={problem.title} className="transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-white">
              {problem.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {problem.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}