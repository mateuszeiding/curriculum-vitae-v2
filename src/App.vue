<script setup lang="ts">
import PersonalInfo from './features/PersonalInfo.vue'
import SkillList from './features/SkillList.vue'
import ExperienceList from './features/ExperienceList/ExperienceList.vue'
import MyLinks from '@components/MyLinks.vue'
</script>

<template>
  <main class="container bg-paper d-flex flex-column">
    <div class="row h-100">
      <aside class="col-lg-4 col-sm-12 d-flex flex-column row-gap-5 personal-info">
        <PersonalInfo />
        <SkillList />
      </aside>
      <section class="col-lg-8 col-sm-12 d-flex flex-column">
        <ExperienceList class="flex-grow-1" />
        <MyLinks />
      </section>
    </div>
  </main>
</template>
<style lang="scss">
.personal-info {
  background-color: var(--personal-info-bg-color);
  color: var(--color-gray-000);
}
</style>
