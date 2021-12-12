<template>
  <div class="_notify" v-show="ntfStatus">
    <div class="_inner">
      <div class="slot">
        <slot></slot>
      </div>
      <button class="_notify-close icon material-icons" @click="close">
        close
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ApNotify",

  props: {
    version: {
      type: String,
      default: '0.0.1'
    },
  },
  setup(props) {
    let {version} = props

    let ntfSts = localStorage.getItem("notify");
    let ntfVer = localStorage.getItem("notify-ver");

    if (ntfVer !== version) {
      let ntfStatus = ref(true);
      localStorage.setItem("notify-ver", version);
      return {ntfStatus};
    }

    if (ntfSts === "false") {
      let ntfStatus = ref(false);
      return {ntfStatus};
    }

    let ntfStatus = ref(true);
    return {ntfStatus};
  },
  methods: {
    close() {
      this.ntfStatus = false;
      localStorage.setItem("notify", "false");
    },
  },
});
</script>
