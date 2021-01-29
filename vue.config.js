const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
    config.resolve.alias.set("@", resolve("examples"));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/common.sass"`
      },
      scss: {
        prependData: `@import "~@/assets/css/common.scss";`
      }
    }
  }
};
