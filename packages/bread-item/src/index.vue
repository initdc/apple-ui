<template>
  <span class="_bread-item">
    <slot>item</slot>
  </span>
  <span v-if="!end" class="_bread-separator">{{ separator }}</span>
</template>

<script lang="ts">

export default {
  name: "ApBreadItem",

  inject: ['separator'],
  props: {
    end: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let end = props.end
    return {end}
  }
}
</script>

<style scoped>

</style>
