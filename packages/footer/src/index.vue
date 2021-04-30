<template>
  <footer class="_footer">
    <div class="_inner">
      <slot></slot>
    </div>
  </footer>
</template>

<script lang="ts">

export default {
  name: "ApBlank",

  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(props) {
  }
}
</script>

<style scoped>

</style>
