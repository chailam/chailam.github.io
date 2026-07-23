# Local Development

## Prerequisites

- Node.js (v18+ recommended, matching Vite 5 / TS 5 requirements)
- npm (this repo has a committed `package-lock.json`)

## Start the app locally

```bash
npm install
npm run dev
```

This starts the Vite dev server (default: `http://localhost:5173`). Leave the terminal running and edit files — Vite's HMR (hot module reload) will update the page in place without a full browser reload.

Other useful scripts (see `package.json`):

```bash
npm run build     # production build (tsc + vite build)
npm run preview   # preview the production build locally
npm run lint      # eslint
npm run prettier  # check formatting
```

## Why you can hit a GitHub "rate limit" / temporary block

This app is `arifszn/gitprofile`. It has **no backend** — on every page load, [src/components/gitprofile.tsx](src/components/gitprofile.tsx) calls the public GitHub REST API directly from the browser, **unauthenticated**:

- `GET https://api.github.com/users/<username>` (profile info)
- `GET https://api.github.com/search/repositories?...` (your projects, whether `mode: 'manual'` or `'automatic'`)

Unauthenticated GitHub API requests are capped at **60 requests/hour per IP address** (vs. 5,000/hour for authenticated requests). This project does not currently support passing a GitHub token, so every full browser refresh burns 2 of those 60 requests.

If you exceed it, you'll see the app's own "Too Many Requests!" screen (defined in [src/constants/errors.tsx](src/constants/errors.tsx)) — this is just GitHub's IP-based rate limit resetting on its own (usually within the hour), **not** an account ban. GitHub shows the exact reset time in the `X-RateLimit-Reset` response header, which the app surfaces in the error message.

## How to avoid tripping the rate limit while developing

1. **Rely on HMR, don't hard-refresh.** Vite's dev server hot-reloads on save for most UI/CSS/config changes — you rarely need to reload the tab, which is what re-triggers the two GitHub API calls.
2. **Don't restart `npm run dev` repeatedly** just to see changes — it doesn't re-fetch by itself, but combined with manual reloads it adds up fast.
3. **Avoid multiple tabs/windows** pointed at the local dev server at the same time (each one calls the GitHub API independently on load).
4. **Batch your testing.** If you're only working on layout/styling in cards that don't depend on live GitHub data (e.g. skills, about, experience sections from `gitprofile.config.ts`), you generally don't need many reloads at all.
5. **If you do get rate-limited**, just wait for the reset time shown in the error screen (or check `https://api.github.com/rate_limit` from the same network — note checking this endpoint itself also consumes a request if unauthenticated... actually rate_limit checks don't count against your limit, so it's safe to check).
6. **Same IP is shared** by anything else on your network calling the GitHub API unauthenticated (other apps, scripts, etc.), so the 60/hour budget isn't exclusive to this project.
