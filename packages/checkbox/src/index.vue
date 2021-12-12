<template>
  <label class="_checkbox">
    <input type="checkbox" class="_box" />
    <span class="_content">
      <slot>checkbox content</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ApCheckbox",

  props: {},
  setup() {},
});
</script>
