const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        externals: {
          vue: "Vue",
          vuex: "Vuex",
          "vue-router": "VueRouter",
          "element-ui": "ELEMENT",
          echarts: "echarts",
          moment: "moment",
          xlsx: "xlsx",
          jquery: "jquery",
          axios: "axios",
          "echarts-liquidfill/src/liquidFill.js": "echarts-liquidfill/src/liquidFill.js"
        }
      };
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
