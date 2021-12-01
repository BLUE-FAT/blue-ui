import Echarts from "./src/Echarts.vue";

// 为组件提供 install 安装方法，供按需引入
Echarts.install = function(Vue) {
  Vue.component(Echarts.name, Echarts);
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  Echarts.install(window.Vue);
}
export default Echarts;
