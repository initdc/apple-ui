<template>
  <hr :class="breakClass" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ApBreak",
  props: {
    direc: {
      type: String,
      validator(value: string): boolean {
        return ["x", "y"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    breakClass(): string {
      if (this.direc === "y") {
        return "_break-y";
      }
      return "_break-x";
    },
  },
});
</script>
