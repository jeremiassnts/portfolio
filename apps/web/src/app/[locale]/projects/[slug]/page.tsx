import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ProjectTechStack } from '@/components/project/project-tech-stack';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

// Generate static params for all projects (use English slugs as they're consistent)
export async function generateStaticParams() {
  const projects = getProjects('en');
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const projects = getProjects(locale as 'en' | 'pt');
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const t = await getTranslations({ locale });
  const heroImage = project.heroImage;

  return {
    title: `${project.title} | ${t('projects.title')}`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'article',
      images: heroImage
        ? [
            {
              url: heroImage.src,
              width: heroImage.width,
              height: heroImage.height,
              alt: heroImage.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: heroImage ? [heroImage.src] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;
  const projects = getProjects(locale as 'en' | 'pt');
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'projects' });
  const a11y = await getTranslations({ locale, namespace: 'accessibility' });
  const heroImage = project.heroImage;

  return (
    <article className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6 md:py-8 animate-fade-in">
        <Link href={`/${locale}#projects`}>
          <Button variant="ghost" size="sm" className="gap-2 hover:gap-3 transition-all rounded-lg">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('backToProjects')}
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-12 md:mb-16 bg-muted overflow-hidden animate-fade-in">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="container mx-auto px-4 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-12 animate-fade-in stagger-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                {project.title}
              </h1>
              <span className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/15 text-primary border border-primary/30 shadow-sm w-fit">
                {project.year}
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in stagger-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                aria-label={`${project.title} - ${t('liveDemo')} (${a11y('openInNewTab')})`}
              >
                <Button
                  size="lg"
                  className="gap-2 group w-full sm:w-auto rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink
                    className="h-5 w-5 group-hover:rotate-12 transition-transform"
                    aria-hidden="true"
                  />
                  {t('liveDemo')}
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                aria-label={`${project.title} - ${t('sourceCode')} (${a11y('openInNewTab')})`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 group w-full sm:w-auto rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Github
                    className="h-5 w-5 group-hover:rotate-12 transition-transform"
                    aria-hidden="true"
                  />
                  {t('sourceCode')}
                </Button>
              </a>
            )}
          </div>

          {/* Description */}
          <section className="bg-card p-6 md:p-8 rounded-xl shadow-md border mb-16 animate-fade-in stagger-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{t('description')}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <section className="mb-16 animate-fade-in stagger-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('gallery')}</h2>
              <div className="flex flex-row flex-wrap gap-4">
                {project.gallery.map((img) => (
                  <div
                    key={img.src}
                    style={{
                      width: '45%',
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      placeholder="blur"
                      className="object-cover border-2 border-secondary rounded-sm"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 p-6 md:p-8 bg-muted/50 rounded-xl shadow-md animate-fade-in stagger-4">
              {project.metrics.users && (
                <div className="text-center sm:text-left">
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {t('metrics.users')}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {project.metrics.users}
                  </p>
                </div>
              )}
              {project.metrics.performance && (
                <div className="text-center sm:text-left">
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {t('metrics.performance')}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {project.metrics.performance}
                  </p>
                </div>
              )}
              {project.metrics.impact && (
                <div className="text-center sm:text-left">
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {t('metrics.impact')}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {project.metrics.impact}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <section className="mb-16 animate-fade-in stagger-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('techStack')}</h2>
            <ProjectTechStack technologies={project.techStack} />
          </section>

          {/* Back to Projects */}
          <div className="pt-8 border-t animate-fade-in stagger-4">
            <Link href={`/${locale}#projects`}>
              <Button
                variant="outline"
                className="gap-2 hover:gap-3 transition-all rounded-lg hover:shadow-md"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t('backToAllProjects')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
