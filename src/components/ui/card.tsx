import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded border border-border bg-surface-card p-0",
        className
      )}
    >
      {children}
    </div>
  );
}
