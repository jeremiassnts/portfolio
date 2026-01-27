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
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-3 justify-start">
          <Image
            src={'/images/profile/profile_picture.webp'}
            alt={siteConfig.name}
            width={36}
            height={36}
            className="rounded-full ring-2 ring-primary/10 hover:ring-primary/30 transition-all duration-300"
          />
          <Link
            href={'/' as any}
            className="font-bold text-xl md:text-2xl hover:text-primary transition-colors duration-300"
          >
            {siteConfig.name}
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
          >
            {t('projects')}
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
          >
            {t('about')}
          </a>
          <a
            href="#technologies"
            className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
          >
            {t('technologies')}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
          >
            {t('contact')}
          </a>

          <div className="flex items-center gap-2 ml-6 border-l pl-6">
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
