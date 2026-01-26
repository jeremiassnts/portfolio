import type { Project } from '@/types';

// Projects data with locale-specific content
export const projects = {
  en: [
  {
    id: '1',
    slug: 'real-time-collaboration-platform',
    title: 'Real-Time Collaboration Platform',
    shortDescription:
      'A WebSocket-based collaborative workspace enabling teams to work synchronously on documents, tasks, and planning boards.',
    problem:
      'Remote teams struggled with asynchronous workflows, leading to delays, misalignment, and reduced productivity across time zones.',
    solution:
      'Built a real-time collaboration platform with live cursors, operational transformation for conflict-free editing, presence indicators, and integrated video calls. Architected with WebSocket infrastructure and optimistic UI updates for instant feedback.',
    outcome:
      '15+ teams adopted the platform, reducing meeting time by 40% and improving project delivery speed by 25%.',
    techStack: [
      'Next.js',
      'TypeScript',
      'WebSocket',
      'Redis',
      'PostgreSQL',
      'Tailwind CSS',
      'tRPC',
      'Vercel',
    ],
    category: 'web-app',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/real-time-collaboration-platform/hero.webp',
        alt: 'Real-time collaboration platform dashboard',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/collab-platform',
    liveUrl: 'https://collab-demo.example.com',
    status: 'completed',
    metrics: {
      users: '500+ active users',
      performance: '< 100ms message latency',
      impact: '40% reduction in meeting time',
    },
  },
  {
    id: '2',
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription:
      'Data visualization platform providing real-time metrics and insights for SaaS businesses.',
    problem:
      'SaaS companies lacked unified visibility into key metrics like MRR, churn, and customer lifetime value, relying on fragmented spreadsheets.',
    solution:
      'Developed a comprehensive analytics dashboard integrating with Stripe, Google Analytics, and custom data sources. Implemented real-time metric calculations, cohort analysis, and predictive forecasting.',
    outcome:
      'Deployed to 30+ SaaS companies, helping them identify 20% average revenue leakage and improve retention by 15%.',
    techStack: ['React', 'Node.js', 'GraphQL', 'TimescaleDB', 'Chart.js', 'Docker', 'AWS'],
    category: 'web-app',
    featured: true,
    year: 2023,
    images: [
      {
        src: '/images/projects/saas-analytics-dashboard/hero.webp',
        alt: 'SaaS analytics dashboard overview',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: null,
    liveUrl: 'https://analytics-demo.example.com',
    status: 'maintained',
    metrics: {
      users: '30+ companies',
      performance: 'Real-time data processing',
      impact: '20% average revenue leakage identified',
    },
  },
  {
    id: '3',
    slug: 'open-source-form-builder',
    title: 'Open Source Form Builder',
    shortDescription:
      'Type-safe, headless form library with built-in validation, accessibility, and React Server Components support.',
    problem:
      'Existing form libraries lacked first-class TypeScript support and struggled with modern React patterns like Server Actions.',
    solution:
      'Created a zero-runtime form library with compile-time type generation, progressive enhancement support, and composable validation. Prioritized accessibility (WCAG 2.1 AA) and developer experience.',
    outcome:
      '2k+ GitHub stars, 50k+ weekly downloads, adopted by companies like Vercel and Supabase.',
    techStack: ['TypeScript', 'React', 'Zod', 'Vitest', 'Changesets', 'Turborepo'],
    category: 'open-source',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/open-source-form-builder/hero.webp',
        alt: 'Form builder code example',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/form-builder',
    liveUrl: 'https://form-builder-docs.example.com',
    status: 'maintained',
    metrics: {
      users: '50k+ weekly npm downloads',
      impact: '2k+ GitHub stars',
    },
  },
  {
    id: '4',
    slug: 'e-commerce-headless-cms',
    title: 'E-Commerce Headless CMS',
    shortDescription:
      'Customizable headless CMS tailored for e-commerce, with product management, inventory sync, and multi-channel publishing.',
    problem:
      'E-commerce businesses needed flexibility to sell across multiple channels (web, mobile, marketplaces) without being locked into monolithic platforms.',
    solution:
      'Built a headless CMS with GraphQL API, real-time inventory synchronization, product variant management, and webhook integrations for platforms like Shopify and Amazon.',
    outcome:
      'Enabled 10+ brands to unify product data and reduce time-to-market for new channels by 60%.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'GraphQL', 'Redis', 'Stripe', 'Vercel'],
    category: 'web-app',
    featured: false,
    year: 2023,
    images: [
      {
        src: '/images/projects/e-commerce-headless-cms/hero.webp',
        alt: 'E-commerce CMS product dashboard',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: null,
    liveUrl: 'https://cms-demo.example.com',
    status: 'completed',
  },
  {
    id: '5',
    slug: 'developer-portfolio-template',
    title: 'Developer Portfolio Template',
    shortDescription:
      'Modern, SEO-optimized portfolio template built with Next.js, featuring i18n, dark mode, and CMS integration.',
    problem:
      'Developers needed a professional portfolio solution that was both easy to customize and optimized for performance and SEO.',
    solution:
      'Created an open-source template with Next.js App Router, multi-language support, dark mode, and one-click CMS integration. Focused on developer experience and best practices.',
    outcome: '500+ forks, featured in multiple dev communities, used by developers worldwide.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'next-intl', 'Vercel'],
    category: 'open-source',
    featured: false,
    year: 2024,
    images: [
      {
        src: '/images/projects/developer-portfolio-template/hero.webp',
        alt: 'Portfolio template preview',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/portfolio-template',
    liveUrl: 'https://portfolio-template-demo.vercel.app',
    status: 'maintained',
  },
] as Project[],
  pt: [
  {
    id: '1',
    slug: 'real-time-collaboration-platform',
    title: 'Plataforma de Colaboração em Tempo Real',
    shortDescription:
      'Um espaço de trabalho colaborativo baseado em WebSocket que permite que equipes trabalhem sincronizadamente em documentos, tarefas e quadros de planejamento.',
    problem:
      'Equipes remotas enfrentavam dificuldades com fluxos de trabalho assíncronos, levando a atrasos, desalinhamento e produtividade reduzida em diferentes fusos horários.',
    solution:
      'Construí uma plataforma de colaboração em tempo real com cursores ao vivo, transformação operacional para edição sem conflitos, indicadores de presença e videochamadas integradas. Arquitetado com infraestrutura WebSocket e atualizações otimistas de UI para feedback instantâneo.',
    outcome:
      'Mais de 15 equipes adotaram a plataforma, reduzindo o tempo de reuniões em 40% e melhorando a velocidade de entrega de projetos em 25%.',
    techStack: [
      'Next.js',
      'TypeScript',
      'WebSocket',
      'Redis',
      'PostgreSQL',
      'Tailwind CSS',
      'tRPC',
      'Vercel',
    ],
    category: 'web-app',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/real-time-collaboration-platform/hero.webp',
        alt: 'Dashboard da plataforma de colaboração em tempo real',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/collab-platform',
    liveUrl: 'https://collab-demo.example.com',
    status: 'completed',
    metrics: {
      users: '500+ usuários ativos',
      performance: '< 100ms de latência de mensagens',
      impact: '40% de redução no tempo de reuniões',
    },
  },
  {
    id: '2',
    slug: 'saas-analytics-dashboard',
    title: 'Dashboard de Analytics SaaS',
    shortDescription:
      'Plataforma de visualização de dados fornecendo métricas e insights em tempo real para negócios SaaS.',
    problem:
      'Empresas SaaS não tinham visibilidade unificada de métricas-chave como MRR, churn e valor de vida do cliente, dependendo de planilhas fragmentadas.',
    solution:
      'Desenvolvi um dashboard de analytics abrangente integrando com Stripe, Google Analytics e fontes de dados personalizadas. Implementei cálculos de métricas em tempo real, análise de coorte e previsões preditivas.',
    outcome:
      'Implantado em mais de 30 empresas SaaS, ajudando-as a identificar 20% de vazamento médio de receita e melhorar a retenção em 15%.',
    techStack: ['React', 'Node.js', 'GraphQL', 'TimescaleDB', 'Chart.js', 'Docker', 'AWS'],
    category: 'web-app',
    featured: true,
    year: 2023,
    images: [
      {
        src: '/images/projects/saas-analytics-dashboard/hero.webp',
        alt: 'Visão geral do dashboard de analytics SaaS',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: null,
    liveUrl: 'https://analytics-demo.example.com',
    status: 'maintained',
    metrics: {
      users: '30+ empresas',
      performance: 'Processamento de dados em tempo real',
      impact: '20% de vazamento médio de receita identificado',
    },
  },
  {
    id: '3',
    slug: 'open-source-form-builder',
    title: 'Construtor de Formulários Open Source',
    shortDescription:
      'Biblioteca de formulários headless com segurança de tipos, validação integrada, acessibilidade e suporte a React Server Components.',
    problem:
      'Bibliotecas de formulários existentes não tinham suporte de primeira classe ao TypeScript e enfrentavam dificuldades com padrões modernos do React como Server Actions.',
    solution:
      'Criei uma biblioteca de formulários sem runtime com geração de tipos em tempo de compilação, suporte a progressive enhancement e validação componível. Priorizei acessibilidade (WCAG 2.1 AA) e experiência do desenvolvedor.',
    outcome:
      'Mais de 2mil estrelas no GitHub, 50mil+ downloads semanais, adotado por empresas como Vercel e Supabase.',
    techStack: ['TypeScript', 'React', 'Zod', 'Vitest', 'Changesets', 'Turborepo'],
    category: 'open-source',
    featured: true,
    year: 2024,
    images: [
      {
        src: '/images/projects/open-source-form-builder/hero.webp',
        alt: 'Exemplo de código do construtor de formulários',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/form-builder',
    liveUrl: 'https://form-builder-docs.example.com',
    status: 'maintained',
    metrics: {
      users: '50mil+ downloads semanais no npm',
      impact: '2mil+ estrelas no GitHub',
    },
  },
  {
    id: '4',
    slug: 'e-commerce-headless-cms',
    title: 'CMS Headless para E-Commerce',
    shortDescription:
      'CMS headless personalizável para e-commerce, com gerenciamento de produtos, sincronização de estoque e publicação multicanal.',
    problem:
      'Negócios de e-commerce precisavam de flexibilidade para vender em múltiplos canais (web, mobile, marketplaces) sem ficar presos a plataformas monolíticas.',
    solution:
      'Construí um CMS headless com API GraphQL, sincronização de estoque em tempo real, gerenciamento de variantes de produtos e integrações via webhook para plataformas como Shopify e Amazon.',
    outcome:
      'Permitiu que mais de 10 marcas unificassem dados de produtos e reduzissem o time-to-market para novos canais em 60%.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'GraphQL', 'Redis', 'Stripe', 'Vercel'],
    category: 'web-app',
    featured: false,
    year: 2023,
    images: [
      {
        src: '/images/projects/e-commerce-headless-cms/hero.webp',
        alt: 'Dashboard de produtos do CMS e-commerce',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: null,
    liveUrl: 'https://cms-demo.example.com',
    status: 'completed',
  },
  {
    id: '5',
    slug: 'developer-portfolio-template',
    title: 'Template de Portfólio para Desenvolvedores',
    shortDescription:
      'Template de portfólio moderno e otimizado para SEO, construído com Next.js, com i18n, modo escuro e integração com CMS.',
    problem:
      'Desenvolvedores precisavam de uma solução de portfólio profissional que fosse fácil de customizar e otimizada para performance e SEO.',
    solution:
      'Criei um template open-source com Next.js App Router, suporte multi-idioma, modo escuro e integração com CMS em um clique. Foquei na experiência do desenvolvedor e melhores práticas.',
    outcome: 'Mais de 500 forks, destaque em múltiplas comunidades dev, usado por desenvolvedores no mundo todo.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'next-intl', 'Vercel'],
    category: 'open-source',
    featured: false,
    year: 2024,
    images: [
      {
        src: '/images/projects/developer-portfolio-template/hero.webp',
        alt: 'Preview do template de portfólio',
        width: 1200,
        height: 630,
        type: 'hero',
      },
    ],
    githubUrl: 'https://github.com/yourusername/portfolio-template',
    liveUrl: 'https://portfolio-template-demo.vercel.app',
    status: 'maintained',
  },
] as Project[],
};

// Helper function to get projects by locale
export const getProjects = (locale: 'en' | 'pt'): Project[] => {
  return projects[locale] || projects.en;
};
