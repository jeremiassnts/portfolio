import { useTranslations } from 'next-intl';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
