'use client';

import { useTranslations } from 'next-intl';
import { GithubIcon, LinkedinIcon, TwitterIcon, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('footer');
  const a11y = useTranslations('accessibility');

  return (
    <footer role="contentinfo" className="border-t mt-24 md:mt-32 bg-muted/20">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              © {new Date().getFullYear()} {siteConfig.name}. {t('rights')}.
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" aria-hidden="true" /> using Next.js & TypeScript
            </p>
          </div>
          
          <nav aria-label={a11y('socialLinks')} className="flex gap-5">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub (${a11y('openInNewTab')})`}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <GithubIcon className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn (${a11y('openInNewTab')})`}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <LinkedinIcon className="w-6 h-6" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
