<script setup lang="ts">
import PersonalInfo from './features/PersonalInfo.vue'
import SkillList from './features/SkillList/SkillList.vue'
import ExperienceList from './features/ExperienceList/ExperienceList.vue'
import MyLinks from '@components/MyLinks.vue'
import PrintButton from '@components/PrintButton.vue'
</script>
<template>
  <main class="container bg-paper d-flex flex-column">
    <div class="row h-100">
      <aside
        class="col-lg-4 col-sm-12 col-print-4 d-flex flex-column row-gap-5 personal-info flex-1"
      >
        <PersonalInfo />
        <SkillList class="flex-grow-1" />
      </aside>
      <section class="col-lg-8 col-sm-12 col-print-8 d-flex flex-column">
        <ExperienceList class="flex-grow-1" />
        <div class="d-flex d-print-none justify-content-between align-items-end">
          <MyLinks />
          <PrintButton />
        </div>
      </section>
    </div>
  </main>
</template>
<style lang="scss">
.personal-info {
  background-color: var(--personal-info-bg-color);
  color: var(--color-gray-000);

  @media print {
    color: var(--color-gray-000);
  }
}

@media print {
  @page {
    size: A4;
    margin: 0;
    padding: 0;

    @bottom-center {
      content: none;
    }
    @bottom-left {
      content: none;
    }
    @bottom-right {
      content: none;
    }
    @top-center {
      content: none;
    }
  }
}
</style>
