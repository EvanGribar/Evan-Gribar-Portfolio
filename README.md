# Evan Gribar — Portfolio

My portfolio with selected software projects and relevant experience.

**Website:** https://evan-gribar-portfolio.vercel.app/

The animated examples on the site illustrate how the projects work. They are **not live product runs** or evidence of external usage. See the underlying repositories for implementation and documentation:

- [SemVerge](https://github.com/EvanGribar/semverge) — release automation for GitHub.
- [Swarm Review](https://github.com/EvanGribar/Swarm-Review) — AI-assisted pull request review GitHub Action.

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
