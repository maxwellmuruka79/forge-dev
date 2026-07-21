import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <LoaderCircle
      className="animate-spin text-cyan-400"
      size={22}
    />
  );
}