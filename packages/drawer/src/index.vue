<template>
  <teleport class="_drawer" to="body">

  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ApDrawer",

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
