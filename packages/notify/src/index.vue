<template>
  <div class="_notify" v-if="status">
    <div class="_inner">
      <span class="_notify-content">
        <slot></slot>
      </span>
      <button class="_notify-close icon material-icons" @click="close">close</button>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: "ApNotify",

  props: {
    status: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {

    let ntf = localStorage.getItem('notify')
    if (ntf === 'false'){
      let status = ref(false)
      return {status}
    }

    let status = ref(props.status)
    return {status}
  },
  methods: {
    close(){
      this.status = false
      localStorage.setItem('notify', 'false')
    }
  }
}
</script>

<style scoped>

</style>
