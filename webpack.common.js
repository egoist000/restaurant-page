const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    assetModuleFilename: './[name][ext]',
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
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './imgs/[name][ext]',
        }
      },
      {
        test: /\.(ico)$/i,
        type: 'asset',
        generator: {
          filename: './[name][ext]',
        }
      },
    ],
  },
};
