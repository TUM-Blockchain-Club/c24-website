# Dependency maintenance

Keep Next.js and eslint-config-next on the same patched release; React and React DOM share an exact version. Use pnpm and the committed pnpm-lock.yaml. The npm lockfile is superseded by this lockfile.

Install with `pnpm install --frozen-lockfile --ignore-scripts`, then run the available build, lint, typecheck and test scripts. Audit with `pnpm audit`. Verify builds with synthetic configuration; keep database, email and blockchain mutations out of dependency checks.

Security overrides in pnpm-workspace.yaml pin patched indirect dependencies where parent packages still select an affected version. Review overrides when upgrading their parents; do not replace incompatible major versions merely to clear an audit.

The existing deployment workflow verifies that the Vercel project is linked to the same GitHub repository before deploying. A mismatch stops deployment so a maintenance push cannot replace another application.
