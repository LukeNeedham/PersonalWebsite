<!-- Generated from readme.yml by LukeNeedham/ci-workflows (docs/readme.md). Edit readme.yml, not this file. -->
# PersonalWebsite

The personal website of Luke Needham.

[Website](https://lukeneedham.com)

## Description

The source of [lukeneedham.com](https://lukeneedham.com): Luke Needham's personal website, with his projects and a blog.
It is a Next.js project using React, TypeScript and Chakra UI.

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

Articles are markdown files in `content/blog` (the file name is the article id).
To add one, add the markdown file and an entry in `BlogArticleProvider`.

`scripts/` is **build time only**: `scripts/build-blog.ts` renders the markdown to HTML and compiles the article styling
to CSS (from the Chakra theme), writing both to `src/generated` (git-ignored). It runs before `yarn dev`, `yarn typecheck`
and `yarn build`, or manually with `yarn generate`; re-run it after editing a markdown file or the theme while `yarn dev`
is running. `src/` only imports the generated output. Each article is a statically generated page.

## Credits

This website uses the following icons from external sources:

- Puzzle by Yoyon Pujiyono from [Noun Project](https://thenounproject.com/browse/icons/term/puzzle/) (CC BY 3.0)
- Sticky notes by Yoyon Pujiyono from [Noun Project](https://thenounproject.com/browse/icons/term/sticky-notes/) (CC BY 3.0)
- Decision making by Yoyon Pujiyono from [Noun Project](https://thenounproject.com/browse/icons/term/decision-making/) (CC BY 3.0)
- Project by Yoyon Pujiyono from [Noun Project](https://thenounproject.com/browse/icons/term/project/) (CC BY 3.0)

## Contributing

Branch from `main`, make the change, and open a pull request. CI must be green before it is merged.

## License

All rights reserved. See [LICENSE](LICENSE).
