# Harika Paamu — Data Scientist Portfolio

A production-ready, modular React portfolio built with Vite, TypeScript, Tailwind CSS, and Framer Motion. Converted from a Google Stitch AI design export.

## Tech Stack

- **Vite** — Fast build tooling
- **React 18** — UI framework
- **TypeScript** — Type safety throughout
- **Tailwind CSS** — Utility-first styling with custom design system
- **Framer Motion** — Smooth scroll reveals, hover effects, micro-interactions
- **react-intersection-observer** — Efficient scroll detection

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav with active section tracking
│   │   └── Footer.tsx          # Footer with social links
│   └── sections/
│       ├── HeroSection.tsx     # Hero with floating gauge widget
│       ├── TechBadgesSection.tsx
│       ├── AboutSection.tsx    # About + stats + image
│       ├── SkillsSection.tsx   # Tech stack grid cards
│       ├── ExperienceSection.tsx  # Timeline layout
│       ├── ProjectsSection.tsx    # Bento grid projects
│       └── ContactSection.tsx     # Contact form with validation
├── hooks/
│   ├── useScrollReveal.ts      # Intersection observer hook
│   └── useContactForm.ts       # Form state + validation
├── pages/
│   └── HomePage.tsx            # Assembles all sections
├── utils/
│   ├── animations.ts           # Framer Motion variants
│   └── data.ts                 # All site content (single source of truth)
├── types/
│   └── index.ts                # TypeScript interfaces
├── App.tsx                     # Root with active section tracking
├── main.tsx
└── index.css                   # Tailwind + custom utilities
```

## Customization

All content lives in `src/utils/data.ts` — update your name, experience, projects, skills, and social links there.

To add a resume download, place your `resume.pdf` in the `public/` directory.

## Deployment

```bash
# Build
npm run build

# Deploy dist/ to Vercel, Netlify, or any static host
```
