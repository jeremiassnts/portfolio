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
    items: [
      "react",
      "next.js",
      "react native",
      "expo",
      "tailwind css",
      "vue.js",
      "html5",
      "css3",
    ],
  },
  {
    category: "backend",
    icon: "server",
    accentColor: "cyan",
    items: [
      "javascript",
      "typescript",
      "node.js",
      "express",
      "nestjs",
      "c# (.net)",
      "prisma",
      "drizzle",
      "supabase",
      "rabbitmq",
    ],
  },
  {
    category: "database",
    icon: "database",
    accentColor: "amber",
    items: ["postgresql", "sql server", "mongodb", "elasticsearch"],
  },
  {
    category: "devops",
    icon: "terminal",
    accentColor: "purple",
    items: [
      "aws",
      "azure",
      "docker",
      "git",
      "github actions",
      "jenkins",
      "coolify",
    ],
  },
];
