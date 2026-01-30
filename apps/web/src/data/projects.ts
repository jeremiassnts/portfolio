import type { Project } from '@/types';

// Projects data with locale-specific content
export const projects = {
  en: [
    {
      id: '1',
      slug: 'tatame',
      title: 'Tatame',
      shortDescription: 'Tatame is a platform for creating and managing your jiu-jitsu academy.',
      heroImage: {
        src: '/images/projects/tatame/hero.webp',
        alt: 'Tatame app',
        width: 1200,
        height: 630,
      },
      gallery: [
        {
          src: '/images/projects/tatame/app2.webp',
          alt: 'Tatame app',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/tatame/app1.webp',
          alt: 'Tatame app',
          width: 600,
          height: 315,
        },
      ],
      description:
        'Many jiu-jitsu academies struggle with managing their students, classes, and instructors. Built a mobile app for managing your jiu-jitsu academy, including classes scheduling, student management and financial management. Platform still in testing phase, but already being used by some students and instructors.',
      techStack: [
        'React Native',
        'TypeScript',
        'Expo',
        'Supabase',
        'Nativewind',
        'gluestack-ui',
        'zod',
        'clerk',
      ],
      category: 'mobile-app',
      year: 2025,
      githubUrl: 'https://github.com/jeremiassnts/tatame',
      liveUrl: null,
      status: 'in-progress',
      metrics: null,
    },
  ] as Project[],
  pt: [
    {
      id: '1',
      slug: 'tatame',
      title: 'Tatame',
      shortDescription: 'Tatame é uma plataforma para criar e gerenciar sua academia de jiu-jitsu.',
      heroImage: {
        src: '/images/projects/tatame/hero.webp',
        alt: 'Aplicativo Tatame',
        width: 1200,
        height: 630,
      },
      gallery: [
        {
          src: '/images/projects/tatame/app2.webp',
          alt: 'Aplicativo Tatame',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/tatame/app1.webp',
          alt: 'Aplicativo Tatame',
          width: 600,
          height: 315,
        },
      ],
      description:
        'Muitas academias de jiu-jitsu enfrentam dificuldades para gerenciar alunos, aulas e instrutores. App mobile construído para gerenciar academias de jiu-jitsu, incluindo agendamento de aulas, gestão de alunos e gestão financeira. A plataforma ainda está em fase de testes, mas já está sendo utilizada por alguns alunos e instrutores.',
      techStack: [
        'React Native',
        'TypeScript',
        'Expo',
        'Supabase',
        'Nativewind',
        'gluestack-ui',
        'zod',
        'clerk',
      ],
      category: 'mobile-app',
      year: 2025,
      githubUrl: 'https://github.com/jeremiassnts/tatame',
      liveUrl: null,
      status: 'in-progress',
      metrics: null,
    },
  ] as Project[],
};

// Helper function to get projects by locale
export const getProjects = (locale: 'en' | 'pt'): Project[] => {
  return projects[locale] || projects.en;
};
