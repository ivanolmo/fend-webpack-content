const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
      new BundleAnalyzerPlugin()
    // new CleanWebpackPlugin({
    //   dry: true,
    //   verbose: true,
    //   cleanStaleWebpackAssets: true,
    //   protectWebpackAssets: true
    // }),
  ],
};
