const path = require('path');
import * as webpack from 'webpack'; 
import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import { getWebpackStatsConfig } from './utils';


const config = webpackMerge(
  commonConfig, 
  {
    devtool: 'source-map', 
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'), 
      compress: true, 
      port: 3000,
      overlay: true, 
      stats: getWebpackStatsConfig(false)
    }
  }
)

export default config;