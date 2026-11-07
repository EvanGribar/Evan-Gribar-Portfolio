# Evan Gribar — Portfolio

My portfolio with selected software projects and relevant experience.

**Website:** https://evan-gribar-portfolio.vercel.app/

The animated project example is illustrative, **not a live product run** or evidence of external adoption. See the underlying repository for implementation and documentation:

- [SemVerge](https://github.com/EvanGribar/semverge) — release automation for GitHub.

## Local development

```sh
npm ci
npm run dev
```

Run lint and build checks:

```sh
npm run lint
npm run build
```

Deploy with the Vite preset on Vercel (output: `dist/`). A separate `npm run build:gh` command supports GitHub Pages. Visual demo source lives under `src/demos/` and `src/stageshow/`; authoring tools under `.agents/skills/` (Codex) and `.claude/skills/` (Claude) are not runtime dependencies.
