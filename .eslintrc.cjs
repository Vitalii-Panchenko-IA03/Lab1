module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['sonarjs'],
  rules: {},
};
