import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';

import { getWebpackStatsConfig } from './utils';

const config = webpackMerge.smart(commonConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true },
      mangle: { screw_ie8: true },
      sourceMap: true,
    }),
  ],
});

export default config;
