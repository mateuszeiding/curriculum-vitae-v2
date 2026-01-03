<script setup lang="ts">
import type { BulletPointModel } from '@models/BulletPointModel'
import { computed } from 'vue'

const props = defineProps<{
  bulletPoint: BulletPointModel
}>()

const parts = computed(() => {
  const text = props.bulletPoint.value ?? ''
  const words = (props.bulletPoint.emphasis ?? []).filter(Boolean)

  if (!words.length) return [{ text, bold: false, key: 0 }]

  const escaped = words
    .map((w) => w.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`))
    .sort((a, b) => b.length - a.length)

  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')

  const out: Array<{ text: string; bold: boolean; key: number }> = []
  let last = 0

  text.replace(regex, (match, _g, offset: number) => {
    if (last < offset) out.push({ text: text.slice(last, offset), bold: false, key: last })
    out.push({ text: match, bold: true, key: offset })
    last = offset + match.length
    return match
  })

  if (last < text.length) out.push({ text: text.slice(last), bold: false, key: last })
  return out
})
</script>

<template>
  <span>
    <template v-for="p in parts" :key="p.key">
      <b v-if="p.bold">{{ p.text }}</b>
      <span v-else>{{ p.text }}</span>
    </template>
  </span>
</template>
