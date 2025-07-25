# Overlook Website

Simple landing page for Overlook camera app with Privacy Policy and Terms of Service.

## Structure

- `index.html` - Main landing page
- `privacy.html` - Privacy Policy page
- `terms.html` - Terms of Service page
- `style.css` - Shared styles
- `vercel.json` - Vercel configuration for clean URLs

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set up custom domain in Vercel dashboard

### Option 2: Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push these files to the repository
3. Enable GitHub Pages in repository settings
4. Add CNAME file with your domain

### Option 3: Deploy to Netlify

1. Drag and drop the folder to [Netlify](https://app.netlify.com/drop)
2. Configure custom domain in settings

## Domain Setup

After deployment, you'll need to:

1. Purchase the domain `overlook.app`
2. Point DNS to your hosting provider
3. Enable HTTPS (automatic on Vercel/Netlify)

## Updates

To update content, edit the HTML files and redeploy. The privacy policy and terms are based on the content from the iOS app.