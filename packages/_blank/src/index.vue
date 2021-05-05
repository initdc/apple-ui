<template>
  <div class="_blank">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ApBlank",

  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(props) {
  }
})
</script>
