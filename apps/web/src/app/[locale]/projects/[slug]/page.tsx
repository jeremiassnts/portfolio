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
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const projects = getProjects(locale as 'en' | 'pt');
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const t = await getTranslations({ locale });
  const heroImage = project.images.find((img) => img.type === 'hero');

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
  const heroImage = project.images.find((img) => img.type === 'hero');

  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 py-8">
        <Link href={`/${locale}#projects`}>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backToProjects')}
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div className="relative w-full h-[400px] mb-12 bg-muted">
          <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" priority />
        </div>
      )}

      {/* Project Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {project.year}
              </span>
            </div>
            <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {t('liveDemo')}
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-4 w-4" />
                  {t('sourceCode')}
                </Button>
              </a>
            )}
          </div>

          {/* Problem, Solution, Outcome */}
          <div className="space-y-8 mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">{t('theProblem')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{t('theSolution')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            {project.outcome && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{t('theOutcome')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.outcome}</p>
              </section>
            )}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-muted/50 rounded-lg">
              {project.metrics.users && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('metrics.users')}</p>
                  <p className="text-xl font-semibold">{project.metrics.users}</p>
                </div>
              )}
              {project.metrics.performance && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('metrics.performance')}</p>
                  <p className="text-xl font-semibold">{project.metrics.performance}</p>
                </div>
              )}
              {project.metrics.impact && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('metrics.impact')}</p>
                  <p className="text-xl font-semibold">{project.metrics.impact}</p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t('techStack')}</h2>
            <ProjectTechStack technologies={project.techStack} />
          </section>

          {/* Back to Projects */}
          <div className="pt-8 border-t">
            <Link href={`/${locale}#projects`}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('backToAllProjects')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
