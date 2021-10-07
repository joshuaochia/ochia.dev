const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htlmPageNames = ["about", "blog", "contact", "projects"];

const multiplePlugins = htlmPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    title: `${name}`,
    filename: `${name}.html`,
    template: `./src/html/${name}.html`,
  });
});

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "src/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index page",
      filename: "index.html",
      template: "./index.html",
    }),
  ].concat(multiplePlugins),
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
