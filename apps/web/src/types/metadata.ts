export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface StructuredData {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}
