# Vercel Deployment Fix Guide

## The Problem
Vercel build failed with: "Couldn't find any `pages` or `app` directory"

This means Vercel cloned your repo but the `app` directory wasn't found - even though it exists locally.

## Root Cause
The repository on GitHub may not have all files, or the wrong repository is linked to Vercel.

## Solution Steps

### Step 1: Verify Your GitHub Repository
1. Open GitHub: https://github.com/Sushilgbp
2. Find your estoril project repository
3. Check that these directories are visible:
   - `app/` (with layout.tsx, page.tsx, globals.css, etc.)
   - `components/` (with all 10 component files)
   - `lib/` (with types.ts, content.ts, utils.ts, hooks.ts)
   - Config files (tailwind.config.ts, next.config.js, package.json, etc.)

### Step 2: Force Push If Files Are Missing
If any of the above directories are missing from GitHub:

```bash
# Open your terminal/PowerShell
cd c:\Users\49159\Desktop\Estoril

# Force push all changes to GitHub
git push origin master --force
```

Wait 1-2 minutes for GitHub to process the push.

### Step 3: Verify on GitHub
Refresh your GitHub repository page and confirm all files now appear.

### Step 4: Retry Vercel Deployment
1. Go to: https://vercel.com/dashboard
2. Find your estoril-luxury project
3. Click on the failed deployment
4. Click the **"Redeploy"** button
5. Wait for the build to complete (should take 30-60 seconds)

### Step 5: Success Indicators
You'll see:
- ✅ Build completed successfully
- ✅ A deployment URL (https://your-site.vercel.app)
- ✅ "Deployment successful"

## Quick Checklist

- [ ] Verified GitHub repo has `/app`, `/components`, `/lib` folders
- [ ] Ran `git push origin master --force` if files were missing
- [ ] Waited for GitHub to update (1-2 minutes)
- [ ] Clicked "Redeploy" in Vercel
- [ ] Deployment succeeded

## If Still Failing

Check the Vercel build logs for the exact error:
1. Click your Vercel project
2. Scroll down to "Build Logs"
3. Search for "Error:" to find the specific issue
4. Common issues:
   - Missing dependencies → Check `package.json` has all imports
   - Wrong Next.js version → Should be 14.2.3
   - TypeScript errors → Check for type mismatches in your code

## Contact Support
If you're still stuck, provide Vercel with:
- Your GitHub repo URL
- Your Vercel project URL
- A screenshot of the build logs
