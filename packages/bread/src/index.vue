<template>
  <div class="_bread">
    <slot><span class="icon material-icons _bread-item">home</span></slot>
  </div>
</template>

<script lang="ts">

export default {
  name: "ApBread",

  props: {
    symbol: {
      type: String,
      default: '>'
    }
  },
  setup(props){
    let separator = props.symbol
    return { separator }
  },
  provide() {
    return {
      separator: this.separator
    }
  }
}
</script>

<style scoped>

</style>
