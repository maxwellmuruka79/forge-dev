import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}