export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
  locales: string[];
  defaultLocale: string;
}
