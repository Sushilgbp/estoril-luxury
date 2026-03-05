# 📁 Complete Project Structure

```
estoril-luxury/
│
├── 📄 DOCUMENTATION (Read these first!)
│   ├── START_HERE.md              ⭐ Begin here - Getting started guide
│   ├── QUICKSTART.md              🚀 5-minute setup and customization
│   ├── README.md                  📖 Complete technical documentation
│   ├── PROJECT_SUMMARY.md         📊 High-level overview and features
│   ├── DEPLOYMENT.md              🌐 Deploy to Vercel, Netlify, AWS, etc.
│   ├── CMS_INTEGRATION.md         🔌 Integrate Sanity, Strapi, Contentful
│   ├── ONBOARDING.md              👨‍💻 Developer onboarding guide
│   ├── DOCS_INDEX.md              📚 Navigation through all docs
│   └── PROJECT_STRUCTURE.md       📁 This file
│
├── ⚙️ CONFIGURATION
│   ├── package.json               📦 Dependencies and scripts
│   ├── tsconfig.json              🔧 TypeScript configuration
│   ├── next.config.js             ⚡ Next.js configuration
│   ├── tailwind.config.ts         🎨 Tailwind theme and colors
│   ├── postcss.config.js          🔄 PostCSS configuration
│   ├── .eslintrc.json             ✅ ESLint rules
│   └── .gitignore                 🚫 Git ignore patterns
│
├── 📱 APPLICATION
│   │
│   ├── app/                       📄 Next.js App Router (Pages)
│   │   │
│   │   ├── layout.tsx             🎭 Root layout (fonts, navbar, footer)
│   │   ├── page.tsx               🏠 Home page
│   │   ├── globals.css            🎨 Global styles and Tailwind directives
│   │   │
│   │   ├── legacy/                📜 Legacy/History Page
│   │   │   └── page.tsx           → Timeline of company history
│   │   │
│   │   ├── restaurants/           🍽️ Restaurants Page
│   │   │   └── page.tsx           → Dining experiences showcase
│   │   │
│   │   ├── country-club/          ⛳ Country Club Page
│   │   │   └── page.tsx           → Club amenities and membership
│   │   │
│   │   └── contact/               📞 Contact Page
│   │       └── page.tsx           → Contact form and information
│   │
│   ├── components/                🧩 Reusable UI Components
│   │   │
│   │   ├── Navbar.tsx             🔝 Site navigation with scroll effects
│   │   ├── HeroSection.tsx        🌅 Fullscreen hero with parallax
│   │   ├── SectionWrapper.tsx     📦 Animated section container
│   │   ├── AnimatedText.tsx       ✨ Text reveal animations
│   │   ├── ImageGrid.tsx          🖼️ Responsive image gallery
│   │   ├── ContentSection.tsx     📝 Text + image content blocks
│   │   ├── CTASection.tsx         📣 Call-to-action sections
│   │   ├── RestaurantCard.tsx     🍴 Restaurant feature cards
│   │   ├── ClubFeatureCard.tsx    🏌️ Club feature displays
│   │   └── ContactForm.tsx        📋 Contact form with validation
│   │
│   └── lib/                       🔧 Utilities and Content
│       │
│       ├── types.ts               📐 TypeScript type definitions
│       ├── content.ts             📝 Website content (CMS-ready structure)
│       ├── utils.ts               🛠️ Helper functions and utilities
│       └── hooks.ts               🪝 Custom React hooks
│
└── 🎨 ASSETS (You'll add these)
    └── public/                    📁 Static files (images, fonts, etc.)
        └── (Add your images here)
```

## 📄 Pages Breakdown

### Home Page (`/`)
```
app/page.tsx
├── HeroSection          → Fullscreen hero with parallax
├── ContentSection       → "A Legacy of Excellence"
├── ContentSection       → "Culinary Mastery"
├── ContentSection       → "The Country Club"
├── SectionWrapper       → Image Gallery
└── CTASection          → "Begin Your Journey"
```

