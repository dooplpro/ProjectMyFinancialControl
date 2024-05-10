module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    'dist',
    '.prettierrc.cjs',
    'env.d.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@trivago/prettier-plugin-sort-imports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
