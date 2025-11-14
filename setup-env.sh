#!/bin/bash

# Setup script for Blue Team Africa environment variables
# This creates a .env.local file with your Firebase credentials

echo "🔧 Setting up Blue Team Africa environment variables..."
echo ""

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local file
cat > .env.local << 'EOF'
# Blue Team Africa - Environment Variables
# Site URL
NEXT_PUBLIC_SITE_URL=https://blueteamafrica.com

# Formspree (optional - for email notifications)
# Create a form at https://formspree.io to get your endpoint
# NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId

# Firebase Configuration
# Get these values from Firebase Console: Project Settings → Your apps → Web app
# Project: blueteamafrica
# IMPORTANT: Replace the placeholder values below with your actual Firebase credentials!

NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...  # TODO: Replace with your complete API key from Firebase Console
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=blueteamafrica.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=blueteamafrica
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=blueteamafrica.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=166097215782
NEXT_PUBLIC_FIREBASE_APP_ID=1:166097215782:web:...  # TODO: Replace with your complete App ID from Firebase Console
EOF

echo "✅ Created .env.local file!"
echo ""
echo "📝 Next steps:"
echo "   1. Open .env.local in your editor"
echo "   2. Replace the placeholder values:"
echo "      - NEXT_PUBLIC_FIREBASE_API_KEY (get from Firebase Console)"
echo "      - NEXT_PUBLIC_FIREBASE_APP_ID (get from Firebase Console)"
echo "   3. Get your credentials from:"
echo "      Firebase Console → Project Settings → Your apps → Web app"
echo "   4. Restart your dev server: npm run dev"
echo ""
echo "📚 For detailed instructions, see FIREBASE_CREDENTIALS_SETUP.md"

