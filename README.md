# Kevin & Tal AI Consulting Website

A modern, Hebrew-language marketing website for Kevin Leaks and Tal Hakooki's AI consulting and training services.

## Overview

This website showcases AI implementation services, workshops, and consulting offerings for Israeli businesses and organizations. Built with cutting-edge web technologies for optimal performance and user experience.

## Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Hebrew RTL Support** - Native right-to-left text support with proper Hebrew typography
- **Modern UI/UX** - Glassmorphism effects, smooth animations, and gradient accents
- **Infinite Scroll Carousel** - Seamless client logos showcase
- **Interactive Components** - Rotating text animations, hover effects, and smooth transitions
- **FAQ Accordion** - Collapsible Q&A section for common questions
- **SEO Optimized** - Semantic HTML and optimized meta tags

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React version
- **[TypeScript](https://www.typescriptlang.org/)** - Full type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality UI components (New York style)
- **[Lucide React](https://lucide.dev/)** - Icon library
- **Custom Animations** - CSS keyframes for carousels and transitions

### Image Optimization
- **[Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)** - Automatic image optimization
- **WebP format** - Modern image formats for better performance

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with RTL support
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles with custom animations
├── components/
│   ├── homepage/
│   │   ├── hero-section.tsx        # Hero with rotating industries
│   │   ├── client-logos-section.tsx # Infinite scrolling logos
│   │   ├── problem-section.tsx     # Problem statement
│   │   ├── faq-section.tsx         # Accordion FAQ
│   │   └── services-section.tsx    # Services showcase
│   ├── shared/
│   │   ├── navigation.tsx          # Sticky navigation bar
│   │   ├── cta-button.tsx          # Call-to-action button component
│   │   ├── section-container.tsx   # Reusable section wrapper
│   │   └── image-placeholder.tsx   # Image placeholder component
│   └── ui/                  # shadcn/ui components
├── public/
│   ├── kevin.webp          # Kevin's profile photo
│   ├── tal.jpg             # Tal's profile photo
│   └── [other images]      # Project images
└── lib/                    # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kevli770/ai-website-kevin-tal.git
cd ai-website-kevin-tal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Key Sections

### Hero Section
- Dynamic rotating industry text animation
- Profile photos of Kevin and Tal
- Trust indicators and social proof statistics
- Dual CTAs for consultation and services

### Client Logos
- Infinite scrolling carousel
- Grayscale to color on hover
- Pause animation on hover
- Seamless loop effect

### Problem Section
- Pain points identification
- Visual representation with image
- Engaging question to prompt action

### FAQ Section
- Collapsible accordion interface
- Comprehensive answers to common questions
- Glassmorphism card design

## Customization

### Colors
The site uses a cyan/blue color scheme defined in Tailwind config:
- Primary: Cyan/Blue gradient
- Background: Dark theme with subtle grid overlay
- Accents: Cyan-300 for highlights

### Typography
- Hebrew-optimized font rendering
- Responsive text sizes (mobile-first)
- Proper RTL text alignment

### Animations
Custom CSS animations in `globals.css`:
- `gradient-fast` - Moving gradient effect
- `scroll` - Infinite carousel scroll
- Fade transitions for rotating text

## Deployment

### Vercel (Recommended)
Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms
Compatible with any Next.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render

## Content Management

To update content:
1. **Navigation Links**: Edit `components/shared/navigation.tsx`
2. **Hero Industries**: Edit `rotatingIndustries` array in `components/homepage/hero-section.tsx`
3. **Client Logos**: Edit `clients` array in `components/homepage/client-logos-section.tsx`
4. **FAQ Items**: Edit `faqs` array in `components/homepage/faq-section.tsx`

## Performance Optimizations

- Static page generation for instant loading
- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Minimal JavaScript bundle size
- CSS animations instead of JavaScript for better performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a private project for Kevin & Tal AI Consulting. For internal updates, please coordinate with the team.

## License

All rights reserved - Kevin Leaks & Tal Hakooki

## Contact

For business inquiries:
- Website: [Live site when deployed]
- YouTube: [@kevintal](https://youtube.com/@kevintal)
- WhatsApp: [Group link]
- Facebook: [facebook.com/kevintal](https://facebook.com/kevintal)

---

**Built with modern web technologies by Kevin & Tal**
# Trigger deployment
