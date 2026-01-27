import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');
  const a11y = useTranslations('accessibility');
  const locale = useLocale();
  const heroImage = project.images.find((img) => img.type === 'hero');

  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-xl border-2 hover:border-primary/20">
      {/* Image */}
      {heroImage && (
        <div className="relative w-full h-52 bg-muted overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
      )}

      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-lg hover:bg-secondary transition-colors border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-2">
        <Link href={`/${locale}/projects/${project.slug}`} className="flex-1">
          <Button className="w-full cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300 group/btn">
            {t('viewProject')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} - GitHub (${a11y('openInNewTab')})`}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-lg cursor-pointer hover:bg-secondary transition-all duration-300"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} - ${t('liveDemo')} (${a11y('openInNewTab')})`}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-lg cursor-pointer hover:bg-secondary transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
