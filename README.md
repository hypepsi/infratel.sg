# Infratel.sg - Landing Page

A modern, high-converting landing page for a fictional Singapore telecom operator.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Mobile-first approach)
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

### Core Features
- ✅ Sticky responsive header with mobile menu
- ✅ Enhanced Hero section with modern statistics cards
- ✅ 3-tier pricing grid with highlighted "Best Seller" plan
- ✅ Features showcase with icons
- ✅ Roaming banner section
- ✅ Comprehensive footer with social links
- ✅ Mobile-responsive design
- ✅ Professional "Singtel-inspired" aesthetic

### Complete Pages (No 404 Errors!)
- ✅ **Plans Page** - Detailed pricing with FAQ
- ✅ **Coverage Page** - Network coverage information
- ✅ **Roaming Page** - International roaming rates
- ✅ **Broadband Page** - Home fiber plans
- ✅ **Business Page** - Enterprise solutions
- ✅ **Rewards Page** - Loyalty program
- ✅ **About Page** - Company information
- ✅ **Contact Page** - Multiple contact methods
- ✅ **Login Page** - User authentication

### Singapore Localization
- 💰 SGD pricing with GST
- 📍 Real Singapore locations (Orchard, VivoCity, Tampines)
- 🏢 Local business features (Singpass, NTUC, Grab)
- 🇸🇬 Authentic Singapore telecom market approach

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
infratel-landing/
├── app/
│   ├── about/page.tsx        # About us page
│   ├── broadband/page.tsx    # Broadband plans
│   ├── business/page.tsx     # Business solutions
│   ├── contact/page.tsx      # Contact page
│   ├── coverage/page.tsx     # Network coverage
│   ├── login/page.tsx        # User login
│   ├── mobile/page.tsx       # Redirects to plans
│   ├── plans/page.tsx        # Mobile plans detail
│   ├── rewards/page.tsx      # Rewards program
│   ├── roaming/page.tsx      # Roaming services
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Sticky navigation
│   ├── Hero.tsx              # Enhanced hero section
│   ├── PricingGrid.tsx       # Pricing cards
│   ├── Features.tsx          # Features grid
│   ├── RoamingBanner.tsx     # Roaming CTA banner
│   └── Footer.tsx            # Footer with links
├── public/                   # Static assets
├── DEPLOYMENT.md             # Production deployment guide
├── CHANGELOG.md              # Detailed update log
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Design System

### Colors

- **Primary Red**: `#E3002D` (Infratel Red)
- **Dark Red**: `#D32F2F` (Hover states)
- **Text**: `#1F2937` (Dark Slate Grey)
- **Background**: White with `#F3F4F6` sections

### Typography

- Font: Inter (Google Fonts)
- Headings: Bold, tight tracking
- Body: Regular weight, comfortable line height

## Pricing Plans

All prices are GST inclusive:

1. **SIM Only Lite** - $18.00/mth (Students/Seniors)
   - 20GB data, Unlimited calls/SMS
2. **5G Pro** - $28.50/mth (Best Seller) ⭐
   - 100GB 5G data, 5GB roaming
3. **Elite Travel** - $45.00/mth (Frequent Travelers)
   - Unlimited data, 20GB global roaming

Visit `/plans` for detailed comparison and FAQ.

## Deployment

Ready for production! See `DEPLOYMENT.md` for complete deployment guide with:
- Vercel deployment (10 minutes)
- Docker + Nginx setup
- PM2 + Nginx configuration
- SSL certificate installation
- DNS configuration

Quick deploy with Vercel:
```bash
git init
git add .
git commit -m "Initial commit"
# Push to GitHub and deploy via Vercel dashboard
```

Or deploy locally with PM2:
```bash
npm run build
npm install -g pm2
pm2 start npm --name infratel -- start
```

## Updates

See `CHANGELOG.md` for detailed list of updates and improvements.

**Latest Update (2026-01-09):**
- ✨ Enhanced Hero UI with modern gradient cards
- 🆕 9 new functional pages (no more 404s!)
- 🇸🇬 Complete Singapore localization
- 📱 All navigation links working
- 🚀 Production deployment ready

## License

This is a fictional project for demonstration purposes.

© 2026 Infratel Pte Ltd. Co. Reg. No. 202518888K.
