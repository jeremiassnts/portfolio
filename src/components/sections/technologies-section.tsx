import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { TechnologyCard } from "@/components/sections/technology-card";
import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  const t = useTranslations("technologies");

  return (
    <section id="technologies" className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {technologies.map((category) => (
            <TechnologyCard
              key={category.category}
              category={category}
              title={t(`categories.${category.category}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
