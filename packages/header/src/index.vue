<template>
  <nav class="_header">
    <div class="_inner">
      <a class="_header-menu icon material-icons">menu</a>
      <a class="_header-home icon material-icons"><a href="/">home</a></a>
      <slot></slot>
      <a class="_header-end icon material-icons-outlined">shopping_bag</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ApHeader",

  props: {

  }
}
</script>

<style scoped>

</style>
