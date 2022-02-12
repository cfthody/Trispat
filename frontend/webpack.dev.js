/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const Path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    client: {
      overlay: true,
    },
    static: {
      directory: Path.join(__dirname, "public"),
      publicPath: "http://localhost:8080/public/",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      alwaysWriteToDisk: true,
      chunksSortMode: "none",
      template: Path.join(__dirname, "public/template.html"),
    }),
  ],
});
