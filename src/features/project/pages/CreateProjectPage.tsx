import { useState } from "react";
import { createProject } from "../services/projectService";

export default function CreateProjectPage() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateProject() {
    try {
      setLoading(true);

      const project = await createProject({
        name: idea.slice(0, 50),
        description: idea,
      });

      console.log("Created project:", project);

      alert("Project created successfully!");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.message ??
        JSON.stringify(error, null, 2)
      );
    } finally {
      setLoading(false);
    }
  }


  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold">
          What are you building today?
        </h1>

        <p className="mt-4 text-slate-400">
          Describe your software idea and Forge Dev will create a complete project blueprint.
        </p>


        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Example: I want to build an Airbnb for pets..."
          className="mt-8 w-full h-48 rounded-xl bg-slate-900 border border-slate-700 p-5 outline-none focus:border-blue-500 resize-none"
        />


        <button
          onClick={handleCreateProject}
          disabled={!idea.trim() || loading}
          className="mt-6 rounded-xl bg-blue-600 px-8 py-4 font-semibold disabled:opacity-50 hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Continue"}
        </button>

      </div>
    </main>
  );
}