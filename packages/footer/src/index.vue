<template>
  <footer class="_footer">
    <div class="_inner">
      <slot></slot>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ApFooter",

  props: {

  },
  setup() {
  }
})
</script>
