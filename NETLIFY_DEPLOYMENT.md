# Deploy to Netlify - Complete Guide

Your Next.js project is now ready for Netlify deployment! Here's how to get it live:

## 🚀 Quick Start (Recommended)

### Option 1: Deploy via Git (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"

3. **Connect your repository**:
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository
   - Netlify will auto-detect the build settings from `netlify.toml`

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a random URL like `https://amazing-cupcake-123456.netlify.app`

### Option 2: Manual Deploy (Drag & Drop)

1. **Build your project locally**:
   ```bash
   npm run build
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up or log in
   - Drag and drop the `out` folder onto the deploy area

## 📁 Project Configuration

Your project has been configured with the following files:

### `netlify.toml`
- Tells Netlify to publish the `out` directory
- Sets up proper redirects for SPA routing
- Configures Node.js version for builds

### `next.config.js`
- Configured for static export (`output: 'export'`)
- Images are unoptimized for static hosting
- Trailing slashes enabled for better static hosting

## 🛠️ Build Settings

**Build command**: `npm run build`
**Publish directory**: `out`
**Node.js version**: 18

These are automatically configured in `netlify.toml`, so you don't need to set them manually.

## 🌐 Custom Domain (Optional)

After deployment, you can:

1. **Custom subdomain**:
   - Go to Site settings → Domain management
   - Click "Change site name"
   - Choose a custom subdomain

2. **Custom domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow the DNS configuration instructions

## 🔧 Environment Variables

If your app needs environment variables:

1. Go to Site settings → Environment variables
2. Add your variables (they should start with `NEXT_PUBLIC_` for client-side access)

## 📊 Build Status

After each deployment, you can:
- View build logs in the Netlify dashboard
- See deployment history
- Roll back to previous versions if needed

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 Errors
- The `netlify.toml` includes redirects to handle SPA routing
- If you add new routes, they should work automatically

### Images Not Loading
- Make sure image paths are relative
- Images in `public/` folder should work automatically

## 🚀 Your site is ready!

Once deployed, your site will:
- ✅ Automatically rebuild when you push to your repository
- ✅ Have HTTPS enabled by default
- ✅ Include form handling (Netlify forms)
- ✅ Support branch previews for pull requests

## Next Steps

1. **Set up continuous deployment** by connecting your Git repository
2. **Configure a custom domain** if desired
3. **Set up form handling** if you have contact forms
4. **Enable analytics** in your Netlify dashboard

Your Bravos Automation site is now production-ready! 🎉