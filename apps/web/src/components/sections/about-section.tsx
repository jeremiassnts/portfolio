'use client';

import { useTranslations } from 'next-intl';
import { profile } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('title')}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <Card className="rounded-sm">
          <CardContent className="pt-6">
            <div className="flex flex-row items-center gap-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{profile.name}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{profile.headline}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  {profile.availability === 'available' && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="font-medium">Available for work</span>
                    </div>
                  )}
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">{profile.bio}</p>
                </div>
              </div>
              <Image
                src={'/images/profile/profile_picture.webp'}
                alt={profile.name}
                width={250}
                height={250}
                className="rounded-sm"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
