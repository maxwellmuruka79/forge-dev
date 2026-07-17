import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",
    outline:
      "border border-slate-700 text-white hover:bg-slate-900",
  };

  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}