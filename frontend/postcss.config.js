/* eslint-disable no-undef */

module.exports = {
  plugins: [
    [
      // Convert modern css in something most browsers understand
      "postcss-preset-env",
      require("autoprefixer"),
      // Unwrap nested rules in Sass files
      require("postcss-nested"),
      // To be able to use container queries
      // require("cq-prolyfill"),
    ],
  ],
};
