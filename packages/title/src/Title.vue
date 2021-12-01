<template>
  <div class="bl-title">
    <span class="bl-title-mark" v-if="mark"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BlTitle",
  props: {
    mark: {
      type: Boolean,
      default: true
    }
  }
};
</script>
