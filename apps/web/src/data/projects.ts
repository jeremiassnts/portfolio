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
      featured: false,
      year: 2025,
      githubUrl: 'https://github.com/jeremiassnts/tatame',
      liveUrl: null,
      status: 'in-progress',
      metrics: null,
    },
    {
      id: '2',
      slug: 'lofi-study-app',
      title: 'Lofi Study App',
      shortDescription:
        'A lofi platform for organizing studies and focus, with Pomodoro timer, task list, and lofi music player.',
      heroImage: {
        src: '/images/projects/lofi-study-app/app1.webp',
        alt: 'Lofi Study App',
        width: 1200,
        height: 630,
      },
      gallery: [
        {
          src: '/images/projects/lofi-study-app/app1.webp',
          alt: 'Lofi Study App - Pomodoro and focus',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/lofi-study-app/app2.webp',
          alt: 'Lofi Study App - Task manager',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/lofi-study-app/app3.webp',
          alt: 'Lofi Study App - Lofi player',
          width: 600,
          height: 315,
        },
      ],
      description:
        'A lofi platform built to help organize studies and focus. It includes a Pomodoro timer for structured work sessions, a task manager (todo list) to track tasks and groups, and an embedded lofi music player for ambient focus. Built with Next.js, TypeScript, React, React Player for YouTube streams, Tailwind CSS, and shadcn/ui. Deployed on Vercel.',
      techStack: [
        'Next.js',
        'TypeScript',
        'JavaScript',
        'React',
        'React Player',
        'Tailwind CSS',
        'shadcn/ui',
      ],
      category: 'web-app',
      featured: true,
      year: 2026,
      githubUrl: 'https://github.com/jeremiassnts/lofi-study-app',
      liveUrl: 'https://lofi-study-app.vercel.app/',
      status: 'completed',
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
      featured: false,
      year: 2025,
      githubUrl: 'https://github.com/jeremiassnts/tatame',
      liveUrl: null,
      status: 'in-progress',
      metrics: null,
    },
    {
      id: '2',
      slug: 'lofi-study-app',
      title: 'Lofi Study App',
      shortDescription:
        'Plataforma lofi para organizar estudos e foco, com Pomodoro, lista de tarefas e player de lofi.',
      heroImage: {
        src: '/images/projects/lofi-study-app/app1.webp',
        alt: 'Lofi Study App',
        width: 1200,
        height: 630,
      },
      gallery: [
        {
          src: '/images/projects/lofi-study-app/app1.webp',
          alt: 'Lofi Study App - Pomodoro e foco',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/lofi-study-app/app2.webp',
          alt: 'Lofi Study App - Gerenciador de tarefas',
          width: 600,
          height: 315,
        },
        {
          src: '/images/projects/lofi-study-app/app3.webp',
          alt: 'Lofi Study App - Player lofi',
          width: 600,
          height: 315,
        },
      ],
      description:
        'Plataforma lofi para organizar estudos e foco. Inclui timer Pomodoro para sessões de trabalho, gerenciador de tarefas (todo list) para tarefas e grupos, e player de lofi embutido. Feita com Next.js, TypeScript, React, React Player para streams do YouTube, Tailwind CSS e shadcn/ui. Deploy na Vercel.',
      techStack: [
        'Next.js',
        'TypeScript',
        'JavaScript',
        'React',
        'React Player',
        'Tailwind CSS',
        'shadcn/ui',
      ],
      category: 'web-app',
      featured: true,
      year: 2026,
      githubUrl: 'https://github.com/jeremiassnts/lofi-study-app',
      liveUrl: 'https://lofi-study-app.vercel.app/',
      status: 'completed',
      metrics: null,
    },
  ] as Project[],
};

// Helper function to get projects by locale
export const getProjects = (locale: 'en' | 'pt'): Project[] => {
  return projects[locale] || projects.en;
};
