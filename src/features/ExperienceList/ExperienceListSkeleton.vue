<template>
  <div class="border-end py-4 d-flex flex-column gap-2 pe-4">
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="fs-md skeleton w-25" />
        <div class="d-flex fs-xs w-25 justify-content-end">
          <span class="fs-xs skeleton w-25" />
          {{ `&nbsp;&nbsp;|&nbsp;&nbsp;` }}
          <span class="skeleton w-25" />
        </div>
      </div>

      <div class="fs-xs mt-2 skeleton" />
      <ul class="py-2">
        <li v-for="n in 3" :key="n">
          <div
            class="skeleton"
            :class="{
              'w-75': n === 3,
            }"
          />
          <div v-if="n === 1" class="skeleton mt-2 w-50" />
        </li>
      </ul>
    </div>
  </div>
</template>
