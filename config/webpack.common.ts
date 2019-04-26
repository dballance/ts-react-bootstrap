import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: {
    app: './src/main.ts',
    polyfill: './src/polyfills.ts',
    vendor: './src/vendor.ts',
  },
  module: {
    rules: [
      {        
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: './tslint.json',
              typeCheck: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'js/manifest',
    },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dev',
    }), 
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

export default config;
