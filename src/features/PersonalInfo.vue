<script lang="ts" setup>
import { PersonalInfoModel } from '@models/PersonalInfoModel'

const personalInfo = new PersonalInfoModel({})
</script>
<template>
  <div class="d-flex flex-column gap-2">
    <div>
      <div className="uppercase fw-medium fs-xxl">{{ personalInfo.name }}</div>
      <div>{{ personalInfo.location }}</div>
    </div>
    <a v-if="personalInfo.email" className="fw-medium fs-xs" :href="personalInfo.EmailHref">{{
      personalInfo.email
    }}</a>
    <a
      v-if="personalInfo.phone"
      className="uppercase fw-medium fs-xs"
      :href="personalInfo.PhoneHref"
      >{{ personalInfo.phone }}</a
    >
  </div>
</template>
