<script lang="ts" setup>
import AwaitContent from '@components/AwaitContent.vue'
import { API } from '@data/API'
import type { ExperienceModel } from '@data/models/ExperienceModel'
import ExperienceListContent from './ExperienceListContent.vue'
import ExperienceListSkeleton from './ExperienceListSkeleton.vue'

const api = new API()
const dataSource: Record<keyof PropsOf<typeof ExperienceListContent>, MaybePromise<unknown>> = {
  experience: api.get<ExperienceModel[]>('experience/list'),
}
</script>
<template>
  <div>
    <div className=" d-flex justify-content-between align-items-end">
      <div class="uppercase">
        <div class="fs-xxl fw-medium">TietoEvry</div>
        <div>07/2021 - Current</div>
      </div>
      <div class="position border-bottom">Software Engineer</div>
    </div>

    <AwaitContent
      :data-source
      :content="ExperienceListContent"
      :skeleton="ExperienceListSkeleton"
    />

    <div class="text-end">
      <div class="position border-end border-bottom">Junior Software Engineer</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.position {
  align-self: end;
  display: inline-block;
  padding: 0 0.5rem;
}
</style>
