/**
 * CMS-Ready Content Structure
 * 
 * This file contains all content in a structured format that can be easily
 * replaced with a headless CMS (Sanity, Strapi, Contentful, etc.)
 * 
 * To integrate with a CMS:
 * 1. Replace these exports with API calls to your CMS
 * 2. Keep the same TypeScript interfaces
 * 3. Map CMS responses to these data structures
 */

import type {
  NavLink,
  HeroContent,
  SectionContent,
  ImageGridItem,
  RestaurantItem,
  ClubFeature,
  CTASection,
} from './types';

// Navigation
export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Legacy', href: '/legacy' },
  { name: 'Restaurants', href: '/restaurants' },
  { name: 'Country Club', href: '/country-club' },
  { name: 'Contact', href: '/contact' },
];

// Home Page Content
export const homeHero: HeroContent = {
  title: 'Where Ocean Meets Elegance',
  subtitle: 'Discover a world of timeless luxury on the Portuguese Riviera',
  backgroundImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop',
  ctaText: 'Explore Our Legacy',
  ctaLink: '/legacy',
};

export const homeAbout: SectionContent = {
  id: 'about',
  title: 'A Legacy of Excellence',
  subtitle: 'Since 1930',
  description: 'Nestled along the stunning coastline of Estoril, our estate represents nearly a century of refined living. We have curated an environment where architectural magnificence converges with the natural beauty of the Atlantic, creating an unparalleled sanctuary for those who appreciate the finer things in life.',
  image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop',
  alignment: 'left',
};

export const homeFeatures: SectionContent[] = [
  {
    id: 'dining',
    title: 'Culinary Mastery',
    description: 'Experience world-renowned gastronomy where Michelin-starred chefs transform the freshest Atlantic ingredients into edible masterpieces. Our restaurants embody the perfect marriage of Portuguese tradition and contemporary innovation.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop',
    alignment: 'right',
  },
  {
    id: 'club',
    title: 'The Country Club',
    description: 'Join an exclusive community where leisure and sophistication intertwine. Our country club offers championship golf courses, pristine tennis courts, and wellness facilities designed for the discerning member.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop',
    alignment: 'left',
  },
];

export const homeGallery: ImageGridItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    alt: 'Luxury coastal architecture',
    title: 'Architectural Excellence',
    aspectRatio: 'landscape',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1287&auto=format&fit=crop',
    alt: 'Interior design detail',
    title: 'Refined Interiors',
    aspectRatio: 'portrait',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1287&auto=format&fit=crop',
    alt: 'Ocean view terrace',
    title: 'Oceanfront Living',
    aspectRatio: 'square',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
    alt: 'Luxury villa exterior',
    title: 'Private Estates',
    aspectRatio: 'landscape',
  },
];

export const homeCTA: CTASection = {
  title: 'Begin Your Journey',
  description: 'Discover how Estoril Riviera can elevate your lifestyle. Our concierge team is ready to guide you through the possibilities.',
  ctaText: 'Get in Touch',
  ctaLink: '/contact',
  backgroundImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop',
};

// Legacy Page Content
export const legacyHero: HeroContent = {
  title: 'A Century of Distinction',
  subtitle: 'The story of timeless elegance along the Portuguese coast',
  backgroundImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2940&auto=format&fit=crop',
};

export const legacySections: SectionContent[] = [
  {
    id: 'origins',
    title: 'The Beginning',
    subtitle: '1930 - 1950',
    description: 'Our story begins in the golden age of European coastal development. Visionary architects and artists were drawn to this pristine stretch of Portuguese coastline, recognizing its potential as a haven for refined living. The founding families established not just buildings, but a philosophy of elegant simplicity and respect for natural beauty.',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2940&auto=format&fit=crop',
    alignment: 'left',
  },
  {
    id: 'evolution',
    title: 'Evolution & Growth',
    subtitle: '1950 - 1990',
    description: 'Through decades of careful stewardship, Estoril Riviera evolved from a collection of private villas into an integrated community. We welcomed international luminaries, artists, and dignitaries who recognized the unique character of our setting. Each generation added its own chapter while honoring the foundational principles of quality and discretion.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1287&auto=format&fit=crop',
    alignment: 'right',
  },
  {
    id: 'modern',
    title: 'Modern Excellence',
    subtitle: '1990 - Present',
    description: 'Today, we stand as a testament to sustainable luxury development. Our contemporary vision embraces cutting-edge sustainability while preserving the architectural heritage that defines us. We continue to attract those who understand that true luxury is measured not in excess, but in authenticity, craftsmanship, and timeless design.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    alignment: 'left',
  },
];

