/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const Path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    // Extends existing minimizer (e.g terser-webpack-plugin) and add new ones
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  output: {
    filename: "[name].bundle.js",
    path: Path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
});
