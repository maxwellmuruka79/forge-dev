import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"button"> & {
  glow?: boolean;
};

export default function Button({
  className,
  glow = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-2xl px-6 py-3 font-semibold transition-all duration-300",
        "bg-indigo-600 hover:bg-indigo-500",
        "border border-white/10",
        glow && "shadow-[0_0_30px_rgba(99,102,241,.45)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}