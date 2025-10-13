<script lang="ts" setup>
import { PersonalInfoModel } from '@models/PersonalInfoModel'

const personalInfo = new PersonalInfoModel({})
const email = personalInfo.email
const phone = personalInfo.phone
</script>
<template>
  <div class="d-flex flex-column gap-2">
    <div>
      <div className="uppercase fw-medium fs-xxl">{{ personalInfo.name }}</div>
      <div>{{ personalInfo.location }}</div>
    </div>
    <a className="fw-medium fs-xs" :href="email && `mailto:${email}`">{{ personalInfo.email }}</a>
    <a
      className="uppercase fw-medium fs-xs"
      :href="phone && `tel:${phone.replaceAll(' ', '').replaceAll('-', '')}`"
      >{{ personalInfo.phone }}</a
    >
  </div>
</template>
