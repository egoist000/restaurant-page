const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html",
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
              options: {
                // prefer 'dart-sass'
                implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
