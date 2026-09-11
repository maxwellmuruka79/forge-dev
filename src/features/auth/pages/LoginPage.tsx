import { useLocation } from "react-router-dom";

export default function LoginPage() {
  const location = useLocation();
  const prompt = (location.state as { prompt?: string } | null)?.prompt ?? "";

  return <div>{prompt || "Login"}</div>;
}