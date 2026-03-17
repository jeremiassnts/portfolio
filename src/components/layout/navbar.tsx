"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangSwitcher, type Locale } from "@/components/ui/lang-switcher";
import { cn } from "@/lib/utils";

export interface NavLabels {
  projects: string;
  about: string;
  technologies: string;
  contact: string;
}

const defaultNavLabels: NavLabels = {
  projects: "projects",
  about: "about",
  technologies: "technologies",
  contact: "contact",
};

const sectionIds = ["projects", "about", "technologies", "contact"] as const;

export interface NavbarProps {
  /** Translated nav link labels (for i18n). Defaults to English. */
  navLabels?: Partial<NavLabels>;
  /** Current locale for LangSwitcher. */
  locale?: Locale;
  /** Called when user switches locale (wire to next-intl when available). */
  onLocaleChange?: (locale: Locale) => void;
  className?: string;
}

/**
 * Navbar: 64px height, bottom border.
 * Left: Logo (> jeremias.dev) + nav links (scroll to section anchors).
 * Right: LangSwitcher + ThemeToggle.
 * Horizontal padding 40px. Nav links JetBrains Mono 400, 13px.
 */
export function Navbar({
  navLabels: navLabelsProp,
  locale = "pt",
  onLocaleChange,
  className,
}: NavbarProps) {
  const navLabels = { ...defaultNavLabels, ...navLabelsProp };

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-surface px-10",
        className
      )}
    >
      <nav className="flex items-center gap-8" aria-label="Main">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 font-mono text-foreground-emphasis no-underline transition-opacity hover:opacity-90"
          aria-label="Home"
        >
          <span className="text-[20px] font-bold text-accent-green">&gt;</span>
          <span className="text-[18px] font-medium">jeremias.dev</span>
        </Link>
        <ul className="flex list-none gap-6 p-0">
          {sectionIds.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className="font-mono text-[13px] font-normal text-foreground no-underline transition-colors hover:text-foreground-emphasis"
              >
                {navLabels[id]}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <LangSwitcher
          locale={locale}
          onLocaleChange={onLocaleChange ?? (() => {})}
        />
        <ThemeToggle />
      </div>
    </header>
  );
}

/** Client navbar with internal locale state until next-intl is wired. */
export function NavbarWithLocale(props: Omit<NavbarProps, "locale" | "onLocaleChange">) {
  const [locale, setLocale] = useState<Locale>("pt");
  return <Navbar {...props} locale={locale} onLocaleChange={setLocale} />;
}
