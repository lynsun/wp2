var path = require('path')

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader'
      }
    ]
  }
}