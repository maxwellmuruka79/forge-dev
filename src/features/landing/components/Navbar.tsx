import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import Logo from "@/components/ui/Logo/Logo";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it Works
          </a>

          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button className="bg-transparent border border-white/10 hover:bg-white/10">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button glow>
              Start Building
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}