# Repository Guide

- This project uses Next.js App Router and React. Keep route changes in the existing app directory and reuse shared components.
- Use pnpm; install from pnpm-lock.yaml with `pnpm install --frozen-lockfile --ignore-scripts`.
- Run the available build, lint, typecheck and test scripts before committing. Keep dependency patches separate from feature changes.
- Treat environment files, credentials and generated private data as local-only. Do not run database, email or blockchain mutations during dependency verification.
