'use client';

import { useLocale, useTranslations } from 'next-intl';
import { getProfile } from '@/data/profile';
import { siteConfig } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const locale = useLocale() as 'en' | 'pt';
  const profile = getProfile(locale);

  const socialLinks = [
    {
      name: 'GitHub',
      url: profile.social.github,
      icon: Github,
      available: !!profile.social.github,
    },
    {
      name: 'LinkedIn',
      url: profile.social.linkedin,
      icon: Linkedin,
      available: !!profile.social.linkedin,
    },
    {
      name: 'Twitter',
      url: profile.social.twitter,
      icon: Twitter,
      available: !!profile.social.twitter,
    },
  ].filter((link) => link.available);

  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('title')}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {t('email')}
              </CardTitle>
              <CardDescription>
                {profile.availability === 'available' && t('availability')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${profile.email}`} className="block">
                <Button className="w-full rounded-sm cursor-pointer" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  {profile.email}
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                {t('social')}
              </CardTitle>
              <CardDescription>Connect with me on social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full justify-start rounded-sm cursor-pointer"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {link.name}
                      </Button>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
