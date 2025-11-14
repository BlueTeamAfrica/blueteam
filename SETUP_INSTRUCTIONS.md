# 🚀 Quick Setup Instructions

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up Firebase Credentials

### Option A: Use Setup Script (Easiest)
```bash
./setup-env.sh
```
Then edit `.env.local` and add your complete Firebase API key and App ID.

### Option B: Manual Setup
1. Create `.env.local` file in project root
2. Copy the template from `.env.local.example` (if available)
3. Or create it manually with:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_COMPLETE_API_KEY_HERE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_COMPLETE_APP_ID_HERE
```

### Get Your Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **blueteamafrica**
3. Click ⚙️ **Project Settings**
4. Scroll to **"Your apps"** section
5. Click on your **Web app** (or create one if needed)
6. Copy the `apiKey` and `appId` values
7. Paste them into `.env.local`

**Your credentials:**
- ✅ Auth Domain: `blueteamafrica.firebaseapp.com`
- ✅ Project ID: `blueteamafrica`
- ✅ Storage Bucket: `blueteamafrica.appspot.com`
- ✅ Messaging Sender ID: `166097215782`
- ⚠️ **API Key**: Get from Firebase Console (starts with `AIzaSyC...`)
- ⚠️ **App ID**: Get from Firebase Console (starts with `1:166097215782:web:...`)

## Step 3: Enable Firestore

1. Go to Firebase Console → **Firestore Database**
2. Click **"Create database"** (if not already created)
3. Choose **"Start in test mode"**
4. Select location (e.g., `europe-west1`)
5. Click **"Enable"**

## Step 4: Run Development Server
```bash
npm run dev
```

## Step 5: Test Contact Form

1. Go to: http://localhost:3000/contact
2. Fill out and submit the form
3. Check Firebase Console → Firestore → `leads` collection
4. You should see a new document!

## Step 6: Add Images (Optional)

1. Create image folders:
   ```bash
   mkdir -p public/images/{hero,about,services,portfolio,logo}
   ```

2. Download images from Unsplash/Pexels (see `IMAGE_UPLOAD_GUIDE.md`)

3. Place images in `public/images/` subfolders

## Troubleshooting

### "Firebase not configured" Error
- ✅ Check that `.env.local` exists
- ✅ Verify all Firebase environment variables are set
- ✅ Restart dev server after creating/updating `.env.local`

### "Permission denied" in Firestore
- ✅ Make sure Firestore is enabled in Firebase Console
- ✅ Check Firestore rules (should allow writes in test mode)
- ✅ See `FIREBASE_SETUP.md` for security rules

### Can't find API Key or App ID
- ✅ Make sure you're looking at the **Web app** config
- ✅ Create a Web app if you don't have one: Project Settings → Add app → Web

## Next Steps

- ✅ Set up Formspree for email notifications (optional)
- ✅ Add images to `public/images/` folders
- ✅ Deploy to Vercel (add Firebase env vars there too)
- ✅ Update Firestore security rules for production

## Need Help?

- 📚 **Firebase Setup**: See `FIREBASE_SETUP.md`
- 📚 **Firebase Credentials**: See `FIREBASE_CREDENTIALS_SETUP.md`
- 📚 **Image Upload**: See `IMAGE_UPLOAD_GUIDE.md`
- 📚 **Quick Start**: See `QUICK_START.md`

