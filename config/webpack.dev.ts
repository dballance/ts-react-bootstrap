const path = require('path');
import * as webpack from 'webpack'; 
import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import { getWebpackStatsConfig } from './utils';


const config = webpackMerge(
  commonConfig, 
  
  {
    entry : {
      app: [
        "react-hot-loader/patch",
        './src/main.ts'
      ],
      vendor:  [
        "react-hot-loader/patch",'./src/vendor.ts',
      ],
      polyfill:  [
        "react-hot-loader/patch",'./src/polyfills.ts'
      ],
    }, 
    devtool: 'eval', 
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'), 
      compress: true, 
      port: 3000,
      overlay: true, 
      hot: true,
      stats: getWebpackStatsConfig(false)
    }, 
    module: {
      rules: [
        {
          test: /\.ts$/, 
          use: [
            "react-hot-loader/webpack",
            {
              loader:'ts-loader',
              options: {
                configFile: 'tsconfig.json'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)

export default config;