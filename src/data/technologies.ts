export type AccentColor = "green" | "cyan" | "amber" | "purple";

export interface TechnologyCategory {
  category: "frontend" | "backend" | "database" | "devops";
  icon: "monitor" | "server" | "database" | "terminal";
  accentColor: AccentColor;
  items: string[];
}

export const technologies: TechnologyCategory[] = [
  {
    category: "frontend",
    icon: "monitor",
    accentColor: "green",
    items: ["react", "next.js", "typescript", "tailwind css", "html5", "css3"],
  },
  {
    category: "backend",
    icon: "server",
    accentColor: "cyan",
    items: ["node.js", "express", "nestjs"],
  },
  {
    category: "database",
    icon: "database",
    accentColor: "amber",
    items: ["postgresql", "mongodb", "redis", "prisma"],
  },
  {
    category: "devops",
    icon: "terminal",
    accentColor: "purple",
    items: ["docker", "git", "github actions", "vercel", "linux"],
  },
];
