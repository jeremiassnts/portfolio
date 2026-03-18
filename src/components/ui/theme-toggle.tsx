"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeValue = "dark" | "light" | "system";

const options: { value: ThemeValue; label: string }[] = [
  { value: "dark", label: "dark" },
  { value: "light", label: "light" },
  { value: "system", label: "system" },
];

/**
 * Segmented control: dark / light / system.
 * Active: bg-active, accent-green text, border. Inactive: transparent, text-secondary, border.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const current = (theme ?? "dark") as ThemeValue;

  return (
    <div
      className="inline-flex rounded border border-border p-0.5"
      role="group"
      aria-label="Theme"
    >
      {options.map(({ value, label }) => {
        const isActive = current === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={cn(
              "rounded px-2.5 py-1 font-mono text-[12px] transition-colors",
              isActive
                ? "bg-surface-active text-accent-green border border-border"
                : "border border-transparent text-foreground-secondary hover:text-foreground"
            )}
            aria-pressed={isActive}
            aria-label={`Use ${label} theme`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
