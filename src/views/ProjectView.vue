<script async setup lang="ts">
import { getGithubProfile, getRepos } from '@/api'
import MyRepoGithub from '@/components/project/MyRepoGithub.vue'
import type { Repo } from '@/types/github'
import MyGithub from '@/components/project/MyGithub.vue'
import ARShowcase from "@/components/project/amazing-roulette/ARShowcase.vue";
import MyProjects from "@/components/project/MyProjects.vue";
import PTShowcase from "@/components/project/phil-traeger/PTShowcase.vue";

const user = import.meta.env.VITE_GITHUB_USER
const repoList = await getRepos(user)
const githubUser = await getGithubProfile(user)
let filterRepos: Repo[] = []
repoList.forEach((repo) => {
  if (import.meta.env.VITE_NONE_SHOW_REPOS.includes(repo.name)) {
    return
  }
  filterRepos.push(repo)
})
</script>

<template>
  <div class="mt-4 flex">
    <div class="mx-auto">
      <MyProjects></MyProjects>
    </div>
  </div>

  <div class="mt-4 flex">
    <div class="mx-auto max-sm:w-full">
      <ARShowcase></ARShowcase>
    </div>
  </div>

  <div class="mt-4 flex">
    <div class="mx-auto max-sm:w-full">
      <PTShowcase></PTShowcase>
    </div>
  </div>

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
