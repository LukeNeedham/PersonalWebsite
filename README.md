This project is the personal website for Luke Needham.
It is hosted at [LukeNeedham.com](https://lukeneedham.com).

It is a Next.js project using React, TypeScript, and Chakra UI. It follows the standard of the `next-js` stack of
[`LukeNeedham/ci-workflows`](https://github.com/LukeNeedham/ci-workflows) (`docs/next-js-app.md` there): TypeScript only, a
stateless `XPageContent` for the UI of every page, the alias `@/` for imports, and Prettier, ESLint and Vitest in CI.

# Deploy

This project is deployed on Vercel.
It will auto-build and deploy whenever the 'main' branch updates.
Therefore do not push to 'main' with every update, but only when you want to re-deploy.

## Acceptance Deployment

An acceptance deployment is created automatically by Vercel for every pull request.

# Development

## Setup

Setup the project by running: `yarn install`

## Running

```bash
yarn dev          # the development server: http://localhost:3000
yarn lint         # ESLint and Prettier (yarn format fixes the formatting)
yarn typecheck
yarn test
yarn build
```

CI runs `lint`, `typecheck`, `test` and `build` on every pull request, and Vercel deploys a preview of it.

## How the code is organised

- `src/app/`: the routes, and nothing else. A `page.tsx` only renders the page of its feature.
- `src/domain/`: what the site knows, with no UI. `model/` holds plain types and `provider/` holds the objects that hand out data (`UrlProvider` has every route).
- `src/presentation/`: everything on screen. `common/` is shared, `theme/` is the Chakra theme with the text styles, and `feature/<name>/` is one folder per page.
- **A page is `XPage` and `XPageContent`**, each in its own file, with `XUiState` next to them. `XPage` reads what the page shows from the providers (or, for a page with state, from `useXViewModel`) and hands it down, with no UI of its own. `XPageContent` is stateless and is all of the page's UI: it takes `XUiState` and, when there is something to do, one callback per user action. That makes it easy to test.
- Imports use the alias `@/` (the folder `src/`), never `../`. There is no JavaScript: the lint fails any `.js`, `.jsx`, `.mjs` or `.cjs` file.
- Text is sized by the named `textStyles` of the theme, never in a component.

## Blog articles

Articles are markdown files in `content/blog` (the file name is the article id). To add one, add the file: there is no
list to update. It opens with a front matter block, and the page shows the title and date itself, so they are not
repeated in the text:

```
---
title: Video Diary
image: /asset/image/blog/video-diary.png
date: 2025-02-13
---
The first paragraph has no heading, and `##` starts a section.
```

Build time and runtime code are kept separate:

- `scripts/` is **build time only**. `scripts/build-blog.ts` renders the markdown to HTML, lists the articles from their front matter and compiles the article styling to CSS (from the Chakra theme, so it never needs to be duplicated by hand), writing both to `src/generated` (git-ignored).
  It runs automatically before `yarn dev`, `yarn typecheck`, `yarn test` and `yarn build`, or manually with `yarn generate`.
  Re-run it after editing a markdown file or the theme while `yarn dev` is running.
- `src/` is the app. It only imports the generated HTML and CSS. It has no markdown, syntax-highlighting or filesystem code.
- Each article is a statically generated page (`generateStaticParams` with `dynamicParams = false`), so it is served as a pre-built HTML file.

# Credits

This website uses the following icons from external sources:

- Puzzle by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/puzzle/" target="_blank" title="Puzzle Icons">Noun Project</a> (CC BY 3.0)
- Sticky notes by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/sticky-notes/" target="_blank" title="sticky notes Icons">Noun Project</a> (CC BY 3.0)
- Decision making by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/decision-making/" target="_blank" title="decision making Icons">Noun Project</a> (CC BY 3.0)
- Project by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/project/" target="_blank" title="Project Icons">Noun Project</a> (CC BY 3.0)
