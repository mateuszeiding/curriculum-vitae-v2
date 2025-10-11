<script lang="ts" setup>
import { API } from '@data/API'
import { SkillGroupModel } from '@models/SkillModel'
import { onMounted, ref } from 'vue'

const api = new API()
const groups = ref<SkillGroupModel[]>([])

onMounted(async () => {
  const result = await api.get<SkillGroupModel[]>('skill/list')

  groups.value = result
})
</script>
<template>
  <div>
    <div v-for="g in groups" :key="g.name" class="pb-6">
      <div class="fs-lg text-center uppercase fw-medium border-bottom pb-2">{{ g.name }}</div>
      <div v-for="s in g.skills" :key="s.name" class="pt-2 pb-3">
        <div class="d-flex justify-content-between">
          <div class="fs-sm uppercase fw-medium">{{ s.name }}</div>
          <div class="d-flex column-gap-2">
            <span v-for="level in s.level" :key="level" class="fs-lg lh-1">{{ '\u2022' }} </span>
          </div>
        </div>
        <div class="d-flex gap-3 ps-4 pt-2 flex-wrap">
          <div v-for="v in s.list" :key="v" class="fs-xs">
            {{ v }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
