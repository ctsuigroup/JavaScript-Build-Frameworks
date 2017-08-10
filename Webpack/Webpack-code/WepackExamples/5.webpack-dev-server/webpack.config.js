var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool:'source-map',
  entry: [
 'webpack-dev-server/client?http://localhost:9004',
    'webpack/hot/dev-server',
  './src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  plugins:[
   new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
 ],
 devServer:{
  contentBase:'./dist',
  hot:true,
  port:9004
 }
  
}
