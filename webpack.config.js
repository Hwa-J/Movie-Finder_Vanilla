const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const Copyplugin = require('copy-webpack-plugin')


module.exports = {
  entry: './js/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요! (가장 아래부터 해석)
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {  // npm i -D babel-loader 설치
        test: /\.js$/,
        use: [
          'babel-loader',
        ]
      },
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new Copyplugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost',
  }
}