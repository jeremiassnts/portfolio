import { Database, Monitor, Server, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
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

interface TechnologyCardProps {
  category: TechnologyCategory;
  title: string;
}

export function TechnologyCard({ category, title }: TechnologyCardProps) {
  return (
    <Card className="p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold">
        <span className={colorClassByAccent[category.accentColor]}>
          <CategoryIcon icon={category.icon} />
        </span>
        <span className="text-foreground-emphasis">{title}</span>
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
  );
}
