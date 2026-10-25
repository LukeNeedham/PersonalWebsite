---
name: add-blog-post
description: Add a new blog post to the personal website from markdown the user provides. Use when the user wants to add, publish or write a new blog post/article and gives (or points to) the markdown.
---

# Add a blog post

Blog posts are markdown files rendered to static HTML at build time (see "Blog articles" in `README.md`).
Adding one means: a markdown file, a provider entry, a thumbnail, then verify, commit and open a PR.
Do all of it; don't hand the user a checklist.

## 1. Gather what you need

From the user's request, get:

- **Markdown** for the post (pasted, or a file path).
- **Title** (shown on the page and in the blog list).
- **Thumbnail image**: required. It is shown square (180x180) in the blog list. The user may attach or point to an image.
- **Publish date**: use the one given. If none is given, use today's date and say so.

Ask the user only for what is missing and can't be defaulted: usually the title and the thumbnail.

## 2. Pick the id

The id is a lowercase kebab-case slug of the title, e.g. `string-provider`.
It is the markdown file name, the URL (`/blog/<id>`) and the thumbnail name.
It must be unique: check `content/blog/` and `BlogArticleProvider.ts`.

## 3. Add the files

1. **Markdown**: write it to `content/blog/<id>.md`.
   - Do **not** put the title or date in the markdown. The page renders them itself.
   - Existing posts open with an intro paragraph (no heading) and use `##` for sections. `#` and `##` render identically. Keep the user's content as written; only fix a leading `# Title` that duplicates the page title, and mention it if you do.
   - Code blocks need a language (` ```kotlin `) to be syntax highlighted.
   - Any images the post uses go in `public/asset/image/blog/` and are referenced with absolute paths (`/asset/image/blog/<name>.png`).
2. **Thumbnail**: save it as `public/asset/image/blog/<id>.png` (keep the user's format and extension if not png, and match it in the provider).
3. **Register it** in `src/domain/provider/BlogArticleProvider.ts`: add an entry to `articlesMap` and follow the existing entries exactly:
   ```ts
   myPost: {
       id: 'my-post',                              // must equal the markdown file name
       title: 'My Post',
       image: '/asset/image/blog/my-post.png',
       publishDate: new LocalDate(25, 10, 2026),   // LocalDate(day, month, year)
   },
   ```
   Don't sort or reorder; articles are sorted by date automatically.

Never edit `src/generated/`. It is git-ignored build output.

## 4. Verify

Dependencies must be installed (`yarn install --ignore-engines` if `node_modules` is missing and the local Node isn't 24).

1. Run `npm run build`. It runs `scripts/build-blog.ts` first (markdown to HTML) and then `next build`.
   - The build fails with `No generated HTML for article '<id>'` if the provider id and the markdown file name differ.
   - `/blog/<id>` must be listed under `/blog/[id]` as a static (SSG) page.
2. Confirm the HTML exists and has the content: `grep -c "<a distinctive phrase from the post>" .next/server/app/blog/<id>.html`.
3. Run `npm run lint` and `npx tsc --noEmit`.
4. Optional but recommended for a visual check: `npx next start -p <port>`, screenshot `/blog/<id>` and `/blog` with Playwright, and look at them. Kill the server afterwards.

If the user is running `yarn dev`, tell them to run `yarn generate` once, since dev only generates the HTML at startup.

## 5. Commit and open a PR

- Work on a feature branch (never push straight to `main`: it auto-deploys).
- Commit only the markdown, the thumbnail (and any post images) and the provider change.
- Push and open a PR. In the description, give the post title, id, date used, and note anything you changed in the markdown.
- The Vercel preview of the PR shows the post; link it for the user once it is ready.
