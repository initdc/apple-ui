<template>
  <teleport :to="to">
    <div
      v-show="status || maskStatus"
      class="_mask"
      :style="style"
      @click="showOff"
    ></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { catchEsc, catchWheel } from "../../../mixins/catchEvent";

export default defineComponent({
  name: "ApMask",

  mixins: [catchEsc, catchWheel],
  emits: ["input"],
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "body",
    },
  },
  setup(props) {
    let maskStatus = ref(props.status);
    let style = ref({
      opacity: 1,
    });

    return { style, maskStatus };
  },
  created() {
    watch(
      () => this.status,
      (Status, prevStatus) => {
        if (prevStatus === false && Status === true) {
          this.showOn();
        } else if (prevStatus === true && Status === false) {
          this.showOff();
        }
      }
    );
  },
  methods: {
    showOff() {
      this.$emit("input", false);

      this.style = {
        opacity: 0,
      };

      const maskFalse = () => {
        this.maskStatus = false;
      };

      setTimeout(maskFalse, 1000);
    },
    showOn() {
      this.maskStatus = true;

      this.style = {
        opacity: 0,
      };

      const maskOpacity = () => {
        this.style = {
          opacity: 1,
        };
      };

      setTimeout(maskOpacity, 0);
    },
    escapeHandler() {
      this.showOff();
    },
    wheelHandler() {
      this.showOff();
    },
  },
});
</script>
