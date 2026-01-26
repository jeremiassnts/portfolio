'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageSwitcher } from '@/components/common/language-switcher';
import { siteConfig } from '@/lib/constants';
import Image from 'next/image';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex flex-row items-center gap-2 justify-start">
          <Image
            src={'/images/profile/profile_picture.webp'}
            alt={siteConfig.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <Link
            href={'/' as any}
            className="font-bold text-xl hover:text-primary transition-colors"
          >
            {siteConfig.name}
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t('projects')}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t('about')}
          </a>
          <a
            href="#technologies"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('technologies')}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('contact')}
          </a>

          <div className="flex items-center gap-2 ml-4 border-l pl-4">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
