<template>
  <div class="echarts-wrapper" :style="{ height: height }">
    <div ref="echartsDom" :style="{ width: '100%', height: height }"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "BlEcharts",
  props: {
    height: {
      type: String,
      default: "100%"
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  watch: {
    option: {
      handler(newVal) {
        this.myChart.clear();
        this.myChart.setOption(newVal, true);
      },
      deep: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts();
    });
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeFuc);
  },
  methods: {
    initEcharts() {
      if (this.option.series[0].type === "liquidFill") {
        require("echarts-liquidfill/src/liquidFill.js");
      }
      this.myChart = echarts.init(this.$refs.echartsDom);
      // 绘制图表
      this.myChart.setOption(this.option, true);
      //可缩放
      window.addEventListener("resize", this.resizeFuc);
    },
    resizeFuc() {
      this.myChart.resize();
      this.myChart.setOption(this.option, true);
    }
  }
};
</script>

<style scoped>
.echarts-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
