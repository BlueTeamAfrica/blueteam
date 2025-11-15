# 🔒 STEP 1: Update Firestore Security Rules

## ⏱️ Time: 5 minutes

## 📋 Instructions

### Step 1: Open Firebase Console

1. Go to: https://console.firebase.google.com/
2. Sign in if needed
3. Select your project: **blueteamafrica**

### Step 2: Navigate to Firestore Rules

1. Click on **"Firestore Database"** in the left sidebar
2. Click on the **"Rules"** tab at the top (next to "Data" and "Indexes")

### Step 3: Copy Production Rules

**Copy this entire block of code:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow read: if false;
      allow write: if false;
    }
  }
}
```

### Step 4: Replace Current Rules

1. **Delete** all existing rules in the editor (select all and delete)
2. **Paste** the production rules above
3. Check that it looks correct (should match the code block above)

### Step 5: Publish

1. Click the **"Publish"** button (usually top-right or at the bottom)
2. Confirm if prompted
3. Wait for "Rules published successfully" message

### Step 6: Verify

1. Your contact form should still work (test it: http://localhost:3002/contact)
2. Submit a test form
3. Check Firebase Console → Firestore → `leads` collection
4. New lead should appear (rules don't affect server-side writes)

## ✅ Checklist

- [ ] Opened Firebase Console
- [ ] Went to Firestore Database → Rules tab
- [ ] Copied production rules
- [ ] Replaced existing rules
- [ ] Clicked "Publish"
- [ ] Verified form still works
- [ ] Verified lead appears in Firestore

## 🎉 Done!

Your Firestore is now secure! Move to Step 2: Deploy to Vercel.

