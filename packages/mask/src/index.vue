<template>
  <div v-show="maskStatus" class="_mask" :style="style" @click="showOff">
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch, watchEffect} from 'vue'
import {catchEsc, catchWheel} from "../../../mixins/catchEvent"

export default defineComponent({
  name: "ApMask",

  mixins: [catchEsc, catchWheel],
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let maskStatus = ref(props.status)
    let style = ref({
      opacity: 1
    })
    //
    // function showOff() {
    //   this.style = {
    //     opacity: 0,
    //   }
    //   const maskFalse = () => {
    //     this.maskStatus = false
    //   }
    //
    //   setTimeout(maskFalse, 1000)
    // }
    //
    // function showOn() {
    //   this.maskStatus = true
    //
    //   this.style = {
    //     opacity: 1,
    //   }
    // }

    return {style, maskStatus}
  },
  created() {
    watch(() => this.status, (Status, prevStatus) => {
      if (Status !== prevStatus) {
        this.showOn()
      }
    })
  },
  methods: {
    showOff() {
      this.style = {
        opacity: 0
      }
      const maskFalse = () => {
        this.maskStatus = false
      }

      setTimeout(maskFalse, 1000)
    },
    showOn() {
      this.maskStatus = true
      // this.style = {
      //   opacity: 0
      // }

      const maskOpacity = () => {
        this.style = {
          opacity: 1
        }
      }

      setTimeout(maskOpacity, 0)
    },
    escapeHandler() {
      this.showOff()
    },
    wheelHandler() {
      this.showOff()
    }
  }
})
</script>