// Restaurants Page Content
export const restaurantsHero: HeroContent = {
  title: 'Culinary Artistry',
  subtitle: 'Where gastronomy becomes an unforgettable experience',
  backgroundImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2940&auto=format&fit=crop',
};

export const restaurants: RestaurantItem[] = [
  {
    id: 'mare',
    name: 'Mare',
    description: 'Our flagship dining destination celebrates the bounty of the Atlantic. Chef Miguel Andrade orchestrates a daily-changing menu based on the morning catch, transforming pristine seafood into Michelin-worthy compositions that honor Portuguese tradition while embracing modern technique.',
    cuisine: 'Contemporary Portuguese Seafood',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop',
    features: [
      'Michelin-starred chef',
      'Ocean-to-table philosophy',
      'Panoramic coastal views',
      'Exclusive wine cellar',
    ],
  },
  {
    id: 'soleil',
    name: 'Soleil',
    description: 'Mediterranean sunshine captured on a plate. This intimate terrace restaurant offers leisurely lunches and romantic dinners featuring the finest ingredients from across Southern Europe. The atmosphere is relaxed yet refined, perfect for long conversations over exceptional food.',
    cuisine: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop',
    features: [
      'Garden terrace seating',
      'Seasonal Mediterranean menu',
      'Craft cocktail program',
      'Live acoustic performances',
    ],
  },
  {
    id: 'pavilion',
    name: 'The Pavilion',
    description: 'Casual elegance defines our all-day dining venue. From morning pastries and artisanal coffee to late-night shared plates, The Pavilion serves as the social heart of our community. The menu travels the world while remaining rooted in quality and simplicity.',
    cuisine: 'International Contemporary',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop',
    features: [
      'All-day dining',
      'International wine list',
      'Private dining rooms',
      'Chef\'s table experience',
    ],
  },
];

// Country Club Page Content
export const countryClubHero: HeroContent = {
  title: 'The Country Club',
  subtitle: 'An exclusive sanctuary for sport, wellness, and community',
  backgroundImage: 'https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2940&auto=format&fit=crop',
};

export const clubFeatures: ClubFeature[] = [
  {
    id: 'golf',
    title: 'Championship Golf',
    description: 'Our 18-hole championship course was designed by renowned architect Robert Trent Jones II. Carved into the coastal landscape, each hole offers strategic challenges and breathtaking vistas. Members enjoy priority tee times and access to our PGA-certified teaching professionals.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 'tennis',
    title: 'Tennis Academy',
    description: 'Six pristine clay courts provide the perfect surface for players of all levels. Our resident pros offer private instruction and group clinics, while our annual tournament attracts competitors from across Europe. The clubhouse features a pro shop stocked with the finest equipment.',
    image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=2832&auto=format&fit=crop',
  },
  {
    id: 'wellness',
    title: 'Wellness Sanctuary',
    description: 'Our 20,000 square foot wellness center combines state-of-the-art fitness equipment with holistic spa treatments. From personalized training programs to meditation gardens, we offer a comprehensive approach to physical and mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 'social',
    title: 'Social Spaces',
    description: 'Beyond sport and wellness, our club serves as a gathering place for like-minded individuals. The members\' lounge, library, and private event spaces host everything from wine tastings to cultural lectures, fostering connections within our community.',
    image: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=2959&auto=format&fit=crop',
  },
];

export const clubCTA: CTASection = {
  title: 'Become a Member',
  description: 'Membership is by invitation and limited to preserve the intimate character of our club. Express your interest to begin the application process.',
  ctaText: 'Inquire About Membership',
  ctaLink: '/contact',
};

// Contact Page Content
export const contactHero: HeroContent = {
  title: 'Connect With Us',
  subtitle: 'We look forward to welcoming you to Estoril Riviera',
  backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop',
};

export const contactInfo = {
  address: {
    street: 'Avenida Marginal, 8023',
    city: 'Estoril',
    postal: '2765-249',
    country: 'Portugal',
  },
  phone: '+351 214 680 000',
  email: 'concierge@estorilriviera.com',
  hours: 'Monday - Sunday: 9:00 AM - 8:00 PM',
};
