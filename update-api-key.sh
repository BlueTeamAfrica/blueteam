#!/bin/bash

# Helper script to update Firebase API key in .env.local

if [ -z "$1" ]; then
    echo "❌ Usage: ./update-api-key.sh YOUR_API_KEY_HERE"
    echo ""
    echo "Example:"
    echo "  ./update-api-key.sh AIzaSyC123456789..."
    exit 1
fi

API_KEY="$1"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found!"
    exit 1
fi

# Update the API key in .env.local
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s|NEXT_PUBLIC_FIREBASE_API_KEY=.*|NEXT_PUBLIC_FIREBASE_API_KEY=$API_KEY|" .env.local
else
    # Linux
    sed -i "s|NEXT_PUBLIC_FIREBASE_API_KEY=.*|NEXT_PUBLIC_FIREBASE_API_KEY=$API_KEY|" .env.local
fi

echo "✅ Updated NEXT_PUBLIC_FIREBASE_API_KEY in .env.local"
echo ""
echo "Next steps:"
echo "  1. Restart your dev server: npm run dev"
echo "  2. Test the contact form: http://localhost:3000/contact"
echo "  3. Check Firebase Console → Firestore → leads collection"

