<script lang="ts" setup>
import { ref, watchEffect, type Component } from 'vue'

const props = defineProps<{
  dataSource: Record<string, MaybePromise<unknown>>
  content: Component
  skeleton: Component
}>()

const data = ref<Record<string, unknown>>()

watchEffect(
  (onCleanup) => {
    let isSourceChanged = false

    onCleanup(() => (isSourceChanged = true))

    const promises: Promise<unknown>[] = []
    const resolvedData: Record<string, unknown> = {}
    Object.entries(props.dataSource).forEach(([key, val]) => {
      const promise = Promise.resolve(val).then((d) => {
        if (isSourceChanged) {
          return
        }

        resolvedData[key] = d
      })

      promises.push(promise)
    })

    Promise.all(promises).then(() => {
      data.value = resolvedData
    })
  },
  {
    flush: 'post',
  },
)
</script>
<template>
  <component :is="props.content" v-if="data" v-bind="data" />
  <component :is="props.skeleton" v-else />
</template>
