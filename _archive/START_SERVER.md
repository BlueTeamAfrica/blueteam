# 🚀 How to Start the Development Server

## Important: Use Development Mode

For development work, always use:
```bash
npm run dev
```

NOT `npm start` (that's for production and requires a build first)

## Step-by-Step Instructions

### 1. Make Sure You're in the Project Directory

```bash
cd /Users/mohamedeldaby/Documents/blueteamafrica
```

Verify you're in the right place:
```bash
ls package.json
```
You should see the file, not an error.

### 2. Start the Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
 ✓ Ready in XXXXms
```

### 3. Open the Website

Go to: http://localhost:3000

### 4. Test the Contact Form

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Submit it
4. Check Firebase Console → Firestore → `leads` collection

## Troubleshooting

### "Could not find package.json"
- You're in the wrong directory
- Run: `cd /Users/mohamedeldaby/Documents/blueteamafrica`
- Verify with: `ls package.json`

### "Internal Server Error" in Browser
- Check the terminal where `npm run dev` is running
- Look for error messages (usually in red)
- Make sure `.env.local` exists with all Firebase credentials

### Firebase Not Working
1. Check `.env.local` has all variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - And all other Firebase variables
2. Make sure Firestore is enabled in Firebase Console
3. Restart the dev server after changing `.env.local`

## Quick Commands

```bash
# Go to project directory
cd /Users/mohamedeldaby/Documents/blueteamafrica

# Start development server
npm run dev

# Stop server: Press Ctrl+C
```

## Environment Variables

Your `.env.local` should be in the project root:
- `/Users/mohamedeldaby/Documents/blueteamafrica/.env.local`

Make sure it contains all Firebase credentials!

