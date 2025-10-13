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
    <div>
      <div className=" d-flex justify-content-between align-items-end">
        <div class="uppercase">
          <div class="fs-xl fw-medium">TietoEvry</div>
          <div>07/2021 - Current</div>
        </div>
        <div class="position border-bottom">Software Engineer</div>
      </div>
    </div>
    <div class="border-end py-4 d-flex flex-column gap-4">
      <div v-for="exp in experience" :key="exp.project">
        <div class="d-flex justify-content-between pe-4">
          <h3 class="fs-md">{{ exp.project }}</h3>
          <div class="d-flex fs-xs">
            <!-- Yes, I know, this separator is beautiful, I'm not proud of it tho -->
            <div>{{ exp.techStack.join('&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;') }}</div>
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
