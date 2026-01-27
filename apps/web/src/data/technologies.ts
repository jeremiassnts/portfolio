import type { Technology } from '@/types';

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'expert' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'expert' },
  { name: 'JavaScript', category: 'frontend', proficiency: 'expert' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'advanced' },
  { name: 'AngularJS', category: 'frontend', proficiency: 'advanced' },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 'expert' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'expert' },
  { name: 'NestJS', category: 'backend', proficiency: 'expert' },
  { name: 'Express', category: 'backend', proficiency: 'expert' },
  { name: 'C#', category: 'backend', proficiency: 'expert' },
  { name: '.NET', category: 'backend', proficiency: 'expert' },
  { name: 'REST APIs', category: 'backend', proficiency: 'expert' },
  { name: 'Prisma', category: 'backend', proficiency: 'advanced' },
  { name: 'Drizzle', category: 'backend', proficiency: 'advanced' },

  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 'expert' },
  { name: 'SQL Server', category: 'database', proficiency: 'expert' },
  { name: 'Elasticsearch', category: 'database', proficiency: 'advanced' },
  { name: 'Supabase', category: 'database', proficiency: 'expert' },
  { name: 'MongoDB', category: 'database', proficiency: 'expert' },

  // DevOps & Tools
  { name: 'Docker', category: 'devops', proficiency: 'advanced' },
  { name: 'RabbitMQ', category: 'devops', proficiency: 'advanced' },
  { name: 'AWS', category: 'devops', proficiency: 'advanced' },
  { name: 'Jenkins', category: 'devops', proficiency: 'intermediate' },
  { name: 'Kibana', category: 'devops', proficiency: 'advanced' },
  { name: 'Git', category: 'tools', proficiency: 'expert' },
];
