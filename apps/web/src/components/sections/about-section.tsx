'use client';

import { useLocale, useTranslations } from 'next-intl';
import { getProfile } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const t = useTranslations('about');
  const tAvailability = useTranslations('availability');
  const locale = useLocale() as 'en' | 'pt';
  const profile = getProfile(locale);

  return (
    <section id="about" className="bg-muted/30 py-24 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in stagger-1 overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
                {/* Image - Mobile/Tablet: Top, Desktop: Right */}
                <div className="flex-shrink-0 order-first lg:order-last">
                  <Image
                    src={'/images/profile/profile_picture.webp'}
                    alt={profile.name}
                    width={280}
                    height={280}
                    className="rounded-xl shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6 flex-1 text-center lg:text-left">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">{profile.name}</h3>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6">
                      {profile.headline}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm md:text-base text-muted-foreground justify-center lg:justify-start">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <a
                        href={`mailto:${profile.email}`}
                        className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        {profile.email}
                      </a>
                    </div>
                    {profile.availability === 'available' && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium justify-center lg:justify-start">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 animate-pulse" />
                        <span>{tAvailability('available')}</span>
                      </div>
                    )}
                  </div>

                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-base md:text-lg">
                      {profile.bio}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
