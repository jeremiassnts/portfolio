'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');
    router.push(newPathname as any);
  };

  return (
    <div className="flex gap-1">
      <Button
        variant={locale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button
        variant={locale === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLocale('pt')}
        aria-label="Mudar para Português"
      >
        PT
      </Button>
    </div>
  );
}
