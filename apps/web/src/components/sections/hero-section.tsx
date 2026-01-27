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
    <section className="container mx-auto px-4 py-24 md:py-40 lg:py-48">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text animate-fade-in leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto animate-fade-in stagger-1 leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-2">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
          >
            {t('cta.projects')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="group rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
}
