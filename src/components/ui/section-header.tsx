import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Section title, e.g. "projects", "about me" */
  title: string;
  className?: string;
}

/**
 * Reusable pattern: // title ————————
 * // in accent-green, title in text-emphasis, expanding border line.
 */
export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      <span className="shrink-0 font-mono text-[14px] font-bold text-accent-green">
        {"//"}
      </span>
      <span className="shrink-0 font-mono text-[28px] font-bold text-foreground-emphasis">
        {title}
      </span>
      <span
        className="min-w-0 flex-1 border-b border-border"
        aria-hidden
      />
    </header>
  );
}
