const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appFile = './src/assets/js/app.js';
module.exports = {
  entry: {
    widget: appFile,
    'stand-with-palestine-widget': appFile,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
