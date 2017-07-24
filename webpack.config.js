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
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:5]',
          'postcss-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};