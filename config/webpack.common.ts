import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: {
    app: './src/main.ts',
    polyfill: './src/polyfills.ts',
    vendor: './src/vendor.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: { config: { path: 'config/postcss.config.js' } }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: './tslint.json',
              typeCheck: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
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
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor', 'polyfill', 'manifest']
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dev'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}

export default config
