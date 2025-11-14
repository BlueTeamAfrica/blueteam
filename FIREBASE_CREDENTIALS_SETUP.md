# Firebase Credentials Setup Guide

## Your Firebase Project Details

Based on your credentials:
- **Project ID**: `blueteamafrica`
- **Auth Domain**: `blueteamafrica.firebaseapp.com`
- **Storage Bucket**: `blueteamafrica.appspot.com`
- **Messaging Sender ID**: `166097215782`

## How to Get Complete Firebase Credentials

### Step 1: Go to Firebase Console
1. Visit: https://console.firebase.google.com/
2. Select your project: **blueteamafrica**

### Step 2: Get Your Web App Config
1. Click the **gear icon** ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Find your **Web app** (or click **"Add app"** → Web icon `</>` if you haven't created one)
5. You'll see your `firebaseConfig` object

### Step 3: Copy the Complete Values
You need these two values that were incomplete:

1. **apiKey**: Should look like `AIzaSyC...` (complete string)
2. **appId**: Should look like `1:166097215782:web:abc123def456...` (complete string)

## Setting Up Environment Variables

### Option 1: Create .env.local File

Create a file named `.env.local` in your project root:

```bash
# In your project root directory
touch .env.local
```

Then add these values:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Formspree (optional)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...  # Paste your complete API key here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=1:166097215782:web:...  # Paste your complete App ID here
```

### Option 2: Quick Setup Script

Run this command to create the file with your values:

```bash
cat > .env.local << 'EOF'
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_COMPLETE_API_KEY_HERE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_COMPLETE_APP_ID_HERE
EOF
```

Then edit `.env.local` and replace:
- `YOUR_COMPLETE_API_KEY_HERE` with your actual API key
- `YOUR_COMPLETE_APP_ID_HERE` with your actual App ID

## Verify Your Setup

### Step 1: Check Firebase Console
1. Go to Firebase Console → Firestore Database
2. Make sure Firestore is enabled (if not, click "Create database")
3. Choose "Start in test mode" for now

### Step 2: Test Locally
1. Restart your dev server:
   ```bash
   npm run dev
   ```
2. Go to: http://localhost:3000/contact
3. Fill out and submit the form
4. Check Firebase Console → Firestore → `leads` collection
5. You should see a new document!

## Example Firebase Config Object

From Firebase Console, your config should look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",  // Complete key (starts with AIzaSyC)
  authDomain: "blueteamafrica.firebaseapp.com",
  projectId: "blueteamafrica",
  storageBucket: "blueteamafrica.appspot.com",
  messagingSenderId: "166097215782",
  appId: "1:166097215782:web:abc123def456..."  // Complete App ID
};
```

## Troubleshooting

### Error: "Firebase not configured"
- Make sure `.env.local` exists in your project root
- Check that all environment variables are set
- Restart your dev server after adding/changing `.env.local`

### Error: "Permission denied" in Firestore
1. Go to Firebase Console → Firestore Database → Rules
2. Set rules to test mode temporarily:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /leads/{leadId} {
         allow read, write: if true;  // Test mode only!
       }
     }
   }
   ```
3. Click "Publish"
4. **Important**: Update rules for production (see FIREBASE_SETUP.md)

### Can't find API Key or App ID
- Make sure you're looking at the **Web app** config (not iOS/Android)
- If you don't have a Web app, create one: Project Settings → Your apps → Add app → Web

## Next Steps

1. ✅ Get complete API key and App ID from Firebase Console
2. ✅ Add them to `.env.local`
3. ✅ Restart dev server
4. ✅ Test the contact form
5. ✅ Check Firestore for new leads

## Need Help?

If you're still having issues:
1. Check the browser console for errors
2. Check the terminal/console for server errors
3. Verify all environment variables are set correctly
4. Make sure Firestore is enabled in Firebase Console

