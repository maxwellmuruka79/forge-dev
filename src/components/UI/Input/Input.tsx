import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-2xl",
          "border border-white/10",
          "bg-white/5",
          "backdrop-blur-xl",
          "px-4 py-3",
          "text-white",
          "placeholder:text-slate-400",
          "outline-none",
          "transition-all duration-300",
          "focus:border-indigo-500",
          "focus:ring-2 focus:ring-indigo-500/40",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;