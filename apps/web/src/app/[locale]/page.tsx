import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AboutSection } from '@/components/sections/about-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { ContactSection } from '@/components/sections/contact-section';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
