import sharedReactConfig from '@repo/eslint-config/react.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...sharedReactConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    rules: {
      // turn this to support imports from public dir
      'import/no-absolute-path': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
