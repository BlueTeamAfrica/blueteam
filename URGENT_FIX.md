# ⚠️ URGENT FIX: Form Not Working

## The Problem
Form submission fails with: `PERMISSION_DENIED: Missing or insufficient permissions`

This means Firestore security rules are blocking writes.

## ✅ Quick Fix (2 Minutes)

### Step 1: Update Firestore Rules NOW

1. **Open**: https://console.firebase.google.com/
2. **Select**: Project **blueteamafrica**
3. **Go to**: Firestore Database → **Rules** tab
4. **Replace ALL** with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow read: if false;
      allow write: if true;
    }
  }
}
```

5. **Click "Publish"** (very important!)
6. **Wait 10 seconds** for rules to deploy

### Step 2: Test Form

1. Go to: http://localhost:3002/contact
2. Refresh the page (hard refresh: Ctrl+Shift+R)
3. Fill out form and submit
4. Should work now! ✅

## 🔍 Verify Rules Were Updated

After clicking "Publish", you should see:
- Green success message: "Rules published successfully"
- The Rules tab shows the new rules above

## ❓ Still Not Working?

1. **Check rules are published**: Look for success message in Firebase Console
2. **Restart dev server**: Stop (Ctrl+C) and run `npm run dev` again
3. **Check browser console**: Press F12 → Console tab for errors
4. **Check terminal**: Look for Firebase errors in the terminal

Let me know if it works after updating the rules!

