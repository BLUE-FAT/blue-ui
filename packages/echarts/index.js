import Echarts from "./src/echarts.vue";
// 为组件提供 install 安装方法，供按需引入
Echarts.install = function(Vue) {
  Vue.component(Echarts.name, Echarts);
};
export default Echarts;
