import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AboutSection } from '@/components/sections/about-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
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
