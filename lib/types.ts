// Core type definitions for CMS-ready architecture

export interface NavLink {
  name: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  alignment?: 'left' | 'right' | 'center';
}

export interface ImageGridItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface RestaurantItem {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  image: string;
  features: string[];
}

export interface ClubFeature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  interest?: string;
}

export interface CTASection {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

// Animation configuration types
export interface AnimationConfig {
  initial?: object;
  animate?: object;
  transition?: object;
  viewport?: object;
}

// Page metadata types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}
