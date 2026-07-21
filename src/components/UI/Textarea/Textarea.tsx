import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
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
          "focus:border-cyan-400",
          "focus:ring-2 focus:ring-cyan-400/30",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;