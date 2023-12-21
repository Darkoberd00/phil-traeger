<script setup lang="ts">
import { useI18n } from "vue-i18n";
import router from "@/router";
const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl lg:card-side sm:w-[35rem] lg:w-[50rem]">
    <figure class="p-2"><img class="rounded-full w-[10rem]" src="@/assets/image/amazing-roulette.png" alt="icon"/></figure>
    <div class="card-body">
      <h2 class="card-title">{{t('project.ar.title')}}</h2>
      <p>{{t('project.ar.subtitle')}}</p>
      <div class="card-actions justify-end">
        <button disabled class="btn-primary btn" @click="router.push('/project/amazing-roulette')">{{t('read-more')}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>