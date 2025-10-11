<script lang="ts" setup>
import { API } from '@data/API'
import { ExperienceModel } from '@models/ExperienceModel'
import { onMounted, ref } from 'vue'
import EmphasizeText from './cmp/EmphasizeText.vue'

const api = new API()

const experience = ref<ExperienceModel[]>([])

onMounted(async () => {
  const response = await api.get<ExperienceModel[]>('experience/list')

  experience.value = response
})
</script>
<template>
  <div>
    <div v-for="exp in experience" :key="exp.position">
      <ul>
        <li v-for="bulletPoint in exp.bulletPoints" :key="bulletPoint.value">
          <EmphasizeText :bullet-point />
        </li>
      </ul>
    </div>
  </div>
</template>
