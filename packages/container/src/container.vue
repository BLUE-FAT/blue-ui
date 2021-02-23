<template>
  <div class="bl-container">
    <div class="bl-breadcrumb " v-if="$slots.crumb">
      <slot name="crumb"></slot>
    </div>
    <div class="bl-title" v-if="title">
      <span class="bl-title-mark" v-if="mark"></span>
      {{ title }}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlContainer",
  props: {
    title: String,
    mark: {
      type: Boolean,
      default: true
    }
  }
};
</script>
