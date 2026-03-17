"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Locale = "pt" | "en";

const localeLabels: Record<Locale, string> = {
  pt: "pt-br",
  en: "en",
};

export interface LangSwitcherProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  className?: string;
}

/**
 * Bordered pill showing current locale. Dropdown to switch.
 * JetBrains Mono 12px, text-secondary.
 */
export function LangSwitcher({
  locale,
  onLocaleChange,
  className,
}: LangSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const select = useCallback(
    (value: Locale) => {
      onLocaleChange(value);
      setOpen(false);
    },
    [onLocaleChange]
  );

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-mono text-[12px] text-foreground-secondary transition-colors hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        {localeLabels[locale]}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-20 mt-1 min-w-[theme(spacing.24)] rounded border border-border bg-surface-card py-1 shadow-lg"
        >
          {(Object.keys(localeLabels) as Locale[]).map((loc) => (
            <li key={loc} role="option" aria-selected={locale === loc}>
              <button
                type="button"
                onClick={() => select(loc)}
                className={cn(
                  "w-full px-3 py-2 text-left font-mono text-[12px] transition-colors",
                  locale === loc
                    ? "bg-surface-active text-accent-green"
                    : "text-foreground-secondary hover:bg-surface-active hover:text-foreground"
                )}
              >
                {localeLabels[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
