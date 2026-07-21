import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "rounded-full",
        "border border-cyan-500/30",
        "bg-cyan-500/10",
        "px-3 py-1",
        "text-xs font-medium",
        "text-cyan-300",
        className
      )}
    >
      {children}
    </span>
  );
}