/* eslint-env node */

const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/main.jsx",
  output: {
    path: "./build",
    publicPath: "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          "presets": ["es2015-native-modules", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".jsx"],
    root: [
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "src")
    ]
  },
  devtool: "sourcemap"
};
