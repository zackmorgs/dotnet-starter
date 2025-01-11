'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/Client/wwwroot/js/src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './src/Client/wwwroot/js/dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Process .scss files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into a separate file
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles SCSS to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../styles/css/styles.css', // Output CSS file
    }),
  ],
};