### Legacy Page (`/legacy`)
```
app/legacy/page.tsx
├── HeroSection          → "A Century of Distinction"
├── SectionWrapper       → Introduction text
├── ContentSection       → "The Beginning" (1930-1950)
├── ContentSection       → "Evolution & Growth" (1950-1990)
├── ContentSection       → "Modern Excellence" (1990-Present)
└── SectionWrapper       → "The Next Chapter"
```

### Restaurants Page (`/restaurants`)
```
app/restaurants/page.tsx
├── HeroSection          → "Culinary Artistry"
├── SectionWrapper       → Introduction
├── RestaurantCard       → "Mare" (Michelin-starred)
├── RestaurantCard       → "Soleil" (Mediterranean)
├── RestaurantCard       → "The Pavilion" (All-day)
└── SectionWrapper       → Reservations CTA
```

### Country Club Page (`/country-club`)
```
app/country-club/page.tsx
├── HeroSection          → "The Country Club"
├── SectionWrapper       → Introduction
├── ClubFeatureCard      → Championship Golf
├── ClubFeatureCard      → Tennis Academy
├── ClubFeatureCard      → Wellness Sanctuary
├── ClubFeatureCard      → Social Spaces
├── SectionWrapper       → Membership Benefits
└── CTASection          → "Become a Member"
```

### Contact Page (`/contact`)
```
app/contact/page.tsx
├── HeroSection          → "Connect With Us"
├── SectionWrapper       → Contact Info + Form
│   ├── Contact Details  → Address, Phone, Email, Hours
│   └── ContactForm      → Form with validation
└── SectionWrapper       → Map section
```

## 🧩 Components Detail

### Navigation & Layout
```
Navbar
├── Logo
├── Desktop Menu
└── Mobile Menu (hamburger)

Layout (app/layout.tsx)
├── HTML + Body wrapper
├── Navbar (sticky)
├── Main content
└── Footer
    ├── About section
    ├── Quick Links
    └── Contact info
```

### Content Display
```
HeroSection
├── Parallax Background
├── Gradient Overlay
├── Animated Title
├── Subtitle
├── CTA Button
└── Scroll Indicator

ContentSection
├── Image (responsive)
└── Text Content
    ├── Subtitle (optional)
    ├── Title
    └── Description

SectionWrapper
└── Fade-up animation container

AnimatedText
└── Staggered word animations
```

### Interactive
```
ImageGrid
└── Grid Items
    ├── Image (Next.js optimized)
    ├── Hover overlay
    └── Text (title + description)

ContactForm
├── Name field
├── Email field
├── Phone field (optional)
├── Interest dropdown
├── Message textarea
├── Submit button
├── Validation
└── Success state

CTASection
├── Background image
├── Dark overlay
├── Title
├── Description
└── CTA button
```

### Specialized
```
RestaurantCard
├── Image
└── Content
    ├── Cuisine type
    ├── Name
    ├── Description
    └── Features list

ClubFeatureCard
├── Image
└── Content
    ├── Title
    └── Description
```

## 🔧 Library Files

### `lib/types.ts`
```typescript
TypeScript Interfaces:
├── NavLink
├── HeroContent
├── SectionContent
├── ImageGridItem
├── RestaurantItem
├── ClubFeature
├── ContactFormData
├── CTASection
├── AnimationConfig
└── PageMeta
```

### `lib/content.ts`
```typescript
Content Structure:
├── Navigation
│   └── navLinks[]
│
├── Home Page
│   ├── homeHero
│   ├── homeAbout
│   ├── homeFeatures[]
│   ├── homeGallery[]
│   └── homeCTA
│
├── Legacy Page
│   ├── legacyHero
│   └── legacySections[]
│
├── Restaurants Page
│   ├── restaurantsHero
│   └── restaurants[]
│
├── Country Club Page
│   ├── countryClubHero
│   ├── clubFeatures[]
│   └── clubCTA
│
└── Contact Page
    ├── contactHero
    └── contactInfo
```

