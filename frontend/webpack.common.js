/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const Path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

module.exports = {
  entry: Path.resolve(__dirname, "src/index"),
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"],
    modules: [Path.resolve(__dirname, "node_modules")],
  },
  output: {
    path: Path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "images/[name].[ext]",
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: "html-loader",
      // },
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        include: Path.resolve(__dirname, "src"),
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
          },
        ],
      },

      // Sass and Css loader
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /(node_modules)/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          //"postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },

      // Images loader
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /(node_modules)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
      },

      // Fonts loader
      {
        test: /.(ttf|otf|eot|svg^woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /(node_modules)/,
        type: "asset/resource",
        generator: {
          filename: "[name].[ext]",
          publicPath: "fonts/",
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // Report errors before webpack compile
      async: false,
      // To use linting in ts files
      eslint: {
        enabled: true,
        files: Path.resolve(__dirname, "src/**/*"),
      },
      typescript: {
        enabled: true,
        mode: "write-references",
      },
    }),
  ],
};
