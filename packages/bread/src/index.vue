<template>
  <div class="_bread">
    <a v-if="home" href="/" ><ApBreadItem class="icon material-icons _bread-home">home</ApBreadItem></a>
    <slot></slot>
  </div>
</template>

<script lang="ts">

import ApBreadItem from "../../bread-item/src/index.vue";
export default {
  name: "ApBread",
  components: {ApBreadItem},
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
