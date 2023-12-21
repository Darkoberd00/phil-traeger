<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import router from '@/router'
const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl lg:card-side sm:w-[35rem] lg:w-[50rem]">
    <figure class="p-2">
      <img class="w-[10rem]" src="@/assets/image/phil-traeger.png" alt="icon" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ t('project.pt.title') }}</h2>
      <p>{{ t('project.pt.subtitle') }}</p>
      <div class="card-actions justify-end">
        <button disabled class="btn btn-primary" @click="router.push('/project/phil-traeger')">
          {{ t('read-more') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
