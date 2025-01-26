const react = require('eslint-plugin-react')
const globals = require('globals')

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  },
]
