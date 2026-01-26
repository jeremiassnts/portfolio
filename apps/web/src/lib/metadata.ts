import type { Metadata } from 'next';
import { siteConfig } from './constants';

export function createMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  images,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  images?: { url: string; width: number; height: number; alt: string }[];
}): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  const defaultImages = [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: images || defaultImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images?.[0]?.url || siteConfig.ogImage,
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${siteConfig.url}/en${path}`,
        'pt': `${siteConfig.url}/pt${path}`,
      },
    },
  };
}
