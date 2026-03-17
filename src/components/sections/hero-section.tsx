import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-20">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-[60px]">
        <div className="max-w-[620px]">
          <p className="mb-6 font-mono text-sm font-medium text-accent-green">
            {t("tag")}
          </p>

          <h1 className="font-mono text-[56px] font-bold leading-[1.1] text-foreground-emphasis">
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-accent-green">{t("titleLine2")}</span>
          </h1>

          <p className="mt-8 max-w-[560px] font-body text-sm leading-[1.7] text-foreground-secondary">
            {t("description")}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button>{t("ctaPrimary")}</Button>
            <Button variant="ghost">{t("ctaSecondary")}</Button>
          </div>
        </div>

        <div className="relative h-[480px] w-[480px] shrink-0 border border-border">
          <Image
            src={profile.heroImage}
            alt={profile.name}
            fill
            sizes="480px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
