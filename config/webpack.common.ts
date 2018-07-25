import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const extractSass = new ExtractTextPlugin({
  filename: 'app.[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

const config: webpack.Configuration = {
  entry: {
    app: './src/main.ts',
    polyfill: './src/polyfills.ts',
    vendor: './src/vendor.ts',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader', options: {} },
            {
              loader: 'postcss-loader',
              options: {
                config: { path: 'config/postcss.config.js' },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
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
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
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
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dev',
    }),
    extractSass,
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

export default config;
