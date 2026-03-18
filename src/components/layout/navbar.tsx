"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangSwitcher } from "@/components/ui/lang-switcher";
import { cn } from "@/lib/utils";

const sectionIds = ["projects", "about", "technologies", "contact"] as const;
const localeLabels: Record<AppLocale, string> = {
  pt: "português",
  en: "english",
};

/**
 * Navbar: 64px height, bottom border.
 * Left: Logo (> jeremias.dev) + nav links (scroll to section anchors).
 * Right: LangSwitcher + ThemeToggle.
 * Horizontal padding 40px. Nav links JetBrains Mono 400, 13px.
 */
export function Navbar({ className }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const activeTheme = useMemo(() => {
    if (theme === "light" || theme === "dark") {
      return theme;
    }

    return resolvedTheme === "light" ? "light" : "dark";
  }, [resolvedTheme, theme]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleLocaleChange = useCallback(
    (nextLocale: AppLocale) => {
      if (!routing.locales.includes(nextLocale)) {
        return;
      }

      router.replace(pathname, { locale: nextLocale });
    },
    [pathname, router]
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectSectionFromMenu = useCallback(
    (id: string) => {
      scrollToSection(id);
      setMobileMenuOpen(false);
    },
    [scrollToSection]
  );

  const selectLocaleFromMenu = useCallback(
    (nextLocale: AppLocale) => {
      handleLocaleChange(nextLocale);
      setMobileMenuOpen(false);
    },
    [handleLocaleChange]
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6 md:px-10",
        className
      )}
    >
      <nav className="flex items-center gap-8" aria-label="Main">
        <Link
          href={{ pathname: "/" }}
          className="flex items-baseline gap-1.5 font-mono text-foreground-emphasis no-underline transition-opacity hover:opacity-90"
          aria-label="Home"
        >
          <span className="text-[20px] font-bold text-accent-green">&gt;</span>
          <span className="text-[18px] font-medium">jeremias.dev</span>
        </Link>
        <ul className="hidden list-none gap-6 p-0 md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className="font-mono text-[13px] font-normal text-foreground no-underline transition-colors hover:text-accent-green"
              >
                {t(id)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <LangSwitcher locale={locale} onLocaleChange={handleLocaleChange} />
        <ThemeToggle />
      </div>

      <div className="relative md:hidden" ref={mobileMenuRef}>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground-secondary transition-colors hover:text-foreground"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navbar-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        {mobileMenuOpen && (
          <div
            id="mobile-navbar-menu"
            className="absolute right-0 top-full z-50 mt-2 w-[min(90vw,20rem)] rounded-lg border border-border bg-surface-card p-3 shadow-lg"
          >
            <div className="space-y-1">
              {sectionIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectSectionFromMenu(id)}
                  className="w-full rounded-md px-3 py-2 text-left font-mono text-[13px] text-foreground-secondary transition-colors hover:bg-surface-active hover:text-foreground"
                >
                  {t(id)}
                </button>
              ))}
            </div>

            <div className="my-3 h-px bg-border" />

            <div className="flex items-center gap-2">
              {(Object.keys(localeLabels) as AppLocale[]).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => selectLocaleFromMenu(loc)}
                  className={cn(
                    "rounded-md border px-3 py-1.5 font-mono text-[12px] transition-colors",
                    locale === loc
                      ? "border-border bg-surface-active text-accent-green"
                      : "border-border text-foreground-secondary hover:text-foreground"
                  )}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-[12px] transition-colors",
                  activeTheme === "light"
                    ? "border-border bg-surface-active text-accent-green"
                    : "border-border text-foreground-secondary hover:text-foreground"
                )}
                aria-pressed={activeTheme === "light"}
                aria-label="Use light theme"
              >
                <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-[12px] transition-colors",
                  activeTheme === "dark"
                    ? "border-border bg-surface-active text-accent-green"
                    : "border-border text-foreground-secondary hover:text-foreground"
                )}
                aria-pressed={activeTheme === "dark"}
                aria-label="Use dark theme"
              >
                <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                dark
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
