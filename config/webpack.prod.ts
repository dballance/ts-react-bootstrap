import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import commonConfig from './webpack.common'

import { getWebpackStatsConfig } from './utils'

const config = webpackMerge.smart(commonConfig, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: { config: { path: 'config/postcss.config.js' } }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true },
      mangle: { screw_ie8: true },
      sourceMap: true
    }),
    new ExtractTextPlugin('app.[contenthash].css')
  ]
})

export default config
