<template>
  <div class="_bread">
    <a v-if="home" href="/" ><span class="icon material-icons _bread-home">home</span></a>
    <slot></slot>
  </div>
</template>

<script lang="ts">

export default {
  name: "ApBread",

  props: {
    home: {
      type: Boolean,
      default: false
    },
    symbol: {
      type: String,
      default: '>'
    }
  },
  setup(props){
    let home = props.home
    let separator = props.symbol

    return { home, separator }
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
