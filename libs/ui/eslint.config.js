import sharedReactConfig from '@repo/eslint-config/react.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...sharedReactConfig];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
