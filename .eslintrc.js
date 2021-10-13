
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  'rules': {
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 2,
    complexity: ['warn', { max: 8 }],
    curly: ['error', 'all'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'import/order': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/type-annotation-spacing': 2,
  },
}