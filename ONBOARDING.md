# Developer Onboarding Guide

Welcome to the Estoril Riviera project! This guide will help you understand the codebase and start contributing quickly.

## 🎯 Project Philosophy

This project prioritizes:
1. **Luxury aesthetics** - Premium, minimal, intentional design
2. **Performance** - Smooth animations, fast loading
3. **Maintainability** - Clean code, clear structure
4. **Extensibility** - CMS-ready, component-based

## 🏗️ Architecture Overview

### Tech Stack

```
Frontend Framework:  Next.js 14 (App Router)
Language:           TypeScript (strict mode)
Styling:            Tailwind CSS + Custom CSS
Animations:         Framer Motion
Deployment:         Vercel (recommended)
```

### Folder Structure

```
app/              → Next.js pages (App Router)
components/       → Reusable UI components
lib/             → Utilities, hooks, content, types
public/          → Static assets (add images here)
```

## 📂 Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Theme, colors, fonts |
| `next.config.js` | Next.js configuration |
| `postcss.config.js` | PostCSS (Tailwind) config |

### App Directory (Pages)

| File | Route | Description |
|------|-------|-------------|
| `app/layout.tsx` | All pages | Root layout, fonts, footer |
| `app/page.tsx` | `/` | Home page |
| `app/legacy/page.tsx` | `/legacy` | History timeline |
| `app/restaurants/page.tsx` | `/restaurants` | Dining experiences |
| `app/country-club/page.tsx` | `/country-club` | Club amenities |
| `app/contact/page.tsx` | `/contact` | Contact form |

### Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Site navigation |
| `HeroSection` | Page heroes with parallax |
| `SectionWrapper` | Animated containers |
| `AnimatedText` | Text reveal effects |
| `ImageGrid` | Responsive galleries |
| `ContentSection` | Text + image layouts |
| `CTASection` | Call-to-action blocks |
| `ContactForm` | Form with validation |

### Library Files

| File | Contains |
|------|----------|
| `lib/types.ts` | TypeScript interfaces |
| `lib/content.ts` | Website content (CMS-ready) |
| `lib/utils.ts` | Helper functions |
| `lib/hooks.ts` | Custom React hooks |

## 🎨 Design System

### Colors

Use Tailwind classes:

```tsx
// Backgrounds
bg-dark           // #0B0B0B - Main background
bg-dark-lighter   // #1A1A1A - Secondary background
bg-dark-accent    // #252525 - Borders

// Text
text-light        // #EAEAEA - Primary text
text-light-muted  // #B8B8B8 - Secondary text
text-gold         // #C6A75E - Accent text

// Borders
border-gold       // Gold accent
border-dark-accent // Subtle borders
```

### Typography

```tsx
// Headings - use font-serif
<h1 className="font-serif text-4xl">

// Body - use font-sans (default)
<p className="font-sans text-lg">

// Uppercase tracking
<span className="tracking-[0.3em] uppercase text-sm">
```

### Spacing

```tsx
// Section padding
py-16 md:py-24 lg:py-32

// Container
section-container  // Custom class: max-width + padding

// Grid gaps
gap-6   // Medium
gap-8   // Large
gap-12  // Extra large
```

### Buttons

```tsx
// Primary button (gold outline)
<button className="btn-primary">

// Secondary button
<button className="btn-secondary">
```

## 🔧 Common Tasks

### 1. Add a New Page

```bash
# Create directory
mkdir app/your-page

# Create page file
touch app/your-page/page.tsx
```

```tsx
// app/your-page/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page | Estoril Riviera',
  description: 'Page description',
}

export default function YourPage() {
  return (
    <div className="section-container py-24">
      <h1 className="text-4xl font-serif text-light">Your Page</h1>
    </div>
  )
}
```

Add to navigation in `lib/content.ts`:

```tsx
export const navLinks: NavLink[] = [
  // ... existing links
  { name: 'Your Page', href: '/your-page' },
]
```

### 2. Create a Component

```tsx
// components/YourComponent.tsx
'use client' // If using hooks or interactivity

interface YourComponentProps {
  title: string
  // ... other props
}

export default function YourComponent({ title }: YourComponentProps) {
  return (
    <div className="...">
      {/* Your JSX */}
    </div>
  )
}
```

### 3. Add Content

Edit `lib/content.ts`:

```tsx
export const yourContent = {
  title: 'Your Title',
  description: 'Your description',
  // ... more fields
}
```

Define types in `lib/types.ts`:

```tsx
export interface YourContent {
  title: string
  description: string
  // ... more fields
}
```

### 4. Add Animation

```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

export default function AnimatedComponent() {
  const [ref, isInView] = useInView()
  
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Content */}
    </motion.div>
  )
}
```

## 🎭 Animation Patterns

### Fade In

```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

### Slide Up

```tsx
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
```

### Staggered Children

```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 🔨 Development Workflow

