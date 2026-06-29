import mantine from 'eslint-config-mantine';
import { defineConfig } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import eslintPluginI18next from 'eslint-plugin-i18next';

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
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { i18next: eslintPluginI18next },
    rules: {
      'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
  },
  {
    files: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/*.story.tsx',
      'src/constants/**',
      'src/locals/**',
    ],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
]);
