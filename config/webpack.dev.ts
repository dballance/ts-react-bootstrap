const path = require('path');
import * as webpack from 'webpack'; 
import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import { getWebpackStatsConfig } from './utils';


const config = webpackMerge.smart(
  commonConfig, 
  
  {
    entry : {
      app: [
        "react-hot-loader/patch",
        './src/main.ts'
      ]
    }, 
    devtool: 'eval', 
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'), 
      compress: true, 
      port: 3000,
      overlay: true, 
      hot: true,
      inline: true,
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
      new webpack.NamedModulesPlugin(),      
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
)

export default config;