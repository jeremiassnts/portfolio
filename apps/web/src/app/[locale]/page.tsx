import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/hero-section';
import { SectionLoader } from '@/components/loader';

// Lazy load below-the-fold sections for better initial load performance
const ProjectsSection = dynamic(() => import('@/components/sections/projects-section').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <SectionLoader />,
});

const AboutSection = dynamic(() => import('@/components/sections/about-section').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <SectionLoader />,
});

const TechnologiesSection = dynamic(() => import('@/components/sections/technologies-section').then(mod => ({ default: mod.TechnologiesSection })), {
  loading: () => <SectionLoader />,
});

const ContactSection = dynamic(() => import('@/components/sections/contact-section').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <SectionLoader />,
});

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col">
      {/* Hero section loads immediately (above the fold) */}
      <HeroSection />
      
      {/* Below-the-fold sections load dynamically for better performance */}
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TechnologiesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
