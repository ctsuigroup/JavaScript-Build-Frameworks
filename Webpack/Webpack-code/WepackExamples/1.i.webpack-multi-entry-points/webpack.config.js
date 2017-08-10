var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index','./src/extraFile.js'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
}
