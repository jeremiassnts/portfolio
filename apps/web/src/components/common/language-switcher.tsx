'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/routing';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'pt') => {
    // The router from next-intl automatically handles locale switching
    router.replace(pathname, { locale: newLocale });
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
