This project is the personal website for Luke Needham.
It is hosted at [LukeNeedham.com](https://lukeneedham.com).

It is a Next.js project using React, Typescript, and Chakra UI.

It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Deploy

This project is deployed on Vercel.
It will auto-build and deploy whenever the 'main' branch updates.
Therefore do not push to 'main' with every update, but only when you want to re-deploy.

## Acceptance Deployment

An acceptance (preview) deployment is created automatically for every pull request via GitHub Actions.
This lets you test changes in a live environment before merging to `main`.

The workflow (`.github/workflows/acceptance-deployment.yml`) uses the Vercel CLI to build and deploy the PR branch, then posts a comment on the PR with the acceptance URL.

### Required GitHub Secrets

The following secrets must be configured in the repository settings under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | A Vercel personal access token (create one at https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel team/org ID (found in Vercel project settings) |
| `VERCEL_PROJECT_ID` | The Vercel project ID (found in Vercel project settings) |

# Development

## Setup

Setup the project by running: `yarn install`

## Testing

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Credits

This website uses the following icons from external sources:

- Puzzle by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/puzzle/" target="_blank" title="Puzzle Icons">Noun Project</a> (CC BY 3.0)
- Sticky notes by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/sticky-notes/" target="_blank" title="sticky notes Icons">Noun Project</a> (CC BY 3.0)
- Decision making by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/decision-making/" target="_blank" title="decision making Icons">Noun Project</a> (CC BY 3.0)
- Project by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/project/" target="_blank" title="Project Icons">Noun Project</a> (CC BY 3.0)
