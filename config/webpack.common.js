const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry : {
    app: './src/main.ts',
    vendor: './src/vendor.ts',
    polyfill: './src/polyfills.ts'
  }, 
  output: {
    filename: '[name].[hash].js', 
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin([
      'app', 
      'vendor', 
      'polyfill', 
      'manifest'
    ]),    
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      title: 'Dev', 
      template: './src/index.html'
    }),
  ],
}