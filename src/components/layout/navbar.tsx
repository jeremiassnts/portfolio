"use client";

import { useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangSwitcher } from "@/components/ui/lang-switcher";
import { cn } from "@/lib/utils";

const sectionIds = ["projects", "about", "technologies", "contact"] as const;

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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-surface px-10",
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
        <ul className="flex list-none gap-6 p-0">
          {sectionIds.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className="font-mono text-[13px] font-normal text-foreground no-underline transition-colors hover:text-foreground-emphasis"
              >
                {t(id)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <LangSwitcher locale={locale} onLocaleChange={handleLocaleChange} />
        <ThemeToggle />
      </div>
    </header>
  );
}
