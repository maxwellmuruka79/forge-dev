import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/ui";
import { Sparkles } from "lucide-react";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  function handleGenerate() {
    if (!prompt.trim()) return;

    // We'll improve this later to detect logged-in users.
    navigate("/login", {
      state: {
        prompt,
      },
    });
  }

  return (
    <div className="mt-12 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <label className="mb-4 block text-sm font-medium text-slate-300">
        What do you want to build?
      </label>

      <Input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. AI-powered inventory management system"
      />

      <div className="mt-5 flex justify-end">
        <Button glow onClick={handleGenerate}>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Project
        </Button>
      </div>
    </div>
  );
}