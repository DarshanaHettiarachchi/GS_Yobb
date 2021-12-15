const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  let devServer = {
    open: true,
  };
  let plugins = [];
  let module = {};

  if (env.q1) {
    devServer = {
      ...devServer,
      port: 8001,
      static: {
        directory: path.join(__dirname, "./src/q1-warehouse"),
      },
    };
  } else if (env.q2) {
    devServer = {
      ...devServer,
      port: 8002,
      static: {
        directory: path.join(__dirname, "./src/q2-data-entry"),
      },
    };
  } else if (env.q3) {
    devServer = {
      ...devServer,
      port: 8003,
    };
    plugins = [
      ...plugins,
      new HtmlWebpackPlugin({
        template: "./src/q3-products/index.html",
      }),
    ];
    module = {
      ...module,
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    };
  }

  return {
    mode: "development",
    entry: "./src/index.js",
    module,
    devServer,
    plugins,
  };
};
