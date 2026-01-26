import type { Profile } from '@/types';

// Profile data with locale-specific content
export const profile = {
  en: {
    name: 'Jeremias Santos',
    headline: 'Fullstack Developer building scalable products for international markets',
    bio: `Senior Software Engineer with 9+ years of experience building scalable, production-grade systems. Recently worked at a US-based music technology company, developing and maintaining a music distribution and royalty management platform for independent artists, delivering full-stack solutions with Node.js, React, Next.js, cloud services, AI-powered tools, and external platform integrations. Background also includes data-intensive systems in healthcare, IoT, and financial reconciliation at scale.`,
    location: 'Brazil (Remote)',
    email: 'jeremiassnts3@gmail.com',
    availability: 'available',
    social: {
      github: 'https://github.com/jeremiassnts',
      linkedin: 'https://linkedin.com/in/jeremias-santos-b98674119',
    },
  } as Profile,
  pt: {
    name: 'Jeremias Santos',
    headline: 'Desenvolvedor Fullstack construindo produtos escaláveis para mercados internacionais',
    bio: `Engenheiro de Software Sênior com mais de 9 anos de experiência construindo sistemas escaláveis e prontos para produção. Recentemente trabalhei em uma empresa de tecnologia musical dos EUA, desenvolvendo e mantendo uma plataforma de distribuição de música e gerenciamento de royalties para artistas independentes, entregando soluções full-stack com Node.js, React, Next.js, serviços em nuvem, ferramentas com IA e integrações com plataformas externas. Experiência também inclui sistemas de dados intensivos em saúde, IoT e reconciliação financeira em larga escala.`,
    location: 'Brasil (Remoto)',
    email: 'jeremiassnts3@gmail.com',
    availability: 'available',
    social: {
      github: 'https://github.com/jeremiassnts',
      linkedin: 'https://linkedin.com/in/jeremias-santos-b98674119',
    },
  } as Profile,
};

// Helper function to get profile by locale
export const getProfile = (locale: 'en' | 'pt'): Profile => {
  return profile[locale] || profile.en;
};
