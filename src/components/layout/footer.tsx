import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border px-20 py-6">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between">
        <p className="font-body text-xs text-foreground-secondary">
          {t("copyright")}
        </p>

        <div className="flex items-center gap-2 font-body text-xs text-foreground-secondary">
          <span>{t("builtWith")}</span>
          <Badge>next.js</Badge>
          <span>&amp;</span>
          <Badge className="text-accent-cyan">typescript</Badge>
        </div>
      </div>
    </footer>
  );
}
