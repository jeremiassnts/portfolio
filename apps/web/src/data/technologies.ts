import type { Technology } from '@/types';

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'expert' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'expert' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'advanced' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'expert' },
  { name: 'tRPC', category: 'backend', proficiency: 'expert' },
  { name: 'GraphQL', category: 'backend', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'backend', proficiency: 'expert' },
  { name: 'Prisma', category: 'backend', proficiency: 'advanced' },
  
  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 'advanced' },
  { name: 'Redis', category: 'database', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'database', proficiency: 'intermediate' },
  
  // DevOps & Tools
  { name: 'Docker', category: 'devops', proficiency: 'advanced' },
  { name: 'AWS', category: 'devops', proficiency: 'intermediate' },
  { name: 'Vercel', category: 'devops', proficiency: 'expert' },
  { name: 'Git', category: 'tools', proficiency: 'expert' },
  { name: 'Turborepo', category: 'tools', proficiency: 'advanced' },
];
