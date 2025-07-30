# Overlook Website

Elegant marketing website for Overlook - AI-powered photography companion app.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
overlook-website-new/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── HeroSection.tsx    # Hero with app showcase
│   ├── FeatureSection.tsx # Feature demonstrations
│   ├── GallerySection.tsx # Photo gallery
│   ├── LearningCenter.tsx # Blog/articles preview
│   ├── TestimonialsSection.tsx # User testimonials
│   ├── PricingSection.tsx # Pricing plans
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # XML sitemap
│   └── manifest.json      # PWA manifest
└── next.config.ts         # Next.js configuration
```

## 🎨 Design System

- **Colors**: Dark theme with gold accents (#FFB800)
- **Typography**: SF Pro Display
- **Components**: Glass morphism effects
- **Animations**: Framer Motion

## 📸 Required Assets

Check `public/placeholder-images.md` for the complete list of images needed.

### Priority Images:
1. iPhone mockup with app (`/iphone-hero.png`)
2. Feature demonstration images
3. Gallery photos (6 examples)
4. Blog article covers

## 🔧 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with metadata
- ✅ Smooth animations on scroll
- ✅ Learning center/blog structure
- ✅ Gallery with filtering
- ✅ Testimonials carousel
- ✅ Pricing comparison

## 📱 Mobile Optimization

- Burger menu navigation
- Touch-friendly interfaces
- Optimized images with lazy loading
- Reduced animations for performance

## 🚀 Deployment

The site is ready for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## 📝 Content Management

To add new blog articles:
1. Create article component in `/app/learn/[slug]/page.tsx`
2. Add to sitemap.xml
3. Update Learning Center featured articles

## 🔍 SEO Checklist

- [x] Meta tags and Open Graph
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Structured data (manifest.json)
- [x] Image optimization
- [x] URL structure
- [ ] Google Analytics (add tracking code)
- [ ] Submit sitemap to Google Search Console