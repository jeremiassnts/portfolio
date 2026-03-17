import { cn } from "@/lib/utils";

export type BadgeSize = "default" | "lg";

const sizeStyles: Record<BadgeSize, string> = {
  default: "px-2.5 py-1 text-[11px]",
  lg: "px-3 py-1.5 text-[11px]",
};

/** Badge text is always accent-green. The color prop is for tech category headers (icon + title), not badge text. */
export interface BadgeProps {
  children: React.ReactNode;
  size?: BadgeSize;
  className?: string;
}

export function Badge({ children, size = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border font-mono font-normal text-accent-green",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
