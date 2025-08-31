# Deploy to Vercel

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

1. **GitHub Account**: Make sure your project is pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `portfolio-website` (if your project is in a subfolder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio-website
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Environment Variables

If you have any environment variables, add them in the Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add any required variables

## Custom Domain (Optional)

1. **Add Domain**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain

2. **Configure DNS**
   - Follow Vercel's DNS configuration instructions
   - Update your domain provider's DNS settings

## Automatic Deployments

- Every push to your `main` branch will trigger a new deployment
- Pull requests will create preview deployments
- You can configure branch protection rules in GitHub

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### Common Vercel Build Issues
- **"vite: command not found"**: Make sure Vite is in `dependencies`, not `devDependencies`
- **Build timeout**: Check for large dependencies or slow build processes
- **Missing dependencies**: Ensure all build-time dependencies are in `dependencies`

### Performance Issues
- The `vercel.json` file includes optimizations for:
  - Asset caching
  - Security headers
  - Build optimization

### Common Issues
- **404 Errors**: Ensure your React Router is configured for SPA
- **Build Failures**: Check that all imports are correct
- **Styling Issues**: Verify Tailwind CSS is building correctly

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
