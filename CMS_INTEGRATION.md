# CMS Integration Guide

This guide explains how to integrate this project with popular headless CMS platforms.

## 🎯 Current Architecture

The project is **CMS-ready** with content currently stored in `lib/content.ts`. All TypeScript interfaces are defined in `lib/types.ts`.

### Content Structure

```
lib/
├── types.ts      # TypeScript interfaces (keep these)
├── content.ts    # Static content (replace with CMS fetching)
└── utils.ts      # Utility functions (keep these)
```

---

## 🔧 Sanity CMS Integration

### 1. Setup Sanity

```bash
npm install @sanity/client @sanity/image-url
npm install -D @sanity/types
```

### 2. Create Sanity Client

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
```

### 3. Create Schemas

```typescript
// sanity/schemas/hero.ts
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    },
  ],
}
```

### 4. Replace Static Content

```typescript
// lib/content.ts (updated)
import { client } from './sanity'
import type { HeroContent } from './types'

export async function getHomeHero(): Promise<HeroContent> {
  const data = await client.fetch(`
    *[_type == "hero" && slug.current == "home"][0]{
      title,
      subtitle,
      "backgroundImage": backgroundImage.asset->url,
      ctaText,
      ctaLink
    }
  `)
  return data
}
```

### 5. Update Pages to Use Async Data

```typescript
// app/page.tsx
import { getHomeHero } from '@/lib/content'

export default async function Home() {
  const heroContent = await getHomeHero()
  
  return <HeroSection content={heroContent} />
}
```

---

## 📦 Strapi Integration

### 1. Install Strapi SDK

```bash
npm install @strapi/sdk-js
```

### 2. Create Strapi Client

```typescript
// lib/strapi.ts
import { Strapi } from '@strapi/sdk-js'

const strapi = new Strapi({
  url: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  apiToken: process.env.STRAPI_API_TOKEN,
})

export default strapi
```

### 3. Fetch Content

```typescript
// lib/content.ts
import strapi from './strapi'
import type { HeroContent } from './types'

export async function getHomeHero(): Promise<HeroContent> {
  const response = await strapi.findOne('hero-sections', 'home', {
    populate: ['backgroundImage'],
  })
  
  return {
    title: response.data.attributes.title,
    subtitle: response.data.attributes.subtitle,
    backgroundImage: response.data.attributes.backgroundImage.data.attributes.url,
    ctaText: response.data.attributes.ctaText,
    ctaLink: response.data.attributes.ctaLink,
  }
}
```

---

## 🌐 Contentful Integration

### 1. Install Contentful SDK

```bash
npm install contentful
```

### 2. Create Client

```typescript
// lib/contentful.ts
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export default client
```

### 3. Fetch Content

```typescript
// lib/content.ts
import client from './contentful'
import type { HeroContent } from './types'

export async function getHomeHero(): Promise<HeroContent> {
  const response = await client.getEntries({
    content_type: 'heroSection',
    'fields.slug': 'home',
    limit: 1,
  })
  
  const item = response.items[0]
  
  return {
    title: item.fields.title as string,
    subtitle: item.fields.subtitle as string,
    backgroundImage: `https:${item.fields.backgroundImage.fields.file.url}`,
    ctaText: item.fields.ctaText as string,
    ctaLink: item.fields.ctaLink as string,
  }
}
```

---

## 🔄 Migration Strategy

### Phase 1: Prepare CMS

1. Set up your chosen CMS
2. Create content models matching `lib/types.ts`
3. Migrate content from `lib/content.ts` to CMS

### Phase 2: Create Fetching Functions

1. Keep existing exports in `lib/content.ts`
2. Replace implementations with CMS API calls
3. Ensure return types match existing interfaces

### Phase 3: Update Pages

1. Convert pages to async functions
2. Fetch data in Server Components
3. Pass data to Client Components

### Phase 4: Add Caching

```typescript
import { cache } from 'react'

