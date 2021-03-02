## Echarts 图表组件

::: demo

```html
<template>
  <bl-echarts :option="option" height="300px" />
</template>

<script>
  // 该组件不包含在完整引入的组件中，需要自己按需引入
  // import Echarts from "@blue_fat/blue-ui/packages/echarts";
  // import Vue from "vue";
  // Vue.use(Echarts);
  export default {
    data() {
      return {
        option: {
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center"
          },
          tooltip: {
            trigger: "item"
          },
          legend: {
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        }
      };
    }
  };
</script>
```

:::

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| option | 配置项 | 参考 echart 文档 | - | - |
| height | 图表高度 | string |- | 100% |
