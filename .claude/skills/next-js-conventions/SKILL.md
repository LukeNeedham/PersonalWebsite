---
name: next-js-conventions
description: Luke Needham's conventions for Next.js websites (stack next-js) - no Android app and no APK, CI that lints and builds, a Vercel preview for every pull request that must open without a login, and how to report the preview. Use when working on a Next.js website repo, changing its build, CI or deployment, or finishing a pull request.
---

# Luke's Next.js website conventions

This folder is copied from `LukeNeedham/ci-workflows` (`skills/next-js-conventions`) by CI, which opens a
"Sync from ci-workflows" PR when it differs, and that PR merges itself once its checks pass. Never edit it here; change it
there. The same goes for the caller in `.github/workflows/`.

The long guide is `docs/next-js-app.md` in that repo. If you can reach GitHub, read it; otherwise the rules below are enough.

## Project
- A website, built with Next.js and React in TypeScript. **No Android app, no APK, no Gradle**: none of the Android or
  Kotlin conventions apply here.
- The project has a **lockfile** (`yarn.lock`, `pnpm-lock.yaml` or `package-lock.json`): CI installs exactly what it says and
  finds the package manager from it. The Node version is `engines.node` in `package.json`.
- `package.json` has the scripts `lint` and `build`; `typecheck` and `test` are run when there are such scripts (a new project has both).
- **Claude cannot run the site's CI.** Run `lint` and `build` locally when `node_modules` is available; otherwise push and read
  the PR's checks.

## Architecture (the standard of `docs/next-js-app.md`)
- Layers: `src/app/` (routes only), `src/domain/` (`model/`, `provider/`, no UI), `src/presentation/` (`common/`, `theme/`,
  `feature/<name>/`).
- **Every page is `XPage` plus a stateless `XPageContent`, always**, each in its own file in `presentation/feature/<x>/`, next to
  `useXViewModel.ts` and `XUiState.ts`. `XPage` is a client component that gets `{ uiState, ...actions }` from `useXViewModel`
  and hands them down, with no UI of its own. `XPageContent` is all of the page's UI: no hooks, no `'use client'`, takes the
  `XUiState` and one callback per user action (state down, events up). A route file only renders `<XPage />`. A reusable
  piece (card, row) is a plain component in its own file, not a page. Never `XView` or `XScreen`.
- **TypeScript only: never write JavaScript**, not a script and not a config (`.ts`, `.tsx`, `.mts`). `allowJs` is off and ESLint
  fails any `.js`, `.jsx`, `.mjs` or `.cjs` file.
- **Imports use the alias `@/`**, never `../` (ESLint fails it).
- Routes live in `UrlProvider`, never typed out in a component. Providers are plain objects, not classes with an instance.
- Text is sized by the theme's named `textStyles` (`mainTitle`, `subTitle`, `body`, `fine`), never in a component.
- `scripts/` runs at build time only and writes to the git-ignored `src/generated/`; `src/` never reads files or builds content.
- Prettier formats (no semicolons, single quotes); `yarn lint` checks it and `yarn format` fixes it.
- Test `XPageContent` by rendering it with a state and clicking, and the view model with `renderHook`.

## CI
- One caller, `.github/workflows/web_pr.yml`, synced from ci-workflows. It lints, tests (if there is a `test` script) and builds
  every PR into `main`, and links the preview. It holds no settings.
- **The preview is Vercel's own**: the repo is connected to a Vercel project, which deploys every PR. CI waits for that
  deployment (no Vercel token) and posts the URL in a PR comment with the header `web-preview-link`. The URL is also in the comment as
  `<!-- preview-url: https://... -->`, which AppHub reads.
- **The preview must open without logging in to Vercel.** Deployment Protection (*Vercel Authentication*) is off for previews in the
  project's settings on Vercel. ci-workflows sets that up (New App does it for a new site, and *Vercel Setup* for an existing one), so
  never change it by hand. CI requests the preview anonymously and fails the PR, saying so, when Vercel asks for a login.
- Production is deployed by Vercel itself when `main` changes: do not merge to `main` for any other reason.

## Finishing work
- **Always give the user the preview URL when work on the site completes.** Once CI's comment has it, paste it into the chat as
  a link on a line of its own.
- **Always give the user the AppHub link too**: `📦 [Open in AppHub](https://www.lukeneedham.com/apphub/pr/<repo name>/<PR number>)`
  on a line of its own, and the same line at the very top of the PR description.
