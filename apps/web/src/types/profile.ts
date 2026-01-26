export interface Profile {
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  availability: 'available' | 'not-available' | 'limited';
  social: SocialLinks;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}
