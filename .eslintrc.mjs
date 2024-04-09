export default {
  extends: ['next/core-web-vitals'],
  config: {
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    '@stylistic/js/comma-dangle': ['error', 'always'],
    '@stylistic/js/semi': ['error', 'always'],
    '@stylistic/js/quotes': ['error', 'single', { 'avoidEscape': true }],
  },
  overrides: [
    {
      files: [
        '*.{ts,tsx}',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2023,
        tsconfigRootDir: '.',
      },
      rules: {
        // BEGIN ERRORS
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true, allowBoolean: true },
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',

        // This prevents declarations like `interface ISomething { ... }`
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],
      },
    },
  ],
}
