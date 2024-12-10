const path = require("node:path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  output: {
    clean: true,
    module: true,
    scriptType: "text/javascript",
  },
  experiments: {
    outputModule: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  entry: {
    root: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ scriptLoading: "module" }),
    new BundleAnalyzerPlugin({ generateStatsFile: true }),
  ],
};
