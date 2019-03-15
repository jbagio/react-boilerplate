module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
