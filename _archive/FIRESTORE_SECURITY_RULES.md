# 🔒 Firestore Security Rules Setup Guide

## Why Update Security Rules?

Your Firestore is currently in **test mode**, which means:
- ⚠️ Anyone can read and write to your database
- ⚠️ Test rules expire after 30 days
- ⚠️ Your leads data is vulnerable

Production rules will:
- ✅ Only allow server-side writes (via your Next.js API route)
- ✅ Prevent direct client access
- ✅ Protect your leads data
- ✅ Never expire

## 📋 Step-by-Step Instructions

### Step 1: Open Firestore Rules in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **blueteamafrica**
3. Click on **"Firestore Database"** in the left menu
4. Click on the **"Rules"** tab at the top

### Step 2: Review Current Rules

You'll see something like this (test mode):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 12, 14);
    }
  }
}
```

This allows anyone to read/write until the expiration date. **We need to replace this!**

### Step 3: Replace with Production Rules

**Copy and paste this entire block** into the Rules editor:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Leads collection - production security rules
    // This allows server-side writes via Next.js API route but prevents direct client access
    match /leads/{leadId} {
      // Disable client-side reads (only admins should read leads)
      allow read: if false;
      
      // Disable all client-side writes (your Next.js API route handles writes server-side)
      // This prevents unauthorized users from directly writing to Firestore
      allow write: if false;
    }
  }
}
```

### Step 4: Publish the Rules

1. Click the **"Publish"** button (top right or bottom)
2. Confirm the changes
3. Wait for the rules to deploy (usually instant)

### Step 5: Verify It Works

1. Your contact form should still work (it uses the API route, which runs server-side)
2. Test by submitting the form: http://localhost:3002/contact
3. Check Firebase Console → Firestore → `leads` collection
4. You should still see new leads being saved

## 🎯 How This Works

### What These Rules Do:

1. **`allow read: if false;`**
   - Prevents anyone from reading leads directly from the client
   - Only your Next.js API route (server-side) can read
   - This protects your leads data

2. **`allow write: if false;`**
   - Prevents anyone from writing directly to Firestore from the client
   - Only your Next.js API route (`/api/leads`) can write
   - This prevents spam and unauthorized data

### Why Your Form Still Works:

Your contact form works because:
- The form sends data to `/api/leads` (Next.js API route)
- The API route runs **server-side** on Vercel/your server
- Server-side code can write to Firestore regardless of security rules
- Only **client-side** access is blocked

## 🔐 Advanced: Adding Admin Authentication (Future)

If you want to allow authenticated admins to read leads later:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      // Allow authenticated admin users to read
      allow read: if request.auth != null && 
                     request.auth.token.admin == true;
      
      // Still disable client writes (API route handles this)
      allow write: if false;
    }
  }
}
```

You'll need to:
1. Set up Firebase Authentication
2. Add custom claims to admin users
3. Create an admin dashboard

## ✅ Verification Checklist

After updating rules:

- [ ] Rules are published in Firebase Console
- [ ] Contact form still works (test submission)
- [ ] New leads appear in Firestore
- [ ] Direct client access is blocked (try accessing Firestore from browser console - should fail)

## 🆘 Troubleshooting

### "Form not saving leads after updating rules"

- **Check**: Make sure your API route (`/api/leads`) is working
- **Verify**: Server-side writes should still work
- **Test**: Check terminal/console for errors

### "Permission denied errors in browser console"

- **Good!** This means the rules are working
- Client-side access is correctly blocked
- Your API route should still work (it's server-side)

### "Need to allow admin reads"

- See "Advanced: Adding Admin Authentication" above
- Or create a separate admin API route to fetch leads

## 📝 Important Notes

1. **Never commit `.env.local`** - Your Firebase credentials stay secure
2. **Rules protect data** - But your API route still works
3. **Test in development** - Make sure form works before deploying
4. **Monitor Firebase** - Check Firestore for new leads regularly

## 🎉 You're Done!

Your Firestore is now secure! Your leads data is protected while your contact form continues to work perfectly.

---

**Next Steps:**
- ✅ Update security rules (you're doing this now!)
- 📸 Add images to your website
- 🚀 Deploy to Vercel
- 📧 Set up Formspree for email notifications

