<script lang="ts" setup>
import { ExperienceModel } from '@models/ExperienceModel'
import EmphasizeText from './cmp/EmphasizeText.vue'

defineProps<{
  experience: ExperienceModel[]
}>()
</script>
<template>
  <div class="border-end py-4 d-flex flex-column gap-2 pe-4">
    <div v-for="exp in experience" :key="exp.project">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="fs-md">{{ exp.project }}</h3>
        <!-- Yes, I know, this separator is beautiful, I'm not proud of it tho -->
        <div class="d-flex fs-xs">
          {{ exp.techStack.join('&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;') }}
        </div>
      </div>
      <div class="fs-xs">{{ exp.description }}</div>
      <ul class="py-2">
        <li v-for="bulletPoint in exp.bulletPoints" :key="bulletPoint.value">
          <EmphasizeText :bullet-point />
        </li>
      </ul>
    </div>
  </div>
</template>
