/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    name: 'repo/common-all',
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    name: 'repo/common-js-only',
    files: ['**/*.js'],
    rules: {
      'import/extensions': ['error', 'ignorePackages'],
    },
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
