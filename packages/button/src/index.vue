<template>
  <button class="_button">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ApButton",

  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
})
</script>

<style scoped>

</style>
