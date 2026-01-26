import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const heroImage = project.images.find((img) => img.type === 'hero');

  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Image */}
      {heroImage && (
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary whitespace-nowrap">
              Featured
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link href={`/${locale}/projects/${project.slug}`} className="flex-1">
          <Button className="w-full">{t('viewProject')}</Button>
        </Link>
        
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        )}
        
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo"
          >
            <Button variant="outline" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
