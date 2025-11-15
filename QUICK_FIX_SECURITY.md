# 🔒 Quick Security Rules Update (5 Minutes)

## Why This Matters
Your Firestore is in **test mode** and will expire soon. Update the rules to protect your data.

## ✅ Quick Steps

### 1. Open Firebase Rules
1. Go to: https://console.firebase.google.com/
2. Select project: **blueteamafrica**
3. Click: **Firestore Database** → **Rules** tab

### 2. Copy Production Rules

**Copy this entire block:**

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

### 3. Paste & Publish
1. **Delete** all existing rules in the editor
2. **Paste** the rules above
3. Click **"Publish"** button
4. Done! ✅

## ✅ Verify It Works

1. Test your contact form: http://localhost:3002/contact
2. Submit the form
3. Check Firebase Console → Firestore → `leads` collection
4. New lead should appear (form still works!)

## ❓ Why This Works

- Your form uses `/api/leads` (server-side API)
- Server-side code can write regardless of rules
- Rules only block direct client access
- Your form will continue working perfectly! 🎉

## 📚 Full Guide

For detailed explanation, see: `FIRESTORE_SECURITY_RULES.md`

