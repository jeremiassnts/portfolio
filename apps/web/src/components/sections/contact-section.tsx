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
    <section id="contact" className="bg-muted/30 py-24 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in stagger-1">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-5 w-5 text-primary" />
                  {t('email')}
                </CardTitle>
                <CardDescription className="text-base">
                  {profile.availability === 'available' && t('availability')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${profile.email}`} className="block">
                  <Button className="w-full rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    <span className="truncate">{profile.email}</span>
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in stagger-2">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  {t('social')}
                </CardTitle>
                <CardDescription className="text-base">Connect with me on social platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-fade-in"
                        style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-lg cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-secondary"
                          size="lg"
                        >
                          <Icon className="mr-3 h-5 w-5" />
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
      </div>
    </section>
  );
}
