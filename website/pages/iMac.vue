<template>
  <Nav class="ap-nav">
    <ul>
      <li><a href="/">Mac</a></li>
      <li><a href="/">iPad</a></li>
      <li><a href="/">iPhone</a></li>
      <li><a href="/">Watch</a></li>
      <li><a href="/">Music</a></li>
      <li><a href="/">Support</a></li>
      <li class="material-icons icon"><button>search</button></li>
    </ul>
  </Nav>
  <Affix title='iMac 24"' subtitle="Preview" link="/" class="ap-affix">
    <ul>
      <li>Overview</li>
      <li><a href="/">Tech Specs</a></li>
    </ul>
    <Button class="ap-button">View pricing</Button>
  </Affix>
  <notify >
    <a href="/">
      Evaluate COVID‑19 symptoms and understand next steps >
    </a>
  </notify>
  <img src="/static/3dm_1111_in_japan_auto_x2.jpg">
  <img src="/static/3dm_1111_in_japan.jpg">
</template>

<script>
import Button from '/@/packages/button'
import Nav from '/@/packages/nav'
import Affix from '/@/packages/affix'
import Notify from '/@/packages/notify'
import Break from '/@/packages/break'

export default {
  name: "iMac",

  components: {
    Button,
    Nav,
    Affix,
    Notify,
    Break
  }
}
</script>

<style scoped>

</style>
