# Next.js Fullstack Boilerplate

A modern, production-ready Next.js boilerplate with a complete tech stack for building fullstack applications.

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React version
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible UI components (New York style)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classNames utility

### Authentication
- **[Clerk](https://clerk.com/)** - Complete user management and authentication

### Design Patterns
- **Kibo-UI Patterns Registry** - Custom component patterns integration
  - Connected via local patterns registry at `http://localhost:3000/r/{name}.json`

## Features

- ✅ **App Router** - Latest Next.js routing system
- ✅ **TypeScript** - Full type safety
- ✅ **Authentication Ready** - Clerk integration
- ✅ **UI Components** - shadcn/ui pre-configured
- ✅ **Custom Patterns** - Kibo-UI registry integration
- ✅ **Tailwind CSS 4** - Latest styling framework
- ✅ **ESLint** - Code linting configured
- ✅ **Responsive** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/next-fullstack-boilerplate.git
cd next-fullstack-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Clerk API keys to `.env.local`:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── public/               # Static assets
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## shadcn/ui Configuration

This project uses shadcn/ui with the following configuration:
- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

To add new components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Kibo-UI Patterns

This boilerplate connects to a custom patterns registry for advanced UI patterns. The registry is configured in `components.json`:

```json
"registries": {
  "@my-patterns": {
    "url": "http://localhost:3000/r/{name}.json"
  }
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This boilerplate can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Add other environment variables as needed
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this boilerplate for your projects.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ using modern web technologies**
