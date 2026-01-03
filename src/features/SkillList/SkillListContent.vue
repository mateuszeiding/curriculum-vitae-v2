<script lang="ts" setup>
import { SkillGroupModel } from '@models/SkillModel'

defineProps<{
  groups: SkillGroupModel[]
}>()
</script>
<template>
  <div class="d-flex flex-column gap-5">
    <div v-for="g in groups" :key="g.name">
      <div class="fs-lg text-center uppercase fw-medium border-bottom pb-2">{{ g.name }}</div>
      <div
        v-for="s in g.skills.sort((a, b) => (a.name > b.name ? 1 : 0))"
        :key="s.name"
        class="pt-2 pb-3"
      >
        <div class="d-flex justify-content-between">
          <a v-if="s.link" :href="s.link" target="_blank" class="fs-sm uppercase fw-medium">{{
            s.name
          }}</a>
          <div v-else class="fs-sm uppercase fw-medium">{{ s.name }}</div>
          <div class="d-flex column-gap-2">
            <span v-for="level in s.level" :key="level" class="fs-lg lh-1">{{ '\u2022' }} </span>
          </div>
        </div>
        <div class="d-flex gap-3 ps-4 pt-2 flex-wrap">
          <div v-for="v in s.list.sort()" :key="v" class="fs-xs">
            {{ v }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
