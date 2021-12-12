<template>
  <div :class="lineClass" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ApLine",
  props: {
    direc: {
      type: String,
      validator(value: string): boolean {
        return ["x", "y"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    lineClass(): string {
      if (this.direc === "y") {
        return "_line-y";
      }
      return "_line-x";
    },
  },
});
</script>
