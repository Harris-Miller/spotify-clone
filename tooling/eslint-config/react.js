/* eslint-disable sort-keys-fix/sort-keys-fix */
import harrisConfig from 'eslint-config-harris';
import globals from 'globals';

import commonConfig from './common.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintReactConfig = [
  ...harrisConfig,
  ...commonConfig,
  {
    name: 'repo/react',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintReactConfig;
