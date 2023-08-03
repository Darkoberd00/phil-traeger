<script setup lang="ts">
import { useI18n } from "vue-i18n";
import router from "@/router";
const { t } = useI18n()
</script>

<template>
  <div class="card h-[15rem] bg-base-300 shadow-xl lg:card-side lg:w-[50rem]">
    <figure><img src="@/assets/image/phil-traeger.png" alt="icon"/></figure>
    <div class="card-body">
      <h2 class="card-title">{{t('project.pt.title')}}</h2>
      <p>{{t('project.pt.subtitle')}}</p>
      <div class="card-actions justify-end">
        <button class="btn-primary btn" @click="router.push('/project/phil-traeger')">{{t('read-more')}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>