# Estoril Riviera - Luxury Coastal Living Website

A production-ready luxury website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project showcases sophisticated scroll animations, parallax effects, and a CMS-ready architecture inspired by high-end coastal real estate brands.

## 🌟 Features

- **Next.js 14 App Router** - Latest Next.js features with server and client components
- **TypeScript** - Full type safety across the entire application
- **Tailwind CSS** - Custom luxury design system with dark theme
- **Framer Motion** - Smooth scroll animations and parallax effects
- **CMS-Ready Architecture** - Structured content system ready for headless CMS integration
- **Responsive Design** - Mobile-first approach with elegant breakpoints
- **Performance Optimized** - Next.js Image optimization, lazy loading, and efficient animations
- **SEO Optimized** - Comprehensive meta tags and semantic HTML

## 🎨 Design Philosophy

The design embodies:
- **Minimalist Luxury** - Clean, editorial layouts with generous whitespace
- **Dark Sophistication** - Deep blacks (#0B0B0B) with muted gold accents (#C6A75E)
- **Cinematic Feel** - Large hero images with parallax scrolling
- **Premium Typography** - Playfair Display serif paired with Inter sans-serif
- **Intentional Interactions** - Smooth, meaningful animations that enhance UX

## 📁 Project Structure

```
estoril-luxury/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with fonts and footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── legacy/
│   │   └── page.tsx            # Legacy/History page
│   ├── restaurants/
│   │   └── page.tsx            # Restaurants page
│   ├── country-club/
│   │   └── page.tsx            # Country Club page
│   └── contact/
│       └── page.tsx            # Contact page with form
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Sticky navigation with scroll effect
│   ├── HeroSection.tsx          # Fullscreen hero with parallax
│   ├── SectionWrapper.tsx       # Animated section container
│   ├── AnimatedText.tsx         # Text reveal animations
│   ├── ImageGrid.tsx            # Masonry-style image grid
│   ├── CTASection.tsx           # Call-to-action sections
│   ├── ContentSection.tsx       # Text + image content blocks
│   ├── RestaurantCard.tsx       # Restaurant feature cards
│   ├── ClubFeatureCard.tsx      # Club feature displays
│   └── ContactForm.tsx          # Contact form with validation
│
├── lib/                          # Utilities and content
│   ├── types.ts                 # TypeScript type definitions
│   ├── utils.ts                 # Utility functions
│   ├── hooks.ts                 # Custom React hooks
│   └── content.ts               # CMS-ready content structure
│
├── public/                       # Static assets
│   └── (images would go here)
│
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository** (or this is already your project)

2. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎭 Key Components

### Navbar
Transparent navbar that becomes solid on scroll. Includes mobile hamburger menu with smooth animations.

```tsx
import Navbar from '@/components/Navbar';
```

### HeroSection
Fullscreen hero with parallax background image and animated text.

```tsx
import HeroSection from '@/components/HeroSection';

<HeroSection 
  content={heroContent} 
  height="full" 
  parallaxSpeed={0.5} 
/>
```

### SectionWrapper
Container that triggers fade-up animations when scrolled into view.

```tsx
import SectionWrapper from '@/components/SectionWrapper';

<SectionWrapper delay={0.2}>
  {/* Your content */}
</SectionWrapper>
```

### ImageGrid
Responsive masonry grid with hover effects.

```tsx
import ImageGrid from '@/components/ImageGrid';

<ImageGrid items={images} columns={3} gap="large" />
```

## 📊 Content Management

All content is centralized in `lib/content.ts` for easy CMS integration. The structure is designed to be replaced with API calls to headless CMS platforms like:

- Sanity
- Strapi
- Contentful
- Prismic

### Example Content Structure

```typescript
export const homeHero: HeroContent = {
  title: 'Where Ocean Meets Elegance',
  subtitle: 'Discover a world of timeless luxury',
  backgroundImage: '/images/hero.jpg',
  ctaText: 'Explore',
  ctaLink: '/legacy',
};
```

To integrate a CMS:
1. Keep the TypeScript interfaces in `lib/types.ts`
2. Replace the exports in `lib/content.ts` with API fetching functions
3. Update components to handle async data fetching

## 🎨 Styling System

### Color Palette

```css
--dark: #0B0B0B        /* Primary background */
--dark-lighter: #1A1A1A /* Secondary background */
--dark-accent: #252525  /* Borders and accents */
--gold: #C6A75E        /* Primary accent color */
--gold-light: #D4B879   /* Hover states */
--light: #EAEAEA       /* Primary text */
--light-muted: #B8B8B8 /* Secondary text */
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- Custom tracking and line heights for luxury feel

### Custom Tailwind Classes

```css
.btn-primary       /* Gold outlined button */
.btn-secondary     /* Subtle dark button */
.input-luxury      /* Styled form inputs */
.section-container /* Max-width container with padding */
.text-gradient     /* Gold gradient text effect */
.glass-dark        /* Glassmorphism effect */
```

## 🔧 Custom Hooks

### useScrollPosition
Tracks vertical scroll position.

```tsx
const scrollY = useScrollPosition();
```

### useNavbarScroll
Returns boolean when scrolled past threshold.

```tsx
const isScrolled = useNavbarScroll(50);
```

### useInView
Intersection Observer hook for scroll animations.

```tsx
const [ref, isInView] = useInView({ threshold: 0.2 });
```

### useIsMobile
Detects mobile viewport.

```tsx
const isMobile = useIsMobile(768);
```

## 🌐 Pages

1. **Home (`/`)** - Hero, about, features, gallery, CTA
2. **Legacy (`/legacy`)** - Company history with timeline
3. **Restaurants (`/restaurants`)** - Dining experiences
4. **Country Club (`/country-club`)** - Amenities and membership
5. **Contact (`/contact`)** - Contact form and information

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and fully responsive.

## ⚡ Performance Optimizations

- Next.js Image component for automatic optimization
- Lazy loading for images and heavy components
- Efficient Framer Motion animations with `will-change`
- Code splitting via Next.js App Router
- Minimal JavaScript bundle size

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting platform's instructions for Next.js deployment.

### Environment Variables

Create `.env.local` for environment-specific variables:

```bash
# Example
NEXT_PUBLIC_API_URL=https://your-cms.com/api
```

## 🔒 Type Safety

The project uses strict TypeScript. All components have proper type definitions:

```typescript
interface HeroSectionProps {
  content: HeroContent;
  height?: 'full' | 'large' | 'medium';
  parallaxSpeed?: number;
}
```

## 🧪 Testing Recommendations

While not included in this build, recommended testing setup:

- **Jest** + **React Testing Library** for unit tests
- **Playwright** or **Cypress** for E2E tests
- **Chromatic** for visual regression testing

## 📈 Future Enhancements

- [ ] Integrate headless CMS (Sanity/Strapi)
- [ ] Add image lightbox gallery
- [ ] Implement video backgrounds
- [ ] Add multilingual support (i18n)
- [ ] Create blog/news section
- [ ] Add Google Maps integration
- [ ] Implement property listing system
- [ ] Add user authentication for member portal

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain TypeScript strict mode
3. Use Tailwind utility classes
4. Keep animations subtle and performant
5. Test on mobile devices

## 📄 License

This is a proprietary project. All rights reserved.

## 🙏 Credits

- **Design Inspiration**: Estoril Riviera official website
- **Images**: Unsplash (for development/demo purposes)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Framework**: Next.js by Vercel
- **Animations**: Framer Motion

---

**Built with precision for luxury brands that demand excellence.**

For questions or support, contact the development team.
