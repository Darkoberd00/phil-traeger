<script setup lang="ts">
import type { NuxtError } from '#app'
import { clearError } from '#app'
defineProps<{
  error?: NuxtError
}>()
const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <NuxtLayout name="error-layout">
    <OwnCard
      :title="error?.statusCode.toString()"
      card-width="max-md:mx-4 md:mx-auto md:w-[25%]"
      title-class="justify-center flex"
    >
      <div class="justify-center flex">{{ error?.statusMessage }}</div>
      <TenorErrorGIF />
      <div class="justify-center flex">
        <button tabindex="0" class="btn btn-ghost w-full md:w-3/4" @click="handleError">
          Go back home
        </button>
      </div>
    </OwnCard>
  </NuxtLayout>
</template>
