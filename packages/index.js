import "../assets/iconfont/iconfont.css";
import "./theme-chalk/index.scss";

import Breadcrumb from "./breadcrumb";
import Container from "./container";
import Title from "./title";

// 存储组件列表
const components = [Title, Container, Breadcrumb];

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
export { Title, Container, Breadcrumb };
export default { install };
