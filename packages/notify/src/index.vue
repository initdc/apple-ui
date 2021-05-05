<template>
  <div class="_notify" v-if="status">
    <div class="_inner">
      <slot></slot>
      <button class="_notify-close icon material-icons" @click="close">close</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "ApNotify",

  props: {
    status: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    let ntf = localStorage.getItem('notify')
    if (ntf === 'false') {
      let status = ref(false)
      return {status}
    }

    let status = ref(props.status)
    return {status}
  },
  methods: {
    close() {
      this.status = false
      localStorage.setItem('notify', 'false')
    }
  }
})
</script>
