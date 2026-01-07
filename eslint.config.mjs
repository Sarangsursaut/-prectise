// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// Provide a JS-specific config so TypeScript type-checked rules are not
// applied to plain JavaScript files (e.g. commitlint.config.js).
const jsConfig = {
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest'
    }
  },
  ...eslint.configs.recommended,
  rules: {
    // keep console rule consistent for JS files too
    'no-console': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
};

const tsConfig = tseslint.config(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      'no-console': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
  }
);

// Ensure every config returned by tseslint is scoped to TypeScript files so
// type-checked rules are not applied to non-TS files.
const tsConfigScoped = tsConfig.map((cfg) => (cfg.files ? cfg : { ...cfg, files: ['**/*.ts'] }));

// Top-level ignores (preferred over .eslintignore in the flat config world)
const baseIgnore = {
  ignores: [
    '*.config.js',
    '*.config.cjs',
    '*.mjs',
    'ecosystem.config.js',
    'commitlint.config.js',
    'eslint.config.mjs',
    'node_modules/**',
    'dist/**',
    'build/**',
    'logs/**'
  ]
};
export default [baseIgnore, jsConfig, ...tsConfigScoped];
