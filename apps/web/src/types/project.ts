export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  /** Single hero image displayed at the top of the project page. */
  heroImage: ProjectImage | null;
  /** Additional project images shown in the gallery section. */
  gallery: ProjectImage[];
  /** Full project description (replaces problem/solution/outcome). */
  description: string;
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  year: number;
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
}

export interface ProjectMetrics {
  users?: string;
  performance?: string;
  impact?: string;
}

export type ProjectCategory = 'web-app' | 'mobile-app' | 'api' | 'tool' | 'library' | 'open-source';

export type ProjectStatus = 'completed' | 'in-progress' | 'maintained';
