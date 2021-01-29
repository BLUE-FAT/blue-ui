<template>
  <div>
    <div class="boxcode-title">{{ title }}</div>
    <div class="boxcode-description">{{ description }}</div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="code"></slot>
    </div>
    <div class="boxcode-showcode">显示代码</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "基本用法"
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss"></style>
