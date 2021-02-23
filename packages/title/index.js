import Title from "./src/title.vue";
// 为组件提供 install 安装方法，供按需引入
Title.install = function(Vue) {
  Vue.component(Title.name, Title);
};
export default Title;
