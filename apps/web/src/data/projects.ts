import type { Project } from '@/types';

// Projects data with locale-specific content
export const projects = {
  en: [
    {
      id: '1',
      slug: 'tatame',
      title: 'Tatame',
      shortDescription: 'Tatame is a platform for creating and managing your jiu-jitsu academy.',
      problem:
        'Many jiu-jitsu academies struggle with managing their students, classes, and instructors.',
      solution:
        'Built a mobile app for managing your jiu-jitsu academy, including classes scheduling, student management and financial management.',
      outcome:
        'Platform still in testing phase, but already being used by some students and instructors.',
      techStack: [
        'React Native',
        'TypeScript',
        'Expo',
        'Supabase',
        'Tailwind CSS',
        'gluestack-ui',
        'zod',
        'clerk',
      ],
      category: 'mobile-app',
      year: 2025,
      images: [
        {
          src: '/images/projects/tatame/hero.webp',
          alt: 'Tatame app',
          width: 1200,
          height: 630,
          type: 'hero',
        },
      ],
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
      problem:
        'Muitas academias de jiu-jitsu enfrentam dificuldades para gerenciar alunos, aulas e instrutores.',
      solution:
        'App mobile construído para gerenciar academias de jiu-jitsu, incluindo agendamento de aulas, gestão de alunos e gestão financeira.',
      outcome:
        'A plataforma ainda está em fase de testes, mas já está sendo utilizada por alguns alunos e instrutores.',
      techStack: [
        'React Native',
        'TypeScript',
        'Expo',
        'Supabase',
        'Tailwind CSS',
        'gluestack-ui',
        'zod',
        'clerk',
      ],
      category: 'mobile-app',
      year: 2025,
      images: [
        {
          src: '/images/projects/tatame/hero.webp',
          alt: 'Aplicativo Tatame',
          width: 1200,
          height: 630,
          type: 'hero',
        },
      ],
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
