<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl sm:w-[24rem]">
    <div class="card-body">
      <div class="card-title">{{ t('my-contact.title') }}</div>
    </div>
  </div>
</template>

<style scoped></style>