export const getHomeHero = cache(async (): Promise<HeroContent> => {
  // Your CMS fetch logic
  return data
})
```

### Phase 5: Add Revalidation

```typescript
// app/page.tsx
export const revalidate = 60 // Revalidate every 60 seconds
```

---

## 🎨 Image Handling

### For Sanity

```typescript
import { urlFor } from '@/lib/sanity'

const imageUrl = urlFor(sanityImage)
  .width(1920)
  .height(1080)
  .quality(90)
  .url()
```

### For Strapi

```typescript
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
const imageUrl = `${baseUrl}${image.attributes.url}`
```

### For Contentful

```typescript
const imageUrl = `https:${image.fields.file.url}?w=1920&h=1080&q=90`
```

---

## 📝 Content Model Examples

### Hero Section

```typescript
{
  title: string
  subtitle: string
  backgroundImage: Image
  ctaText?: string
  ctaLink?: string
}
```

### Section Content

```typescript
{
  id: string
  title: string
  subtitle?: string
  description: RichText
  image?: Image
  alignment: 'left' | 'right' | 'center'
}
```

### Restaurant

```typescript
{
  name: string
  description: RichText
  cuisine: string
  image: Image
  features: string[]
}
```

---

## 🔐 Environment Variables

Create `.env.local`:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Strapi
NEXT_PUBLIC_STRAPI_URL=https://your-strapi.com
STRAPI_API_TOKEN=your_api_token

# Contentful
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

---

## 🚀 Best Practices

### 1. Type Safety

Always map CMS responses to your TypeScript types:

```typescript
function mapToHeroContent(cmsData: any): HeroContent {
  return {
    title: cmsData.title,
    subtitle: cmsData.subtitle,
    backgroundImage: cmsData.image?.url || '',
    ctaText: cmsData.cta?.text,
    ctaLink: cmsData.cta?.link,
  }
}
```

### 2. Error Handling

```typescript
export async function getHomeHero(): Promise<HeroContent> {
  try {
    const data = await client.fetch(query)
    return mapToHeroContent(data)
  } catch (error) {
    console.error('Failed to fetch hero content:', error)
    // Return fallback content
    return {
      title: 'Welcome',
      subtitle: 'Experience luxury',
      backgroundImage: '/fallback.jpg',
    }
  }
}
```

### 3. Caching Strategy

```typescript
// Aggressive caching for rarely changing content
export const revalidate = 3600 // 1 hour

// On-demand revalidation
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  revalidatePath('/')
  return Response.json({ revalidated: true })
}
```

### 4. Preview Mode

```typescript
// app/api/preview/route.ts
import { draftMode } from 'next/headers'

export async function GET(request: Request) {
  draftMode().enable()
  return redirect('/')
}
```

---

## 📊 Content Organization

Recommended CMS structure:

```
CMS/
├── Pages/
│   ├── Home
│   ├── Legacy
│   ├── Restaurants
│   ├── Country Club
│   └── Contact
│
├── Components/
│   ├── Heroes
│   ├── Sections
│   ├── Galleries
│   └── CTAs
│
├── Media/
│   ├── Images
│   └── Documents
│
└── Settings/
    ├── Navigation
    ├── Footer
    └── Site Config
```

---

## 🧪 Testing CMS Integration

```typescript
// __tests__/cms.test.ts
import { getHomeHero } from '@/lib/content'

describe('CMS Integration', () => {
  it('fetches home hero content', async () => {
    const hero = await getHomeHero()
    
    expect(hero).toHaveProperty('title')
    expect(hero).toHaveProperty('subtitle')
    expect(hero.backgroundImage).toBeTruthy()
  })
})
```

---

## 🔄 Incremental Migration

You can migrate one section at a time:

```typescript
// lib/content.ts
import { staticHomeHero } from './static-content'

export async function getHomeHero(): Promise<HeroContent> {
  if (process.env.USE_CMS === 'true') {
    return fetchFromCMS()
  }
  return staticHomeHero
}
```

---

## 📚 Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [Strapi Docs](https://docs.strapi.io/)
- [Contentful Docs](https://www.contentful.com/developers/docs/)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

---

**Your content is now dynamic and easily manageable! 🎉**
