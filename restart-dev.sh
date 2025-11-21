#!/bin/bash

echo "🧹 Cleaning Next.js cache..."
rm -rf .next

echo "🔄 Killing any running dev servers..."
pkill -f "next dev" 2>/dev/null || true
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

echo "⏳ Waiting 2 seconds..."
sleep 2

echo "🚀 Starting dev server..."
npm run dev

