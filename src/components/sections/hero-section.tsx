import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
        <div className="order-2 max-w-[620px] lg:order-1">
          <p className="mb-4 font-mono text-xs font-medium text-accent-green sm:mb-6 sm:text-sm">
            {t("tag")}
          </p>

          <h1 className="font-mono text-[34px] font-bold leading-[1.15] text-foreground-emphasis sm:text-[42px] lg:text-[56px]">
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-accent-green">{t("titleLine2")}</span>
          </h1>

          <p className="mt-5 max-w-[560px] font-body text-sm leading-[1.7] text-foreground-secondary sm:mt-8">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button className="w-full sm:w-auto">{t("ctaPrimary")}</Button>
            <Button variant="ghost" className="w-full sm:w-auto">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>

        <div className="order-1 relative h-[280px] w-full max-w-[320px] shrink-0 border border-border sm:h-[360px] sm:max-w-[360px] lg:order-2 lg:h-[480px] lg:w-[480px] lg:max-w-none">
          <Image
            src={profile.heroImage}
            alt={profile.name}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
