import mantine from 'eslint-config-mantine';
import { defineConfig } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  ...mantine,
  {
    ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'],
  },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single'],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);
