module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