### `lib/utils.ts`
```typescript
Utility Functions:
├── cn()                    → Class name merging
├── scrollToElement()       → Smooth scroll
├── debounce()             → Performance optimization
├── formatPhoneNumber()    → Phone formatting
├── isValidEmail()         → Email validation
├── getParallaxTransform() → Parallax calculations
├── clamp()                → Number clamping
└── lerp()                 → Linear interpolation
```

### `lib/hooks.ts`
```typescript
Custom Hooks:
├── useScrollPosition()    → Track scroll Y
├── useNavbarScroll()      → Navbar state
├── useInView()            → Intersection Observer
├── useIsMobile()          → Mobile detection
└── useParallax()          → Parallax effects
```

## 🎨 Styling System

### `tailwind.config.ts`
```typescript
Theme Extensions:
├── Colors
│   ├── dark (3 shades)
│   ├── gold (3 shades)
│   └── light (2 shades)
│
├── Fonts
│   ├── serif (Playfair Display)
│   └── sans (Inter)
│
├── Animations
│   ├── fade-in
│   ├── slide-up
│   └── slide-down
│
└── Utilities
    ├── gradient-radial
    ├── gradient-dark
    └── luxury easing
```

### `app/globals.css`
```css
Custom Styles:
├── Smooth scroll
├── Custom scrollbar
├── Base layer
│   ├── Body styles
│   ├── Heading fonts
│   └── Selection color
│
├── Components layer
│   ├── .btn-primary
│   ├── .btn-secondary
│   ├── .input-luxury
│   ├── .section-container
│   └── .text-gradient
│
└── Utilities layer
    ├── .parallax-layer
    ├── .glass-dark
    ├── .text-shadow
    └── Animation delays
```

## 📊 File Count Summary

- **Documentation Files**: 8
- **Configuration Files**: 7
- **Application Files**: 
  - Pages: 6 (including layout)
  - Components: 10
  - Library files: 4
- **Total Project Files**: 35+

## 💾 Size Estimates

- **Source Code**: ~50 KB
- **Dependencies** (node_modules): ~300 MB
- **Production Build**: ~2-5 MB
- **Documentation**: ~100 KB

## 🔄 Data Flow

```
User Request
    ↓
Next.js App Router
    ↓
Page Component (app/*/page.tsx)
    ↓
Fetches Content (lib/content.ts)
    ↓
Renders Components (components/*)
    ↓
Uses Utilities (lib/utils.ts, lib/hooks.ts)
    ↓
Styled with Tailwind (tailwind.config.ts)
    ↓
Animated with Framer Motion
    ↓
Rendered to User
```

## 📦 Dependency Tree

```
Next.js 14
├── React 18
├── React DOM
└── Server Components

TypeScript 5
└── Type Definitions

Tailwind CSS 3
├── PostCSS
└── Autoprefixer

Framer Motion 11
└── Animation Engine

Development
├── ESLint
└── Next ESLint Config
```

## 🎯 Entry Points

1. **Development**: `npm run dev` → `app/layout.tsx` → All pages
2. **Production**: `npm run build` → `.next/` → Optimized bundle
3. **Content**: `lib/content.ts` → All content data
4. **Styles**: `app/globals.css` + `tailwind.config.ts` → Theme
5. **Types**: `lib/types.ts` → Type definitions

## 📈 Build Output Structure

```
.next/
├── cache/           → Build cache
├── server/          → Server-side code
├── static/          → Static assets
│   ├── chunks/      → JavaScript bundles
│   ├── css/         → Compiled CSS
│   └── media/       → Optimized images
└── types/           → Generated types
```

---

**This structure is designed for:**
- ✅ Easy navigation
- ✅ Clear separation of concerns
- ✅ Scalability
- ✅ Maintainability
- ✅ CMS integration
- ✅ Team collaboration

*Explore with confidence! Everything is organized and documented.* 🚀
