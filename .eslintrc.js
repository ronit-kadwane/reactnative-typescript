module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-unresolved': [2, { 'ignore': ['\\.(png|jpg|jpeg|gif|webp)(\\?|$)'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
