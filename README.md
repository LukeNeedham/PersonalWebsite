<!-- Generated from readme.yml by LukeNeedham/ci-workflows (docs/readme.md). Edit readme.yml, not this file. -->
# PersonalWebsite

The personal website of Luke Needham.

[Website](https://lukeneedham.com)

## Description

My personal website, including an overview of my projects and my blog.

## Getting started as a developer

Requirements: Node.js 24 and yarn.

```
git clone https://github.com/LukeNeedham/PersonalWebsite.git
cd PersonalWebsite
yarn install
yarn dev          # the site at http://localhost:3000
yarn lint         # the checks of CI
yarn format       # fix the formatting
yarn typecheck    # the types
yarn test         # unit tests
yarn build        # the production build
```

Every pull request gets a preview on Vercel, which CI links in a comment, and `main` is deployed by Vercel, so do not push to `main` for any other reason than to release.

Like all my websites, it follows the shared architecture and conventions (Next.js, TypeScript, Chakra UI, MVVM with every page split into a `Page` and a `PageContent`): see [ci-workflows](https://github.com/LukeNeedham/ci-workflows/blob/main/docs/next-js-app.md).

### Blog articles

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

`scripts/` is **build time only**: `scripts/build-blog.ts` renders the markdown to HTML, lists the articles from their
front matter and compiles the article styling to CSS (from the Chakra theme), writing both to `src/generated`
(git-ignored). It runs before `yarn dev`, `yarn typecheck`, `yarn test` and `yarn build`, or manually with `yarn generate`;
re-run it after editing a markdown file or the theme while `yarn dev` is running. `src/` only imports the generated output.
Each article is a statically generated page.

## Credits

See [CREDITS.md](CREDITS.md).

## License

All rights reserved. See [LICENSE](LICENSE).
