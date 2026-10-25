import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals, ...nextTs,
  globalIgnores(['.next/**', 'storybook-static/**', 'next-env.d.ts']),
  { rules: { 'react/no-unescaped-entities': 'off' } },
]);
