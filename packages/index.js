import Button from "./button";
import "../assets/iconfont/iconfont.css";

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
export default { install };
