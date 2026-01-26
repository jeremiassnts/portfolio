'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProjectNotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-muted-foreground mb-8">
          {t('description')}
        </p>
        <a href="/#projects">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backToProjects')}
          </Button>
        </a>
      </div>
    </div>
  );
}
