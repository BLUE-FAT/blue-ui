<template>
  <div class="bl-title" v-if="title">
    <span class="bl-title-mark" v-if="mark"></span>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "BlTitle",
  props: {
    title: String,
    mark: {
      type: Boolean,
      default: true
    }
  }
};
</script>
