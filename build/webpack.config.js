var path = require('path')

var outputPath = path.resolve(__dirname ,'dist');
console.log('outputPath:',outputPath);
var entryPath = path.resolve(__dirname, '../index.js');

module.exports = {
  entry: {
    app: entryPath,
  },
  output: {
    path: outputPath,
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader',exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  }
}