<template>
  <span class="_bread-item">
    <slot>item</slot>
  </span>
  <span class="_bread-separator">{{ separator }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ApBreadItem",

  inject: ["separator"],
  props: {},
  setup() {},
});
</script>
