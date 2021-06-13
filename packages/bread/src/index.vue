<template>
  <div class="_bread">
    <ApBreadItem v-if="home"
      ><a href="/" class="icon material-icons _bread-home">home</a></ApBreadItem
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApBreadItem from "../../bread-item/src/index.vue";

export default defineComponent({
  name: "ApBread",

  components: { ApBreadItem },
  props: {
    home: {
      type: Boolean,
      default: false,
    },
    symbol: {
      type: String,
      default: ">",
    },
  },
  setup() {},
  provide() {
    return {
      separator: this.symbol,
    };
  },
});
</script>
