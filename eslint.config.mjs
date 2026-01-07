// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

// =====================
// Base ignores
// =====================
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

// =====================
// JavaScript config
// =====================
const jsConfig = {
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest'
    }
  },
  ...eslint.configs.recommended,
  rules: {
    'no-console': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
};

// =====================
// TypeScript config (type-checked)
// =====================
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

// Ensure TS rules never apply to JS
const tsConfigScoped = tsConfig.map((cfg) =>
  cfg.files ? cfg : { ...cfg, files: ['**/*.ts'] }
);

// =====================
// Export FINAL config
// =====================
export default [
  baseIgnore,
  jsConfig,
  ...tsConfigScoped,
  eslintConfigPrettier // ✅ THIS FIXES PRETTIER CONFLICTS
];
