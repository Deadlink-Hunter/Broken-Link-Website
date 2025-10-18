import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
  js.configs.recommended, // Apply base ESLint recommended rules
  ...mantine, // Apply rules from eslint-config-mantine
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },
  // Configuration for TypeScript files, enabling type-aware linting
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply this configuration only to TypeScript files
    extends: [
      tseslint.configs.eslintRecommended, // Disable ESLint core rules that conflict with TypeScript-ESLint
      tseslint.configs.recommended, // Apply general recommended TypeScript rules
      tseslint.configs.recommendedTypeChecked, // Apply recommended TypeScript rules that require type information
      // tseslint.configs.stylisticTypeChecked, // Optional: Apply recommended stylistic TypeScript rules that require type information
    ],
    languageOptions: {
      parserOptions: {
        // Enable project-wide type information for rules that need it
        project: true, // Looks for tsconfig.json, jsconfig.json, or tsconfig.eslint.json in tsconfigRootDir
        tsconfigRootDir: import.meta.dirname, // Specifies the root directory for resolving tsconfig.json
      },
    },
    rules: {
      // Enforce the restriction on using 'any' type
      '@typescript-eslint/no-explicit-any': 'error',
    },
  }
);