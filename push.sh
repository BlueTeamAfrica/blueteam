#!/bin/bash

echo "🚀 Preparing to push changes..."
echo ""

# Stage all changes
echo "📦 Staging changes..."
git add -A

# Show status
echo ""
echo "📋 Changes to be committed:"
git status --short

# Commit
echo ""
echo "💾 Committing changes..."
git commit -m "feat: standardize interior pages, enhance hero section, optimize images

- Standardized all interior page templates with consistent padding and backgrounds
- Fixed hero section image loading with proper CSS overlay
- Added image optimization scripts and documentation
- Fixed broken blog image reference
- Created developer tools for server management
- Improved mobile responsiveness for hero section"

# Push
echo ""
echo "⬆️  Pushing to remote..."
git push origin main

echo ""
echo "✅ Push complete!"

