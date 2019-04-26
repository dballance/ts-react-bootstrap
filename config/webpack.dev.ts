process.env.NODE_ENV = 'development';
import path from 'path';
import {
  NamedModulesPlugin,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack';
import webpackMerge from 'webpack-merge';
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
    stats: getWebpackStatsConfig(false) as any,
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', './src/main.ts'],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});

export default config;
