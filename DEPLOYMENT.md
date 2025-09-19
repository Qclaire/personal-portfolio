# GitHub Pages Deployment Guide

This guide will help you deploy your personal portfolio to GitHub Pages with automated CI/CD.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed

## 🚀 Deployment Steps

### 1. Repository Setup

1. **Create a new repository** on GitHub named `personal-portfolio` (or your preferred name)
2. **Make sure the repository is public** (required for free GitHub Pages)

### 2. Push Your Code

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal portfolio with terminal animation"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/personal-portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select "GitHub Actions"
4. The workflow will automatically trigger on the next push

### 4. Update Repository Name (if different)

If your repository name is different from `personal-portfolio`, update the `next.config.ts`:

```typescript
// Replace 'personal-portfolio' with your actual repository name
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Build and prepare for deployment
- `npm run preview` - Preview the built site locally

## 🌐 Custom Domain (Optional)

If you have a custom domain:

1. Rename `public/CNAME.example` to `public/CNAME`
2. Replace the content with your domain name:
   ```
   yourdomain.com
   ```
3. Configure your domain's DNS to point to GitHub Pages

## 🔄 Automatic Deployments

The CI/CD pipeline will automatically:

1. **Trigger on**:
   - Push to `main` branch
   - Pull requests to `main` branch

2. **Build process**:
   - Install dependencies
   - Run tests (if available)
   - Build the Next.js application
   - Deploy to GitHub Pages

3. **Access your site**:
   - URL: `https://USERNAME.github.io/personal-portfolio/`
   - Replace `USERNAME` with your GitHub username

## 🐛 Troubleshooting

### Common Issues:

1. **404 errors**: Check that your repository name matches the `basePath` in `next.config.ts`

2. **CSS/JS not loading**: Ensure `assetPrefix` is correctly configured

3. **Build failures**: Check the Actions tab in your GitHub repository for error logs

4. **Images not displaying**: Make sure `images.unoptimized: true` is set in `next.config.ts`

### Debug locally:

```bash
# Build and test the static export
npm run build

# Preview the built site
npm run preview
```

## 📁 File Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── .nojekyll              # Disable Jekyll processing
│   └── CNAME.example          # Custom domain configuration
├── next.config.ts             # Next.js configuration for static export
└── package.json               # Updated scripts for deployment
```

## 🎉 Success!

Once deployed, your portfolio will be available at:
`https://USERNAME.github.io/personal-portfolio/`

The site will automatically update whenever you push changes to the main branch!

## 🔒 Security Note

- Repository must be public for free GitHub Pages
- Avoid committing sensitive information
- Environment variables should be added through GitHub repository settings

---

**Happy Deploying! 🚀**