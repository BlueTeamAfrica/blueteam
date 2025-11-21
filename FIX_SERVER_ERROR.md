# Fix Server Error - Quick Guide

## Error
```
TypeError: Cannot read properties of undefined (reading 'clientModules')
```

## Cause
This is a Next.js build cache corruption issue, typically caused by:
- Stale `.next` cache after file changes
- Multiple dev servers running
- Interrupted build process

## Solution

### Option 1: Quick Fix (Recommended)
```bash
# Run the cleanup script
chmod +x restart-dev.sh
./restart-dev.sh
```

### Option 2: Manual Steps
```bash
# 1. Stop all dev servers
pkill -f "next dev"
lsof -ti:3000 | xargs kill -9

# 2. Clean cache
rm -rf .next

# 3. Restart
npm run dev
```

### Option 3: Deep Clean (if above doesn't work)
```bash
# Stop servers
pkill -f "next dev"
lsof -ti:3000 | xargs kill -9

# Clean everything
rm -rf .next
rm -rf node_modules/.cache

# Restart
npm run dev
```

## Prevention

This error typically occurs after:
- Making changes to layout files
- Updating component imports
- Modifying page structure

**Best practice**: After major structural changes, always clean the cache:
```bash
rm -rf .next && npm run dev
```

## Verification

After restart, check:
1. ✅ Dev server starts without errors
2. ✅ Homepage loads at http://localhost:3000
3. ✅ No console errors in terminal
4. ✅ All pages accessible

## Still Having Issues?

If the error persists:

1. **Check for syntax errors**:
   ```bash
   npm run build
   ```

2. **Verify all imports are correct**:
   - Check `app/layout.tsx`
   - Check `app/page.tsx`
   - Check component imports

3. **Check Node version**:
   ```bash
   node --version  # Should be 18.x or higher
   ```

4. **Reinstall dependencies** (last resort):
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## What Changed

Recent changes that might have triggered this:
- ✅ Updated `InteriorPageLayout` component
- ✅ Modified `app/layout.tsx` padding
- ✅ Updated `app/blog/page.tsx` image reference
- ✅ Added hero CSS styles

All changes are valid - just need to clear the cache!

