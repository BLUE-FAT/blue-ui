<template>
  <div id="app">
    <bl-title>标题</bl-title>
    <bl-echarts :option="option" height="300px" />
    <bl-container title="标题">
      <template #crumb>
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      正文
    </bl-container>
    <bl-breadcrumb :breadList="breadList" />
  </div>
</template>

<script>
import Echarts from "../packages/echarts";
import Vue from "vue";
Vue.use(Echarts);

export default {
  name: "app",
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
      },
      breadList: [
        { name: "一级导航", to: "/" },
        { name: "二级导航", click: () => this.$router.push("/") }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
