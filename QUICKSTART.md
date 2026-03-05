# Quick Start Guide

Get your luxury website up and running in 5 minutes.

## ⚡ Prerequisites

- **Node.js** 18.0 or higher
- **npm**, **yarn**, or **pnpm**
- A code editor (VS Code recommended)

## 🚀 Installation

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- And more...

### Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:3000**

## 🎨 First Steps

### 1. Customize Content

Edit the content file:

```
lib/content.ts
```

This contains all text, images, and structured data. Search and replace to customize.

### 2. Update Colors (Optional)

Edit the Tailwind config:

```
tailwind.config.ts
```

Change the color palette in the `theme.extend.colors` section.

### 3. Add Your Images

Replace the Unsplash URLs in `lib/content.ts` with your own images. 

For local images:
1. Add them to the `public/` folder
2. Reference as `/image-name.jpg`

### 4. Update Site Metadata

Edit `app/layout.tsx` to change:
- Site title
- Description
- Keywords
- Open Graph tags

## 📱 Testing

### View on Mobile

```bash
npm run dev
```

Then visit from your phone using your computer's local IP:
```
http://192.168.x.x:3000
```

### Test Production Build

```bash
npm run build
npm run start
```

## 🎯 Key Files to Edit

| File | Purpose |
|------|---------|
| `lib/content.ts` | All website content |
| `app/layout.tsx` | Site metadata, fonts, footer |
| `tailwind.config.ts` | Colors, fonts, design tokens |
| `app/globals.css` | Custom styles |

## 🔧 Common Tasks

### Change Navigation Links

Edit in `lib/content.ts`:

```typescript
export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Your Link', href: '/your-page' },
  // ...
]
```

### Add a New Page

1. Create folder: `app/your-page/`
2. Create file: `app/your-page/page.tsx`
3. Add to navigation in `lib/content.ts`

Example:

```typescript
// app/your-page/page.tsx
export default function YourPage() {
  return (
    <div className="section-container py-24">
      <h1 className="text-4xl font-serif text-light">Your Page</h1>
    </div>
  )
}
```

### Change Fonts

The project uses:
- **Playfair Display** (headings)
- **Inter** (body text)

To change fonts, edit `app/layout.tsx`:

```typescript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-font',
})
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear everything and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### TypeScript Errors

```bash
# Check types
npm run type-check
```

### Styling Not Working

Make sure Tailwind is processing:
1. Restart dev server
2. Check `globals.css` has Tailwind directives
3. Verify `tailwind.config.ts` paths

## 📦 Project Structure

```
estoril-luxury/
├── app/              # Pages (Next.js App Router)
├── components/       # Reusable UI components
├── lib/             # Utilities, types, content
├── public/          # Static assets
└── styles/          # Global styles
```

## 🎓 Next Steps

1. **Customize Content**: Replace all text in `lib/content.ts`
2. **Add Real Images**: Replace Unsplash URLs with your photos
3. **Adjust Animations**: Modify Framer Motion settings in components
4. **Add Analytics**: Follow [README.md](README.md) analytics section
5. **Deploy**: Use [DEPLOYMENT.md](DEPLOYMENT.md) guide

## 📚 Documentation

- [README.md](README.md) - Comprehensive project documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment to Vercel, Netlify, etc.
- [CMS_INTEGRATION.md](CMS_INTEGRATION.md) - Integrate Sanity, Strapi, Contentful

## 🆘 Need Help?

Common issues:

**Images not loading?**
- Check image URLs are valid
- For local images, use `/image.jpg` format

**Animations not smooth?**
- Reduce parallax speed in components
- Check browser performance

**Build fails?**
- Run `npm run type-check`
- Fix TypeScript errors shown

## ✅ Pre-Launch Checklist

- [ ] Update all content in `lib/content.ts`
- [ ] Replace demo images
- [ ] Update site metadata in `app/layout.tsx`
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Test contact form
- [ ] Review all pages for typos
- [ ] Check links work
- [ ] Add favicon to `public/`
- [ ] Configure analytics

## 🚀 Deploy

When ready to go live:

```bash
# Build locally to test
npm run build

# Deploy to Vercel (easiest)
npm install -g vercel
vercel --prod
```

---

**You're ready to launch a luxury website! 🎉**

For detailed documentation, see [README.md](README.md)
