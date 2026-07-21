export default function Background() {
  return (
    <>
      {/* Main background */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Purple glow */}
      <div className="fixed top-[-250px] left-[-200px] -z-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[160px]" />

      {/* Cyan glow */}
      <div className="fixed bottom-[-250px] right-[-200px] -z-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}