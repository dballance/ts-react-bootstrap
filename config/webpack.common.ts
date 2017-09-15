const path = require('path');
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';

const config: webpack.Configuration = {
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
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [
      'app', 
      'vendor', 
      'polyfill', 
      'manifest'
    ]}),    
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      title: 'Dev', 
      template: './src/index.html'
    }),
  ],
}

export default config;