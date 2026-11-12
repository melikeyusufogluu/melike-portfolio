# Melike Yusufoglu — Portfolio

**Live site:** [melike-portfolio-omega.vercel.app](https://melike-portfolio-omega.vercel.app)

A warm, personal portfolio built with **React + TypeScript + Tailwind CSS** (Vite): a mahogany hero with an arched photo, project cards, a Tekirdağ → Stuttgart journey route, experience, skills from the CV, and contact.

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

- `src/data.ts` — all content (profile, projects, journey, experience, skills, languages, interests). Edit this file to update the site without touching components.
- `src/components/` — Header, Hero, Work, Experience (also skills and "Off the clock"), Contact, and a shared `Section`.
- `public/melike.jpg` — profile photo. `public/MelikeYusufogluResume.pdf` — the CV linked from "Resume".
- Colors are CSS variables in `src/index.css`, mapped to Tailwind in `tailwind.config.js`.
