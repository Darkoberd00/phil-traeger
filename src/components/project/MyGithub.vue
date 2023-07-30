<script setup lang="ts">
import type { User } from '@/types/github'
import { useI18n } from 'vue-i18n'
defineProps<{
  user: User
}>()
const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl lg:h-full lg:w-[25rem]">
    <div class="card-body">
      <div class="card-title">{{ t('my-github.title') }}</div>
      <a class="flex w-fit space-x-2 hover:link" :href="user.html_url">
        <div class="avatar">
          <div class="w-14 rounded-full">
            <img :src="user.avatar_url" alt="Github Avatar" />
          </div>
        </div>
        <div class="my-auto">
          <div class="text-xl font-bold">
            {{ user.name }}
          </div>
          <span class="badge">{{ user.login }}</span>
        </div>
      </a>
      <div class="flex">
        <div>
          <v-icon name="oi-repo" />
          {{ user.public_repos }} Repos
        </div>
      </div>
      <div class="flex">
        <div>
          <v-icon name="oi-people" />
          {{ user.followers }} followers · {{ user.following }} following
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
