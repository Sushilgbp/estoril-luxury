# Quick Commands for Vercel Fix

## Check What's on GitHub
```bash
cd c:\Users\49159\Desktop\Estoril
git log -1 --oneline
```

## Push Everything to GitHub
```bash
cd c:\Users\49159\Desktop\Estoril
git push origin master --force
```

## Verify Files Are Committed
```bash
cd c:\Users\49159\Desktop\Estoril
git ls-tree -r HEAD --name-only | findstr "^app/"
git ls-tree -r HEAD --name-only | findstr "^components/"
git ls-tree -r HEAD --name-only | findstr "^lib/"
```

## Check Git Status
```bash
cd c:\Users\49159\Desktop\Estoril
git status
```

---

## Step-by-Step Fix (Copy & Paste)

### Step 1: Ensure everything is committed locally
```bash
cd c:\Users\49159\Desktop\Estoril
git status
```
Should show: "nothing to commit, working tree clean"

### Step 2: Force push to GitHub
```bash
git push origin master --force
```

### Step 3: Verify on GitHub
Open: https://github.com/Sushilgbp/sushil-estoril-luxury
(or your actual repo URL)

Check that you can see:
- app/
- components/
- lib/
- tailwind.config.ts
- package.json
- etc.

### Step 4: Redeploy on Vercel
1. Go to https://vercel.com/dashboard
2. Click your estoril-luxury project
3. Click the failed deployment
4. Click "Redeploy"
5. Wait for success

---

## Expected Success Message
```
✓ Production deployment created and propagated to the edge in 45s
https://estoril-luxury.vercel.app
```
