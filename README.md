This project is the personal website for Luke Needham.
It is hosted at [LukeNeedham.com](https://lukeneedham.com).

It is a Next.js project using React, Typescript, and Chakra UI.

It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Deploy

This project is deployed on Vercel.
It will auto-build and deploy whenever the 'main' branch updates.
Therefore do not push to 'main' with every update, but only when you want to re-deploy.

## Acceptance Deployment

An acceptance deployment is created automatically by Vercel for every pull request.

# Development

## Setup

Setup the project by running: `yarn install`

## Testing

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Blog articles

Articles are markdown files in `content/blog` (the file name is the article id).
To add one, add the markdown file and an entry in `BlogArticleProvider`.

Build time and runtime code are kept separate:

- `scripts/` is **build time only**. `scripts/build-blog.ts` renders the markdown to HTML and compiles the article styling to CSS (from the Chakra theme, so it never needs to be duplicated by hand), writing both to `src/generated` (git-ignored).
  It runs automatically before `yarn dev` and `yarn build`, or manually with `yarn generate`.
  Re-run it after editing a markdown file or the theme while `yarn dev` is running.
- `src/` is the app. It only imports the generated HTML and CSS. It has no markdown, syntax-highlighting or filesystem code.
- Each article is a statically generated page (`generateStaticParams` with `dynamicParams = false`), so it is served as a pre-built HTML file.

# Credits

This website uses the following icons from external sources:

- Puzzle by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/puzzle/" target="_blank" title="Puzzle Icons">Noun Project</a> (CC BY 3.0)
- Sticky notes by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/sticky-notes/" target="_blank" title="sticky notes Icons">Noun Project</a> (CC BY 3.0)
- Decision making by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/decision-making/" target="_blank" title="decision making Icons">Noun Project</a> (CC BY 3.0)
- Project by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/project/" target="_blank" title="Project Icons">Noun Project</a> (CC BY 3.0)
