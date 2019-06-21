module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'prefer-stateless': 'off',
      'no-useless-constructor': 'off',
      'react/prefer-stateless-function':'off',
      'import/prefer-default-export': 'off'
    },
    'globals': {
      "fetch": false
    }
  }