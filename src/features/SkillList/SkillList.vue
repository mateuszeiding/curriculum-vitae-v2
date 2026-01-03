<script lang="ts" setup>
import AwaitContent from '@components/AwaitContent.vue'
import type { SkillGroupModel } from '@data/models/SkillModel'
import SkillListContent from './SkillListContent.vue'
import SkillListSkeleton from './SkillListSkeleton.vue'
import { API } from '@data/API'

const api = new API()
const dataSource: Record<keyof PropsOf<typeof SkillListContent>, MaybePromise<unknown>> = {
  groups: api.get<SkillGroupModel[]>('skill/list'),
}
</script>
<template>
  <div class="d-flex flex-column gap-5">
    <AwaitContent :data-source :content="SkillListContent" :skeleton="SkillListSkeleton" />
  </div>
</template>
