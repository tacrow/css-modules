const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/style/reset.css',
    './src/app/app.jsx'
  ],
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // jsx
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // envの指定でES2017をES5に変換
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}],
                // ReactのJSXを解釈
                'react'
              ]
            }
          }
        ],
        // node_modulesは除外
        exclude: /node_modules/
      },
      {
        // jsx
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslintでエラーだしたらビルドを中断する
          failOnError: true,
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]',
            'postcss-loader'
          ]
        }),
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        include: [
          path.resolve(__dirname, './public')
        ],
        use: {
          loader: 'url-loader',
          options: {
              limit: 8192,
              name: './public/img/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.jpg', '.png', '.gif', '.svg', '.ico']
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('app.css'),
    new WebpackNotifierPlugin(),
  ]
};
