# Melike Yusufoglu — Portfolio

A dark-themed developer portfolio built with **React + TypeScript + Tailwind CSS** (Vite), inspired by the layout style of brian-holt-portfolio.replit.app: hero intro, about, work experience timeline, skills grid, and contact section.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/data.ts` — all personal content (name, summary, skills, experience, education). Edit this file to update the site's content without touching components.
- `src/components/` — Navbar, Hero, About, Experience, Skills, Contact, Footer.
- `public/MelikeYusufogluResume.pdf` — linked from the "Resume" button in the nav.
- Tailwind theme (accent cyan color, dark background) is configured in `tailwind.config.js`.

## Notes

This was generated in a sandboxed environment without npm registry access, so dependencies haven't been installed or build-verified here — run `npm install` locally to pull in React, Tailwind, and TypeScript, then `npm run dev` to confirm everything renders as expected.
