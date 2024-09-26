import harrisConfig from 'eslint-config-harris';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...harrisConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
