const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPoint = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: entryPoint,
  output: {

  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader'
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'EXY CLI',
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};
