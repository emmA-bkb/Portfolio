# Portfolio

Personal portfolio website of **emmA**, a full-stack Roblox developer. Built with Next.js, TypeScript, and Tailwind CSS, and deployed as a static export to GitHub Pages.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — produce a static export in `out/`
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  app/          # App Router pages, layout, and global styles
  components/   # Reusable UI components
public/         # Static assets (images, project videos)
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages.
