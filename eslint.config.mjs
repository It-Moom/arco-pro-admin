import moomfe from '@moomfe/eslint-config';

export default moomfe({}, {
  files: ['**/mock.ts', '**/mock/*.ts'],
  rules: {
    'prefer-regex-literals': 'off',
  },
});
