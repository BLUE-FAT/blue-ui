import Container from "./src/Container.vue";

// 为组件提供 install 安装方法，供按需引入
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};
export default Container;
