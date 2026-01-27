export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  outcome: string | null;
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  year: number;
  images: ProjectImage[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: ProjectStatus;
  metrics: ProjectMetrics | null;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'hero' | 'screenshot' | 'detail';
}

export interface ProjectMetrics {
  users?: string;
  performance?: string;
  impact?: string;
}

export type ProjectCategory = 'web-app' | 'mobile-app' | 'api' | 'tool' | 'library' | 'open-source';

export type ProjectStatus = 'completed' | 'in-progress' | 'maintained';
