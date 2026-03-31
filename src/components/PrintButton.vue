<script lang="ts" setup>
import printerIcon from '@assets/printer.png'

const print = () => {
  globalThis.print()
}
</script>
<template>
  <button class="d-print-none print-button" title="print" @click="print">
    <img :height="24" alt="print" :src="printerIcon" />
  </button>
</template>
<style lang="css" scoped>
.print-button {
  display: inline-block;
  width: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
