module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:node/recommended'
  ],
  globals: {
    console: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'import',
    'node'
  ],
  rules: {
    'no-console': 0,
    'no-process-exit': 0
  },
  settings: {
    'import/resolver': 'node'
  }
}
