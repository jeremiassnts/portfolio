import { useTranslations } from "next-intl";

const sectionIds = ["projects", "about", "technologies", "contact"] as const;

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <section className="flex min-h-[60vh] items-center justify-center">
        <p className="text-foreground-secondary">{t("hero.comingSoon")}</p>
      </section>
      {sectionIds.map((id) => (
        <section
          key={id}
          id={id}
          className="flex min-h-[40vh] items-center justify-center border-t border-border"
        >
          <p className="font-mono text-sm text-foreground-tertiary">{t(`nav.${id}`)}</p>
        </section>
      ))}
    </main>
  );
}
