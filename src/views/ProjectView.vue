<script async setup lang="ts">
import { getGithubProfile, getRepos } from '@/api'
import MyRepoGithub from '@/components/project/MyRepoGithub.vue'
import type { Repo } from '@/types/github'
import MyGithub from '@/components/project/MyGithub.vue'

const repoList = await Promise.resolve(getRepos())
const githubUser = await Promise.resolve(getGithubProfile())
let filterRepos: Repo[] = []
repoList.forEach((repo) => {
  if (repo.name === 'Darkoberd00' || repo.name === 'test') {
    return
  }
  filterRepos.push(repo)
})
</script>

<template>
  <div class="mt-4 flex">
    <div class="mx-auto">
      <MyGithub :user="githubUser" />
    </div>
  </div>

  <div class="mt-4 flex">
    <div class="mx-auto">
      <div class="h-fit w-fit max-lg:space-y-4 lg:grid lg:grid-cols-2 lg:gap-4">
        <div v-for="repo in filterRepos" :key="repo.name">
          <MyRepoGithub :repo="repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
