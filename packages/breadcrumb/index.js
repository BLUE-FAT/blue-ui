import Breadcrumb from "./src/Breadcrumb.vue";

// 为组件提供 install 安装方法，供按需引入
Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
};
export default Breadcrumb;
