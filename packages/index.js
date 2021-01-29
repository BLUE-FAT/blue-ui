import Button from "./button";

import "./iconfont/iconfont.css";
// import "./iconfont/iconfont.js";
// 存储组件列表
const components = [Button];

const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach(function(item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { Button };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  version: "1.0.0",
  install
};
