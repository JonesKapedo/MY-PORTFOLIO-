# Great Turbinez Portfolio

AI & Automation studio based in Naivasha, Kenya — working all over.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/JonesKapedo/MY-PORTFOLIO-.git
cd MY-PORTFOLIO-

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

## 📦 Adding Logo Images

**Important:** After pulling this branch, you need to add the logo images to the `public` folder:

1. Download your logo images (the ones you uploaded in chat)
2. Rename them to:
   - `logo-square.jpg` - for the square/circular logo variant
   - `logo-banner.jpg` - for the horizontal banner variant
3. Place both files in the `public/` directory

Your `public/` folder should contain:
```
public/
├── logo-square.jpg    ← Add this
├── logo-banner.jpg    ← Add this
├── favicon.svg
├── og.jpg
└── ...
```

## 🌍 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your changes to GitHub:
   ```bash
   git push origin update-branding-images
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository: `JonesKapedo/MY-PORTFOLIO-`

5. Vercel will auto-detect the Vite configuration

6. Click "Deploy"

7. Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
src/
├── components/
│   ├── logo.tsx          ← New Logo component (replaces portrait)
│   ├── portrait.tsx      ← Old component (can be removed)
│   └── ...
├── routes/
│   ├── index.tsx         ← Homepage (updated)
│   ├── contact.tsx       ← Contact page (updated)
│   ├── portfolio.tsx
│   └── services.tsx
├── lib/
│   └── site.ts           ← Site config (updated with nationwide coverage)
└── ...
```

## 🎨 Key Changes in This Branch

1. **New Logo Component** (`src/components/logo.tsx`)
   - Supports both square and banner variants
   - Maintains the same styling as the old Portrait component
   - Responsive sizing

2. **Updated Homepage** (`src/routes/index.tsx`)
   - Uses Logo instead of Portrait
   - Updated copy: "Based in Naivasha, working all over"
   - Emphasizes nationwide service

3. **Updated Contact Page** (`src/routes/contact.tsx`)
   - Uses Logo component
   - Maintains all existing functionality

4. **Site Configuration** (`src/lib/site.ts`)
   - Changed stats from "Naivasha" to "Nationwide"
   - Added `coverage` field to COMPANY object

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📝 Environment Setup

The project is already configured for Vercel with `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures client-side routing works correctly in production.

## 🎯 Next Steps

1. **Add the logo images** to the `public/` folder (see instructions above)
2. **Test locally**: `npm run dev`
3. **Create a PR** to merge `update-branding-images` into `master`
4. **Deploy to Vercel** using GitHub integration
5. **Custom Domain** (optional): Add your domain in Vercel dashboard

## 📧 Contact

Email: admin.greatturbinez@gmail.com

---

Built with React, TypeScript, TanStack Router, and Tailwind CSS.
