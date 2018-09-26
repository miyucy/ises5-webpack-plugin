const path = require("path");
const IsES5Plugin = require("../index.js");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, "src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devtool: "#source-map",
  plugins: [new IsES5Plugin()]
};
