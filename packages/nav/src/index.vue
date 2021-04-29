<template>
  <nav class="_nav">
    <div class="_inner">
      <button class="_nav-menu icon material-icons">menu</button>
      <button class="_nav-home icon material-icons"><a href="/">home</a></button>
      <slot></slot>
      <button class="_nav-end icon material-icons-outlined">shopping_bag</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ApNav",

  props: {

  }
}
</script>

<style scoped>

</style>
