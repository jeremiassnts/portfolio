export interface ProjectItem {
  slug: "task_flow" | "api_guard" | "deploy_board";
  images: string[];
  techStack: string[];
  repoUrl: string;
  liveUrl: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "task_flow",
    images: [
      "/images/projects/task-flow-1.svg",
      "/images/projects/task-flow-2.svg",
    ],
    techStack: ["next.js", "typescript", "tailwind css", "postgresql"],
    repoUrl: "https://github.com/jeremiassantos/task-flow",
    liveUrl: "https://task-flow.example.com",
  },
  {
    slug: "api_guard",
    images: [
      "/images/projects/api-guard-1.svg",
      "/images/projects/api-guard-2.svg",
    ],
    techStack: ["node.js", "nestjs", "redis", "docker"],
    repoUrl: "https://github.com/jeremiassantos/api-guard",
    liveUrl: "https://api-guard.example.com",
  },
  {
    slug: "deploy_board",
    images: [
      "/images/projects/deploy-board-1.svg",
      "/images/projects/deploy-board-2.svg",
    ],
    techStack: ["react", "express", "mongodb", "github actions"],
    repoUrl: "https://github.com/jeremiassantos/deploy-board",
    liveUrl: "https://deploy-board.example.com",
  },
];
