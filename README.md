# Evan Gribar Portfolio

Bold, editorial, one-page portfolio focused on two flagship products:

- `https://www.weekendly.co`
- `https://www.intrn.co`

## Stack

- React 19 + Vite 7
- TailwindCSS + custom CSS visual system
- Framer Motion for reveal choreography
- Formspree for contact handling

## Local Development

```bash
npm install
npm run dev
```

## Build Commands

- `npm run build`: Standard production build (best for Vercel/Netlify/custom domain hosts)
- `npm run build:gh`: GitHub Pages-compatible build with `/Evan-Gribar-Portfolio/` base path

## Deploy to Vercel

1. Import this repository in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

`vercel.json` is included with a rewrite rule to route all paths to `index.html` for SPA safety.

## Deploy to Netlify

1. New site from Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `predeploy` (`npm run build:gh`) and publishes `dist` with the correct repository base path.
