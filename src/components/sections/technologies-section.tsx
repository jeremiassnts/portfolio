import { Database, Monitor, Server, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import {
  technologies,
  type AccentColor,
  type TechnologyCategory,
} from "@/data/technologies";

const colorClassByAccent: Record<AccentColor, string> = {
  green: "text-accent-green",
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  purple: "text-accent-purple",
};

function CategoryIcon({ icon }: { icon: TechnologyCategory["icon"] }) {
  const className = "h-4 w-4";
  switch (icon) {
    case "monitor":
      return <Monitor className={className} />;
    case "server":
      return <Server className={className} />;
    case "database":
      return <Database className={className} />;
    case "terminal":
      return <Terminal className={className} />;
    default:
      return null;
  }
}

export function TechnologiesSection() {
  const t = useTranslations("technologies");

  return (
    <section id="technologies" className="px-20 py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <div className="mt-10 grid grid-cols-2 gap-6">
          {technologies.map((category) => (
            <Card key={category.category} className="p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold">
                <span className={colorClassByAccent[category.accentColor]}>
                  <CategoryIcon icon={category.icon} />
                </span>
                <span className="text-foreground-emphasis">
                  {t(`categories.${category.category}`)}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    size="lg"
                    className={colorClassByAccent[category.accentColor]}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
