<template>
  <label v-if="status" class="_mask" :style="style" @click="close">
  </label>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {catchEsc, catchWheel} from "../../../mixins/catchEvent"

export default defineComponent({
  name: "ApMask",

  mixins: [catchEsc, catchWheel],
  props: {
    status: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    let status = ref(props.status)
    let style = ref({
      opacity: 1
    })

    return {status, style}
  },
  methods: {
    close() {
      this.style = {
        opacity: 0
      }
      setTimeout(function () {
          this.status = false
        }, 1000
      )
    },
    escapeHandler() {
      this.close()
    },
    wheelHandler() {
      this.close()
    }
  }
})
</script>
