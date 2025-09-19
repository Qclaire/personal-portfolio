#!/bin/bash

# Test script for GitHub Pages deployment
# Run this before pushing to ensure everything works correctly

echo "🧪 Testing GitHub Pages Deployment Setup..."

# Check if required files exist
echo "📋 Checking required files..."

if [ -f "next.config.ts" ]; then
    echo "✅ next.config.ts found"
else
    echo "❌ next.config.ts missing"
    exit 1
fi

if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ GitHub Actions workflow found"
else
    echo "❌ GitHub Actions workflow missing"
    exit 1
fi

if [ -f "public/.nojekyll" ]; then
    echo "✅ .nojekyll file found"
else
    echo "❌ .nojekyll file missing"
    exit 1
fi

# Test build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Check if out directory exists
if [ -d "out" ]; then
    echo "✅ Static export directory created"
    echo "📊 Built files:"
    ls -la out/ | head -10
else
    echo "❌ Static export failed"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Ready for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Push to GitHub repository"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Select 'GitHub Actions' as source"
echo "4. Your site will be available at: https://USERNAME.github.io/REPOSITORY-NAME/"