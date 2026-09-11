import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}