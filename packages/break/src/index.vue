<template>
  <div class="_break">
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: "ApBreak",

  props: {
    status: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
  }
}
</script>

<style scoped>

</style>
