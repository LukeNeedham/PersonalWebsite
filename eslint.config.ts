import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  // One way to import: the alias `@/` (the folder src/), never a relative path that climbs out of the folder
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*'],
              message: "Import with the alias '@/', for example '@/domain/provider/UrlProvider'.",
            },
          ],
        },
      ],
    },
  },
  // TypeScript only: any JavaScript file (.js, .jsx, .mjs, .cjs) fails the lint, wherever it is
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message: 'JavaScript is not allowed: write TypeScript (.ts or .tsx).',
        },
      ],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'src/generated/**']),
])
