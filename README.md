# Morabi Merge Solutions — Website

A modern, full-featured software house website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 🌐 Live Demo
Deploy to Vercel and update the URL in `src/app/layout.tsx` → `openGraph.url`

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (SEO, fonts, nav/footer)
│   ├── globals.css           # Global styles & design tokens
│   ├── projects/page.tsx     # Projects page (dynamic GitHub)
│   ├── team/page.tsx         # Team page
│   ├── services/page.tsx     # Services page
│   └── contact/page.tsx      # Contact page with form
├── components/
│   ├── Navbar.tsx            # Responsive navbar
│   ├── Footer.tsx            # Footer with links & socials
│   └── home/
│       ├── HeroSection.tsx   # Hero with gradient headline
│       ├── ServicesSection.tsx
│       ├── FeaturedProjects.tsx
│       ├── HowWeWork.tsx
│       ├── Testimonials.tsx
│       └── CTABanner.tsx
└── lib/
    └── github.ts             # GitHub API utility (multi-user, cached)
public/
└── logo.svg                  # Brand logo (replace with actual PNG/SVG)
```

---

## 🔧 Customization Guide

### 1. Replace the Logo
Place your logo file in `/public/` as either:
- `logo.svg` (SVG — already configured)
- `logo.png` (PNG — update image src in `Navbar.tsx` and `Footer.tsx`)

The logo provided in your request should be saved as `public/logo.png` and the image `src` attributes updated accordingly.

### 2. Update Team Information
Edit `src/app/team/page.tsx` — the `team` array holds all member data:
- Name, role, bio, skills
- GitHub and LinkedIn URLs

### 3. Update Contact Details
- Email: search for `morabimergesolutions@gmail.com`
- WhatsApp: update the `https://wa.me/923000000000` link in `contact/page.tsx`
- Instagram: already configured as `@morabimergesolutions`

### 4. GitHub Projects (Dynamic)
Projects are fetched live from GitHub. The three accounts are defined in `src/lib/github.ts`:
```ts
const TEAM_MEMBERS = ["RabailB", "mohsinabbas2263", "abiha-Shamshad"];
```
Add a GitHub token to avoid rate limits (60 req/hr unauthenticated → 5,000/hr with token):

### 5. Testimonials
Edit the `testimonials` array in `src/components/home/Testimonials.tsx` to add real client reviews.

### 6. Contact Form
The current form simulates submission. To wire it up for real:

**Option A — Formspree (easiest):**
```bash
# Replace the handleSubmit in contact/page.tsx:
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
# Then follow EmailJS docs for client-side email sending
```

**Option C — Next.js API Route** (already scaffolded structure):
Create `src/app/api/contact/route.ts` with a POST handler using Nodemailer.

---

## 🌍 Environment Variables

Create a `.env.local` file:

```env
# Optional: GitHub token to avoid API rate limits
# Create at: https://github.com/settings/tokens (needs no special scopes for public repos)
NEXT_PUBLIC_GITHUB_TOKEN=ghp_xxxxxxxxxxxx

# Your deployed site URL
NEXT_PUBLIC_SITE_URL=https://morabimergesolutions.vercel.app
```

---

## 🚢 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration (Recommended)
1. Push code to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Add environment variables: `NEXT_PUBLIC_GITHUB_TOKEN`
6. Click **Deploy** ✓

### Option 3: Vercel Button
Add this to your README for one-click deploy:
```
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)
```

---

## 🎨 Color Tokens

| Token | Color | Usage |
|-------|-------|-------|
| Background | `#0F172A` | Page background |
| Card | `#1E293B` | Card surfaces |
| Accent | `#7C3AED` | Primary purple |
| Highlight | `#06B6D4` | Secondary cyan |
| Text | `#F8FAFC` | Primary text |
| Muted | `#94A3B8` | Secondary text |

All tokens are defined in `src/app/globals.css` as CSS variables.

---

## 📱 Features

- ✅ **Responsive** — Mobile-first, works on all screen sizes
- ✅ **Dark mode** by default
- ✅ **Dynamic GitHub Projects** — Aggregated from 3 accounts, filtered and sorted
- ✅ **Project search + filters** — All / Web / Frontend / Backend
- ✅ **Animated hero** with gradient text
- ✅ **SEO optimized** — Meta tags, OG tags, structured layout
- ✅ **Contact form** — With validation and success state
- ✅ **Team profiles** — With LinkedIn & GitHub links
- ✅ **Services page** — Detailed with feature lists and pricing
- ✅ **GitHub API caching** — 10-minute in-memory cache

---

Built with ❤️ by Morabi Merge Solutions
