<script setup lang="ts">
import PersonalInfo from './features/PersonalInfo.vue'
import SkillList from './features/SkillList.vue'
import ExperienceList from './features/ExperienceList/ExperienceList.vue'
import MyLinks from '@components/MyLinks.vue'
</script>

<template>
  <main class="container bg-paper d-flex flex-column">
    <!-- <ResumeHeader /> -->
    <div class="row h-100">
      <div class="col-4 d-flex flex-column row-gap-6 border-end border-w-2 personal-info">
        <PersonalInfo />
        <SkillList />
      </div>
      <div class="col-6 d-flex flex-column">
        <ExperienceList class="flex-grow-1" />
        <MyLinks />
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.personal-info {
  background-color: var(--personal-info-bg-color);
  color: var(--color-gray-000);
}
</style>
