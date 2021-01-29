<template>
  <div id="app">
    <h1 class="title">组件测试</h1>
    <div>
      <bl-button>默认</bl-button>
      <bl-button type="warning">警告</bl-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
.title {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
  color: rgb(176, 197, 215);
  text-align: center;
}
</style>
