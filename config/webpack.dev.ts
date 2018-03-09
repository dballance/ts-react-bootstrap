process.env.NODE_ENV = 'development';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';

import { getWebpackStatsConfig } from './utils';

const config = webpackMerge.smart(commonConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
    overlay: true,
    port: 3000,
    stats: getWebpackStatsConfig(false),
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', './src/main.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader', 
            options: {
              babelrc: false,
              plugins:['react-hot-loader/babel']
            }
          },
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

export default config;