### 1. Start Development

```bash
npm run dev
```

### 2. Check Types

```bash
npm run type-check
```

### 3. Lint Code

```bash
npm run lint
```

### 4. Build Production

```bash
npm run build
```

### 5. Test Production Build

```bash
npm run build
npm run start
```

## 📝 Code Style Guide

### TypeScript

```tsx
// ✅ Good - typed props
interface ButtonProps {
  text: string
  onClick: () => void
}

export default function Button({ text, onClick }: ButtonProps) {
  // ...
}

// ❌ Bad - no types
export default function Button({ text, onClick }: any) {
  // ...
}
```

### Components

```tsx
// ✅ Good - descriptive naming
export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return <article className="...">
    {/* Semantic HTML */}
  </article>
}

// ❌ Bad - unclear naming
export default function Card({ data }: any) {
  return <div>
    {/* Non-semantic */}
  </div>
}
```

### Tailwind

```tsx
// ✅ Good - logical grouping
<div className="
  flex items-center justify-between
  px-4 py-6
  bg-dark-lighter
  border-b border-dark-accent
">

// ❌ Bad - random order
<div className="bg-dark-lighter flex border-dark-accent items-center border-b py-6 justify-between px-4">
```

## 🐛 Debugging Tips

### TypeScript Errors

```bash
# Check what's wrong
npm run type-check

# Common fix: restart TS server
# In VS Code: Cmd/Ctrl + Shift + P → "Restart TS Server"
```

### Styling Issues

```bash
# Restart dev server
# Ctrl + C, then npm run dev

# Clear .next folder
rm -rf .next
npm run dev
```

### Animation Performance

```tsx
// Add will-change
<motion.div
  className="will-change-transform"
  // ...
>

// Reduce parallax speed
<HeroSection parallaxSpeed={0.3} /> // Instead of 0.5
```

## 📚 Helpful Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)

### This Project

- [README.md](README.md) - Full documentation
- [QUICKSTART.md](QUICKSTART.md) - Quick setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy guide
- [CMS_INTEGRATION.md](CMS_INTEGRATION.md) - CMS setup

## 🤔 Common Questions

### Q: Where do I add images?

**A:** Add to `public/` folder, reference as `/image.jpg`

```tsx
<Image src="/hero.jpg" alt="Hero" width={1920} height={1080} />
```

### Q: How do I change colors?

**A:** Edit `tailwind.config.ts` → `theme.extend.colors`

### Q: Component not animating?

**A:** Make sure:
1. Component has `'use client'` directive
2. Using `useInView` hook correctly
3. Framer Motion is imported

### Q: How to add a custom font?

**A:** Edit `app/layout.tsx`:

```tsx
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({ subsets: ['latin'] })

// Add to <html> className
```

### Q: Where is the content stored?

**A:** Currently in `lib/content.ts`, designed to be replaced with CMS API calls.

### Q: How to test mobile?

**A:** Run `npm run dev`, visit from phone using computer's IP:
```
http://192.168.x.x:3000
```

## ✅ Checklist for New Features

Before submitting a PR:

- [ ] TypeScript types defined
- [ ] Component is responsive
- [ ] Tested on mobile
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Follows code style guide
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)

## 🎓 Learning Path

### Week 1: Setup & Basics
1. Run project locally
2. Understand folder structure
3. Edit content in `lib/content.ts`
4. Change colors in Tailwind config

### Week 2: Components
1. Study existing components
2. Create a simple component
3. Add it to a page
4. Understand props and types

### Week 3: Animations
1. Learn Framer Motion basics
2. Use `useInView` hook
3. Create animated component
4. Understand transition timing

### Week 4: Advanced
1. Create new page
2. Integrate with CMS (optional)
3. Add custom hooks
4. Optimize performance

## 💡 Pro Tips

1. **Use the VSCode extensions:**
   - Tailwind CSS IntelliSense
   - TypeScript Import Sorter
   - ESLint

2. **Hot reload:**
   - Changes auto-refresh
   - CSS updates instantly
   - Component changes fast

3. **Console logs:**
   - Use in Server Components (shows in terminal)
   - Use in Client Components (shows in browser)

4. **Image optimization:**
   - Always use Next.js `Image` component
   - Specify width/height
   - Use `sizes` prop for responsive

5. **Performance:**
   - Keep components small
   - Use React.memo for expensive renders
   - Debounce scroll handlers (already done in hooks)

## 🆘 Getting Help

1. Check documentation files
2. Review existing code for patterns
3. Search Next.js/Tailwind docs
4. Check GitHub issues
5. Ask the team

## 🎉 You're Ready!

Start with:
1. `npm install`
2. `npm run dev`
3. Edit `lib/content.ts`
4. See your changes live

---

**Happy coding! Build something beautiful. 🚀**
