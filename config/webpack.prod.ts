import { DefinePlugin } from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';

const config = webpackMerge.smart(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});

export default config;
