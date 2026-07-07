# 🔑 Adding Your Firebase API Key

Your `.env.local` file has been created with your App ID. Now you just need to add your API key!

## ✅ What's Already Set Up

- ✅ App ID: `1:166097215782:web:79e392537a5835082361e7`
- ✅ Auth Domain: `blueteamafrica.firebaseapp.com`
- ✅ Project ID: `blueteamafrica`
- ✅ Storage Bucket: `blueteamafrica.appspot.com`
- ✅ Messaging Sender ID: `166097215782`
- ⚠️ **API Key**: Still needed

## 📝 How to Get Your API Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **blueteamafrica**
3. Click ⚙️ **Project Settings** (gear icon)
4. Scroll to **"Your apps"** section
5. Click on your **Web app** (App ID: `1:166097215782:web:79e392537a5835082361e7`)
6. Find `apiKey` in the config object
7. Copy the complete value (starts with `AIzaSyC...`)

## 🔧 How to Add the API Key

### Option 1: Use the Helper Script (Easiest)

```bash
./update-api-key.sh YOUR_API_KEY_HERE
```

Example:
```bash
./update-api-key.sh AIzaSyC123456789abcdefghijklmnop
```

### Option 2: Edit Manually

1. Open `.env.local` in your editor
2. Find this line:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
   ```
3. Replace `AIzaSyC...` with your complete API key:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC123456789abcdefghijklmnop
   ```
4. Save the file

### Option 3: Use Terminal

```bash
# macOS
sed -i '' 's|NEXT_PUBLIC_FIREBASE_API_KEY=.*|NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY_HERE|' .env.local

# Linux
sed -i 's|NEXT_PUBLIC_FIREBASE_API_KEY=.*|NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY_HERE|' .env.local
```

(Replace `YOUR_API_KEY_HERE` with your actual API key)

## ✅ Verify Setup

After adding your API key:

1. **Restart your dev server** (important!):
   ```bash
   npm run dev
   ```

2. **Test the contact form**:
   - Go to: http://localhost:3000/contact
   - Fill out and submit the form

3. **Check Firebase Console**:
   - Go to Firebase Console → Firestore Database
   - Click on `leads` collection
   - You should see a new document with the form data!

## 🔍 What Your .env.local Should Look Like

```env
# Blue Team Africa - Environment Variables
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC123456789abcdefghijklmnop  # ← Your complete API key here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=1:166097215782:web:79e392537a5835082361e7
```

## 🚀 Next Steps

Once your API key is added:

1. ✅ Enable Firestore (if not already done):
   - Firebase Console → Firestore Database → Create database
   - Start in test mode

2. ✅ Test the contact form
3. ✅ Check Firestore for new leads
4. ✅ Deploy to Vercel (add all env vars there too)

## ❓ Still Need Help?

- Check `FIREBASE_CREDENTIALS_SETUP.md` for detailed instructions
- Check `SETUP_INSTRUCTIONS.md` for quick setup guide

