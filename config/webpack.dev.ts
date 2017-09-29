import * as path from 'path'
import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import commonConfig from './webpack.common'

import { getWebpackStatsConfig } from './utils'

const config = webpackMerge.smart(commonConfig, {
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
    overlay: true,
    port: 3000,
    stats: getWebpackStatsConfig(false)
  },
  devtool: 'eval',
  entry: {
    app: ['react-hot-loader/patch', './src/main.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

export default config
