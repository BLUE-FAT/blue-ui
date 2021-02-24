import Vue from "vue";
import App from "./App.vue";
// 导入组件库
import BlueUI from "../packages";
import ElementUI from "element-ui";
import "@/assets/js/utils/rem.js"; //若需要适配需要
import "@/assets/css/element-variables.scss";

Vue.config.productionTip = false;
Vue.use(BlueUI);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
