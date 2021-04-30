<template>
  <nav class="_affix">
    <div class="_inner">
      <h1 v-if="title"><a :href="link" class="_affix-title">{{ title }}</a></h1>
      <span v-if="subtitle" class="_affix-subtitle">{{ subtitle }}</span>
      <span class="flex-grow"></span>
      <slot></slot>
    </div>
    <ap-break class="_affix-line"></ap-break>
  </nav>
</template>

<script>
import ApBreak from "../../break";
export default {
  name: "ApAffix",
  components: {ApBreak},
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  setup(props) {
    let title = props.title
    let subtitle = props.subtitle
    let link = props.link

    return {
      title,
      subtitle,
      link
    }
  }
}
</script>

<style scoped>

</style>
