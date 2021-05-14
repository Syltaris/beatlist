const path = require("path");
const webpack = require("webpack");
const fs_extra = require("fs-extra");

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.alaanor.beatlist",
        win: {
          target: "nsis",
          icon: "./public/icon.ico",
        },
      },
    },
  },
  configureWebpack: {
    // plugins: [
    //   new webpack.DefinePlugin({
    //     "process.version": JSON.stringify(process.version),
    //   }),
    // ],
    target: "electron-renderer",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
