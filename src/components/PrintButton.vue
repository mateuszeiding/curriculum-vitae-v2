<script lang="ts" setup>
import { computed } from 'vue'
import printerIcon from '@assets/printer.png'
import { useVueToPrint } from 'vue-to-print'

const props = defineProps<{
  printRef: HTMLDivElement
}>()

const printRef = computed(() => props.printRef)

const { handlePrint } = useVueToPrint({
  content: printRef,
  documentTitle: 'Mateusz Eiding- Resume',
})
</script>
<template>
  <button class="d-print-none print-button" title="print" @click="handlePrint">
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
