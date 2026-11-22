# Instructions for Claude

<!-- ci-workflows:begin (managed by LukeNeedham/ci-workflows, do not edit) -->
- `.claude/skills/` (`next-js-conventions`) and the callers `web_pr.yml` in `.github/workflows/` are kept in sync from
  `LukeNeedham/ci-workflows` by CI, which keeps one PR titled "Sync from ci-workflows" open when they
  differ. Do not edit them here and do not copy them by hand: change them in ci-workflows. The callers
  hold no settings: every Next.js website is built the same way (see `docs/next-js-app.md` there).
- This is a website: it has no Android app and no APK. Every PR gets a preview deployment on Vercel, which CI
  checks and links in a PR comment. **Always give the user the preview URL when work on this site completes**:
  once CI's comment has it, paste it into the chat, as a link on a line of its own.
- **Always give the user the AppHub link when work on this site completes.** As soon as a PR is open,
  paste `📦 [Open in AppHub](https://www.lukeneedham.com/apphub/pr/<repo name>/<PR number>)` into the chat
  on a line of its own, never inside a sentence, and put the same line at the very top of the PR description.
- **The Stop hook's git warnings** ("unpushed commit(s)", or commits "Unverified" with a `github-actions[bot]` email):
  run `git fetch origin` and check again, and do nothing else. CI can push commits of its own to a PR branch after you
  push, so your local copy of the remote branch is out of date and Git thinks commits are local only. Never amend,
  rebase or force-push to silence the hook, never edit the hook, and do not write about it at length.
<!-- ci-workflows:end -->
