import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-3 text-center">
        <p className="font-body text-xs leading-relaxed text-foreground-secondary">
          {t("copyright")}
        </p>

        <div className="flex flex-col items-center gap-2 font-body text-xs text-foreground-secondary">
          <span>{t("builtWith")}</span>
          <div className="flex items-center gap-2">
            <Badge>next.js</Badge>
            <span>&amp;</span>
            <Badge className="text-accent-cyan">typescript</Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
