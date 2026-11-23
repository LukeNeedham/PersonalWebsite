---
name: add-blog-post
description: Add a new blog post to the personal website from markdown the user provides. Use when the user wants to add, publish or write a new blog post/article and gives (or points to) the markdown.
---

# Add a blog post

Blog posts are markdown files rendered to static HTML at build time (see "Blog articles" in `README.md`).
Adding one means: a markdown file with front matter, a thumbnail, then verify, commit and open a PR.
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
It must be unique: check `content/blog/`.

## 3. Add the files

1. **Markdown**: write it to `content/blog/<id>.md`, opening with front matter:
   ```
   ---
   title: My Post
   image: /asset/image/blog/my-post.png
   date: 2026-10-25
   ---
   ```
   `title`, `image` (the thumbnail, a path under `public`) and `date` (`YYYY-MM-DD`) are all required, and the build fails naming the file if one is missing. There is no list to register the article in: every file in `content/blog` is an article, and they are sorted by date automatically.
   - Do **not** repeat the title or date in the text after the front matter. The page renders them itself.
   - Existing posts open with an intro paragraph (no heading) and use `##` for sections. `#` and `##` render identically. Keep the user's content as written; only fix a leading `# Title` that duplicates the page title, and mention it if you do.
   - Code blocks need a language (` ```kotlin `) to be syntax highlighted.
   - Any images the post uses go in `public/asset/image/blog/` and are referenced with absolute paths (`/asset/image/blog/<name>.png`).
2. **Thumbnail**: save it as `public/asset/image/blog/<id>.png` (keep the user's format and extension if not png, and match it in `image`).

Never edit `src/generated/`. It is git-ignored build output.

## 4. Verify

Dependencies must be installed (`yarn install --ignore-engines` if `node_modules` is missing and the local Node isn't 24).

1. Run `yarn build`. It runs `scripts/build-blog.ts` first (markdown to HTML) and then `next build`.
   - The build fails, naming the file, if the front matter is missing or incomplete.
   - `/blog/<id>` must be listed under `/blog/[id]` as a static (SSG) page.
2. Confirm the HTML exists and has the content: `grep -c "<a distinctive phrase from the post>" .next/server/app/blog/<id>.html`.
3. Run `yarn lint`, `yarn typecheck` and `yarn test` (what CI runs). `yarn format` fixes the formatting that `yarn lint` complains about.
4. Optional but recommended for a visual check: `yarn next start -p <port>`, screenshot `/blog/<id>` and `/blog` with Playwright, and look at them. Kill the server afterwards.

If the user is running `yarn dev`, tell them to run `yarn generate` once, since dev only generates the HTML at startup.

## 5. Commit and open a PR

- Work on a feature branch (never push straight to `main`: it auto-deploys).
- Commit only the markdown, the thumbnail and any post images.
- Push and open a PR. In the description, give the post title, id, date used, and note anything you changed in the markdown.
- The Vercel preview of the PR shows the post; link it for the user once it is ready.
