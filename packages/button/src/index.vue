<template>
  <button :type="type" :class="btnClass">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ApButton",

  props: {
    type: {
      type: String,
      default: 'button',
      validator (value: string) :boolean {
        return ['button', 'submit', 'reset'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  setup(props) {
    let btnClass :string

    if (props.disabled){
      btnClass = '_button disabled'
    } else {
      btnClass  = '_button'
    }

    return { btnClass }
  }
})
</script>
