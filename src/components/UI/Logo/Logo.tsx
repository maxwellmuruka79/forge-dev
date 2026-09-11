export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 font-bold text-white shadow-lg shadow-cyan-500/20">
        F
      </div>

      <div>
        <p className="font-['Space_Grotesk'] text-lg font-bold tracking-wide text-white">
          Forge Dev
        </p>

        <p className="-mt-1 text-xs text-slate-400">
          AI Engineering Platform
        </p>
      </div>
    </div>
  );
}