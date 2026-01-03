<script setup lang="ts">
import { ref } from 'vue'
import PersonalInfo from './features/PersonalInfo.vue'
import SkillList from './features/SkillList/SkillList.vue'
import ExperienceList from './features/ExperienceList/ExperienceList.vue'
import MyLinks from '@components/MyLinks.vue'
import PrintButton from '@components/PrintButton.vue'

const printRef = ref<HTMLDivElement>()
</script>
<template>
  <div ref="printRef" class="print-wrapper">
    <main class="container bg-paper d-flex flex-column">
      <div class="row h-100">
        <aside class="col-lg-4 col-sm-12 col-print-4 d-flex flex-column row-gap-5 personal-info">
          <PersonalInfo />
          <SkillList class="flex-grow-1" />
        </aside>
        <section class="col-lg-8 col-sm-12 col-print-8 d-flex flex-column">
          <ExperienceList class="flex-grow-1" />
          <div class="d-flex justify-content-between align-items-end">
            <MyLinks />
            <PrintButton v-if="printRef" :print-ref />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<style lang="scss">
.personal-info {
  background-color: var(--personal-info-bg-color);
  color: var(--color-gray-000);
}

.print-wrapper {
  margin: auto;
}
</style>
