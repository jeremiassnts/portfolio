import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Jeremias Santos',
  description: 'Fullstack Developer building scalable products for international markets',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  ogImage: '/og/default-og.png',
  author: {
    name: 'Jeremias Santos',
    email: 'jeremiassnts3@gmail.com',
    github: 'https://github.com/jeremiassnts',
    linkedin: 'https://www.linkedin.com/in/jeremias-santos-b98674119',
  },
  locales: ['en', 'pt'],
  defaultLocale: 'en',
};
