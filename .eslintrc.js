// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  plugins: ['node'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
  ],  
  env: {
    browser: true,
  },
  // add your custom rules here
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'complexity': [1, 10],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'node/no-deprecated-api': 'error'
  }
}
