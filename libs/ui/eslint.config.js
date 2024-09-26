import sharedReactConfig from '@repo/eslint-config/react.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...sharedReactConfig,
  {
    rules: {
      // turn this to support imports from public dir
      'import/no-absolute-path': 'off',
    },
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
