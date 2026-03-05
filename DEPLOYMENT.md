# Deployment Guide - Estoril Riviera

This guide covers deployment to Vercel (recommended), Netlify, and other platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to `main` triggers a production deployment
   - Pull requests get preview deployments

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add variables (example):
   ```
   NEXT_PUBLIC_SITE_URL=https://estorilriviera.com
   NEXT_PUBLIC_API_URL=https://your-cms.com/api
   ```
3. Redeploy for changes to take effect

---

## 🌐 Netlify Deployment

### Method 1: Git Integration

1. **Push to Git** (GitHub, GitLab, or Bitbucket)

2. **Import to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select repository

3. **Build Settings**:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Add netlify.toml** (optional but recommended):
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 🐳 Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Update `next.config.js`:

```javascript
module.exports = {
  output: 'standalone',
  // ... rest of config
}
```

Build and run:

```bash
docker build -t estoril-riviera .
docker run -p 3000:3000 estoril-riviera
```

---

## ☁️ AWS Amplify

1. **Connect Repository**:
   - Open AWS Amplify Console
   - Connect GitHub/GitLab/Bitbucket

2. **Build Settings** (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

## 📦 Static Export (Optional)

For static hosting (GitHub Pages, S3, etc.):

1. **Update `next.config.js`**:
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Output**: Files will be in `/out` directory

**Note**: Static export disables:
- Image Optimization
- API Routes
- Server-side rendering

---

## 🔧 Pre-Deployment Checklist

- [ ] Update environment variables
- [ ] Replace demo images with production assets
- [ ] Update content in `lib/content.ts`
- [ ] Test on multiple devices and browsers
- [ ] Run `npm run lint`
- [ ] Run `npm run type-check`
- [ ] Test production build locally: `npm run build && npm run start`
- [ ] Configure custom domain
- [ ] Set up SSL certificate (auto with Vercel/Netlify)
- [ ] Configure analytics (Google Analytics, Vercel Analytics)
- [ ] Set up monitoring (Sentry, LogRocket)

---

## 🌍 Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `estorilriviera.com`)
3. Update DNS records as instructed:
   ```
   A Record: 76.76.21.21
   CNAME: cname.vercel-dns.com
   ```

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   ```
   A Record: 75.2.60.5
   CNAME: your-site.netlify.app
   ```

---

## 📊 Performance Optimization

Before deploying:

1. **Optimize Images**:
   - Use Next.js Image component (already implemented)
   - Serve WebP format
   - Proper sizing with `sizes` prop

2. **Enable Caching**:
   - Static assets are cached automatically
   - API responses (if added) should have cache headers

3. **Analyze Bundle**:
   ```bash
   npm install @next/bundle-analyzer
   ```
   
   Update `next.config.js`:
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer({
     // your config
   })
   ```
   
   Run:
   ```bash
   ANALYZE=true npm run build
   ```

---

## 🔐 Security Headers

Add to `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

---

## 📈 Monitoring & Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

```tsx
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Prefix client variables with `NEXT_PUBLIC_`
- Rebuild after changing env vars
- Check Vercel/Netlify dashboard for proper setup

### Images Not Loading

- Verify `next.config.js` has correct `remotePatterns`
- Check image URLs are accessible
- Use absolute URLs for external images

---

## 📞 Support

For deployment issues:
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: Create an issue in your repository

---

**Your luxury website is ready for the world. Deploy with confidence! 🚀**
