<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl lg:h-full lg:w-[50rem]">
    <div class="card-body">
      <div class="card-title">{{ t('project.title') }}</div>
      {{ t('project.description') }}
    </div>
  </div>
</template>

<style scoped>

</style>
