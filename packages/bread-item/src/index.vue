<template>
  <span class="_bread-item">
    <slot>item</slot>
  </span>
  <span class="_bread-separator">{{ separator }}</span>
</template>

<script lang="ts">

export default {
  name: "ApBreadItem",

  inject: ['separator'],
  props: {

  },
  setup(props) {

  }
}
</script>

<style scoped>

</style>
