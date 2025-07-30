# Overlook Website - Project Memory

## Project Overview
This is the marketing website for Overlook, a photography learning app. The website is built with Next.js 15 and deployed on GitHub Pages.

## Key URLs
- **Live Site**: https://raw3hape.github.io/overlook-website/
- **GitHub Repository**: https://github.com/Raw3hape/overlook-website

## Technical Stack
- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (static export)
- **Build Output**: `/out` directory

## Project Structure
```
overlook-website-new/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── privacy/page.tsx   # Privacy policy page
│   └── terms/page.tsx     # Terms of service page
├── components/            # React components
│   ├── HeroSection.tsx    # Landing hero with app screenshot
│   ├── FeatureSection.tsx # Main features showcase
│   ├── HowItWorks.tsx     # 4-step process explanation
│   ├── ResultsGallery.tsx # Example photos gallery
│   ├── TestimonialsSection.tsx # User testimonials
│   ├── CTASection.tsx     # Bottom call-to-action
│   └── Footer.tsx         # Site footer
├── public/               
│   ├── images/           # All website images
│   └── manifest.json     # PWA manifest
├── styles/
│   └── globals.css       # Global styles and Tailwind
└── out/                  # Build output for GitHub Pages
```

## Important Configuration
1. **Base Path**: `/overlook-website` - All asset paths must include this prefix
2. **Output**: Static export configured for GitHub Pages
3. **Images**: All images must be in `/public/images/` and referenced with full base path

## Key Images and Their Usage
- **Hero Section**: `/overlook-website/images/Frame 23.png` (app analysis screen)
- **AI-Powered Analysis**: `/overlook-website/images/6x9_1-1.png` (progress tracking)
- **Photography Challenges**: `/overlook-website/images/Frame 22.png`
- **Learn While Shooting**: `/overlook-website/images/6x9_1.png`
- **CTA Section**: `/overlook-website/images/iPhone.png` (iPhone mockup)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Clean rebuild
rm -rf .next node_modules out && npm install && npm run build
```

## Deployment Process
1. Make changes to source files
2. Run `npm run build` to generate static files
3. Commit both source files and `/out` directory
4. Push to GitHub: `git push origin main`
5. GitHub Pages automatically serves from `/out` directory

## Common Issues and Solutions

### Issue: Changes not appearing on live site
**Solution**: Ensure you:
1. Run `npm run build` after changes
2. Commit the `/out` directory (not ignored in .gitignore)
3. Push to GitHub
4. Wait 2-5 minutes for GitHub Pages to update

### Issue: Images not loading
**Solution**: Always use full base path: `/overlook-website/images/filename.png`

### Issue: Manifest.json 404 error
**Solution**: Ensure manifest.json exists in `/public/` and is included in build

## Recent Changes (Jan 30, 2025)
1. Replaced hero image with Frame 23.png (app analysis screen)
2. Moved iPhone mockup from hero to CTA section
3. Added 6x9_1-1.png to AI-Powered Analysis feature
4. Removed "Track Your Progress" section from HowItWorks component
5. Removed all fake App Store metrics (ratings, user counts)
6. Added proper .gitignore configuration

## Component Details

### HeroSection.tsx
- Main landing section with app screenshot
- Download buttons (currently show "Coming soon to the App Store")
- No fake metrics - only truthful information

### FeatureSection.tsx
- Three main features with alternating layout
- Each feature has icon, title, description, bullet points, and image
- Images displayed without glass effects or yellow glow

### TestimonialsSection.tsx
- User testimonials in card format
- Shows only real data: "50+ Photo Challenges"
- No fake ratings or user counts

### CTASection.tsx
- Bottom call-to-action with iPhone mockup
- Download buttons
- "Coming soon to the App Store" messaging

## Style Guidelines
- **Colors**: Dark theme with gold accents (#FFD700)
- **Gradient**: `text-gradient` class for gold text effects
- **Spacing**: Consistent padding/margins using Tailwind classes
- **Animations**: Subtle Framer Motion animations on scroll

## Important Notes
- **No Fake Data**: Never show fake App Store ratings, user counts, or reviews
- **Image Effects**: Removed glass cards and yellow glow effects per user request
- **Russian Context**: User sometimes communicates in Russian - be prepared to understand context
- **Git LFS**: Previously had issues with Git LFS - now using regular Git for images

## Future Considerations
- Add actual App Store links when app is published
- Create icon-192.png and icon-512.png for manifest
- Consider adding more SEO optimizations
- May need to update testimonials with real user feedback