'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t('subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group rounded-sm cursor-pointer"
          >
            {t('cta.projects')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="group rounded-sm cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
}
