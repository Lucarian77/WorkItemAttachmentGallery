const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    attachmentPreview: "./src/attachmentPreview.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "attachmentPreview.html", to: "attachmentPreview.html" },
        { from: "styles", to: "styles" },
        { from: "images", to: "images", noErrorOnMissing: true },
        { from: "overview.md", to: "overview.md" },
        { from: "README.md", to: "README.md" },
        { from: "LICENSE.txt", to: "LICENSE.txt" }
      ]
    })
  ],
  devtool: "source-map"
};
