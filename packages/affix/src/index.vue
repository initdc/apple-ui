<template>
  <nav class="_affix">
    <div class="_inner">
      <h1 v-if="title" class="_affix-title"><a :href="link">{{ title }}</a></h1>
      <span v-if="subtitle" class="_affix-subtitle">{{ subtitle }}</span>
      <span class="flex-grow"></span>
      <slot></slot>
    </div>
    <ap-break/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ApBreak from "../../break";

export default defineComponent({
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
})
</script>
