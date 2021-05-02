<template>
  <nav class="_nav">
    <div class="_inner">
      <a class="_nav-menu icon material-icons">menu</a>
      <a class="_nav-home icon material-icons"><a href="/">home</a></a>
      <slot></slot>
      <a class="_nav-end icon material-icons-outlined">shopping_bag</a>
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
