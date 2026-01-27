'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ProjectCard } from '@/components/project/project-card';
import { getProjects } from '@/data/projects';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'en' | 'pt';
  const projects = getProjects(locale);

  return (
    <section id="projects" className="container mx-auto px-4 py-24 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
