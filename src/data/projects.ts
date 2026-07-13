export interface ProjectItem {
  slug: "tatame" | "lofi_focus" | "devroast";
  images: string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "tatame",
    images: ["/images/projects/tatame/image1.webp"],
    techStack: [
      "react native",
      "expo",
      "express",
      "postgresql",
      "node.js",
      "typescript",
      "clerk",
    ],
    liveUrl: "https://apptatame.com.br",
  },
  {
    slug: "lofi_focus",
    images: [
      "/images/projects/lofi/image1.webp",
      "/images/projects/lofi/image2.webp",
    ],
    techStack: ["next.js", "react", "typescript", "tailwind css", "turborepo"],
    repoUrl: "https://github.com/jeremiassnts/lofi-study-app",
    liveUrl: "https://lofi-study-app.vercel.app/",
  },
  {
    slug: "devroast",
    images: [
      "/images/projects/devroast/image1.webp",
      "/images/projects/devroast/image2.webp",
      "/images/projects/devroast/image3.webp",
    ],
    techStack: [
      "next.js",
      "typescript",
      "tailwind css",
      "openai api",
      "postgresql",
      "trpc",
    ],
    repoUrl: "https://github.com/jeremiassnts/devroast",
  },
];
