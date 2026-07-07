# Quick Start Guide - Images & Firebase

## 🖼️ Images Setup (5 minutes)

### Step 1: Create Image Folders
```bash
mkdir -p public/images/{hero,about,services,portfolio,logo}
```

### Step 2: Download Images

Go to **Unsplash** (https://unsplash.com) or **Pexels** (https://pexels.com) and search:

1. **Hero image**: `colorful gradient background abstract`
   - Save as: `public/images/hero/hero-gradient-abstract.webp` (or .jpg)

2. **About founder**: `portrait entrepreneur africa`
   - Save as: `public/images/about/about-founder.jpg`

3. **Team photo**: `tech team africa office`
   - Save as: `public/images/about/about-team.jpg`

4. **Service images**:
   - Website: `web design laptop office africa` → `public/images/services/t1-website-design.jpg`
   - eCommerce: `mobile money africa smartphone payment` → `public/images/services/t2-ecommerce.jpg`
   - Architecture: `cloud architecture team africa data center` → `public/images/services/t3-architecture.jpg`

5. **Logo**: Your company logo
   - Save as: `public/images/logo/logo.png` (or .svg)

### Step 3: Use Images in Code

Images in `public/images/` are accessible at `/images/...` in your code.

Example:
```tsx
<Image src="/images/hero/hero-gradient-abstract.webp" alt="..." width={2000} height={1200} />
```

---

## 🔥 Firebase Setup (10 minutes)

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click **"Add project"**
3. Name: `blueteamafrica`
4. Click **"Create project"**

### Step 2: Enable Firestore

1. Click **"Firestore Database"** in left menu
2. Click **"Create database"**
3. Choose **"Start in test mode"**
4. Select location (e.g., `europe-west1`)
5. Click **"Enable"**

### Step 3: Get Firebase Config

1. Click gear icon ⚙️ → **"Project settings"**
2. Scroll to **"Your apps"**
3. Click **Web icon** `</>`
4. Register app: `Blue Team Africa Web`
5. **Copy the config values**

### Step 4: Add to .env.local

Create/update `.env.local`:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Formspree (optional - for email)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Firebase Config (paste your values here)
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### Step 5: Test

1. Restart dev server: `npm run dev`
2. Go to `/contact` and submit the form
3. Check Firebase Console → Firestore → `leads` collection
4. You should see the lead!

---

## 📋 What's Already Set Up

✅ Firebase client library installed  
✅ API route created (`/api/leads`)  
✅ Contact form updated to save to Firebase  
✅ Lead schema matches content pack  
✅ UTM parameter tracking  
✅ Formspree integration (optional, for email)

---

## 🚀 Next Steps

1. **Add images** to `public/images/` folders
2. **Set up Firebase** (follow steps above)
3. **Test the contact form**
4. **Deploy to Vercel** (add Firebase env vars there too)

---

## Need Help?

- **Images**: See `IMAGE_UPLOAD_GUIDE.md` for detailed instructions
- **Firebase**: See `FIREBASE_SETUP.md` for complete setup guide
- **Questions?** Just ask!

