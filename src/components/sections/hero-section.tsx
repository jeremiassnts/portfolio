import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-[760px] text-center">
        <p className="mb-4 font-mono text-xs font-medium text-accent-green sm:mb-6 sm:text-sm">
          {t("tag")}
        </p>

        <h1 className="font-mono text-[34px] font-bold leading-[1.15] text-foreground-emphasis sm:text-[42px] lg:text-[56px]">
          <span className="block">{t("titleLine1")}</span>
          <span className="block text-accent-green">{t("titleLine2")}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[560px] font-body text-sm leading-[1.7] text-foreground-secondary sm:mt-8 text-left">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button href="#projects" className="w-full sm:w-auto">
            {t("ctaPrimary")}
          </Button>
          <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
            {t("ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}
