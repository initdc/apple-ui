<template>
  <nav class="_affix">
    <ap-mask :status="status" @input="onInput"></ap-mask>
    <div class="_inner">
      <h1 v-if="title" class="_affix-title"><a :href="link">{{ title }}</a></h1>
      <span v-if="subtitle" class="_affix-subtitle">{{ subtitle }}</span>
      <span class="_affix-space"></span>
      <button class="material-icons _affix-arrow" @click="toggleStatus">
        {{ keyboardArrow }}
      </button>
      <slot></slot>
    </div>
    <ap-break/>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import ApBreak from "../../break";
import ApMask from "../../mask/src/index.vue";

export default defineComponent({
  name: "ApAffix",
  components: {ApMask, ApBreak},
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
  setup() {
    let keyboardArrow
    let status
    keyboardArrow = ref('keyboard_arrow_down')
    status = ref(false)

    return {keyboardArrow, status}
  },
  created() {
    watch(()=> this.status, (status, prevStatus)=>{
      if (status === true) this.toggleUp()
      else this.toggleDown()
    })
  },
  methods: {
    toggleUp() {
      this.keyboardArrow = 'keyboard_arrow_up'
    },
    toggleDown() {
      this.keyboardArrow = 'keyboard_arrow_down'
    },
    toggleStatus() {
      this.status = !this.status
    },
    onInput(value: boolean){
      this.status = value
    }
  }
})
</script>
