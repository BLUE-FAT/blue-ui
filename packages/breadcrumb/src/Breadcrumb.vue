<template>
  <div class="bl-nav-wrapper" :style="{ width }">
    <el-breadcrumb class="bl-breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/homepage' }"> 首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadList" :to="item.to" :key="index" @click.native="goTo(item)">
        {{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "BlBreadcrumb",
  data() {
    return {};
  },
  props: {
    breadList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  methods: {
    goTo(item) {
      if (!item.click && !item.to) {
        location.reload();
      }
      if (item.click && !item.to) {
        item.click();
      }
    }
  }
};
</script>
