import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Your Name',
  description: 'Fullstack Developer building scalable products for international markets',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  ogImage: '/og/default-og.png',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
  locales: ['en', 'pt'],
  defaultLocale: 'en',
};
