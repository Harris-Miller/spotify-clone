/* eslint-disable sort-keys-fix/sort-keys-fix */
import harrisBaseConfig from 'eslint-config-harris/base';
import globals from 'globals';

import commonConfig from './common.js';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...harrisBaseConfig,
  ...commonConfig,
  {
    name: 'repo/node',
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
];

// eslint-disable-next-line import/no-default-export
export default eslintConfig;
