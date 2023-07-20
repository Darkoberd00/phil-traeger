<script setup lang="ts">
import type { Repo } from '@/types/github'
import { useI18n } from 'vue-i18n'
import { getIconFromLanguage } from '@/utils/utils'
defineProps<{
  repo: Repo
}>()
const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl lg:h-full lg:w-[25rem]">
    <div class="card-body">
      <div class="card-title">
        <v-icon name="bi-github" /><a class="link" v-bind:href="repo.html_url">{{ repo.name }}</a>
      </div>
      <p>{{ repo.description }}</p>
    </div>
    <div class="mx-8 my-3">
      <div class="flex space-x-4">
        <div class="tooltip" v-bind:data-tip="t('my-repo-github.forks')">
          <v-icon name="io-git-network" /> {{ repo.forks_count }}
        </div>
        <div class="tooltip" v-bind:data-tip="t('my-repo-github.stars')">
          <v-icon name="bi-star" /> {{ repo.stargazers_count }}
        </div>
        <div class="tooltip" v-bind:data-tip="t('my-repo-github.watchers')">
          <v-icon name="oi-eye" /> {{ repo.watchers_count }}
        </div>
        <div><v-icon v-bind:name="getIconFromLanguage(repo.language)" /> {{ repo.language }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
