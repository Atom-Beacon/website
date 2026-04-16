# Dev container

This folder defines the **Atom Beacon Dev Container** (`typescript-node:22` on Debian Bookworm). On first open, **`npm ci`** runs automatically (`postCreateCommand`).

## In Cursor / VS Code

1. Command Palette → **Dev Containers: Reopen in Container** (Docker Desktop must be running).
2. Wait for the container to build and `npm ci` to finish.

## Commands (inside the container)

| Task | Command |
|------|---------|
| Dev server (Vite) | `npm run dev` — app is forwarded on port **5173** |
| Production build | `npm run build` |
| Preview production build | `npm run preview` |
| All tests | `npm test` |
| Consent / `index.html` contract only | `npx vitest run src/index-html.consent.test.ts` |
| Lint | `npm run lint` |

## Note for automation / CI agents

Automated environments often **cannot attach to the local Docker daemon** (no `docker.sock`). In those cases, tests cannot run in the dev container from the agent; run the same commands on your machine with Docker running, or rely on CI that provides Node + `npm ci`.
