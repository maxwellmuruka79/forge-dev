import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: Props) {
  return (
    <main
      className={cn(
        "mx-auto",
        "max-w-7xl",
        "px-6",
        "py-10",
        className
      )}
    >
      {children}
    </main>
  );
}