<template>
  <i-mac></i-mac>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import IMac from "./pages/iMac.vue";


export default defineComponent({
  name: 'App',
  components: {IMac}
})
</script>

<style scoped>
#app {
  @apply static
}
/*.ap-header{*/
/*  @apply sticky top-0*/
/*}*/
/*.ap-affix{*/
/*  @apply top-11*/
/*}*/
/*.ap-button{*/
/*  @apply w-32 h-12*/
/*}*/
</style>
