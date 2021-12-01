import BreadNav from "./src/BreadNav.vue";

// 为组件提供 install 安装方法，供按需引入
BreadNav.install = function(Vue) {
  Vue.component(BreadNav.name, BreadNav);
};
export default BreadNav;
