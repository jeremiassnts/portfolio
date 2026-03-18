import Image from "next/image";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { profile } from "@/data/profile";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <div className="mt-8 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
          <div className="order-2 min-w-0 flex-1 lg:order-1">
            <p className="font-mono text-sm font-medium text-accent-green">
              {t("whoami")}
            </p>

            <h2 className="mt-3 font-mono text-[30px] font-bold leading-tight text-foreground-emphasis sm:mt-4 sm:text-[36px]">
              {profile.name}
            </h2>
            <p className="mt-2 font-mono text-[15px] text-foreground-secondary">
              {profile.role}
            </p>

            <p className="mt-6 max-w-[540px] font-body text-sm leading-[1.7] text-foreground-secondary">
              {t("description")}
            </p>

            <div className="mt-6 flex items-center gap-2 font-body text-sm text-foreground-secondary">
              <MapPin className="h-4 w-4 text-accent-green" />
              <span>{profile.location}</span>
            </div>

            <div className="mt-3 flex items-center gap-2 font-body text-sm text-accent-green">
              <span
                className="h-2.5 w-2.5 rounded-full bg-accent-green"
                aria-hidden
              />
              <span>{t("availableForWork")}</span>
            </div>
          </div>

          <div className="order-1 relative h-[280px] w-full max-w-[320px] shrink-0 border border-border sm:h-[360px] sm:max-w-[380px] lg:order-2 lg:h-[420px] lg:w-[380px] lg:max-w-none">
            <Image
              src={profile.aboutImage}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
