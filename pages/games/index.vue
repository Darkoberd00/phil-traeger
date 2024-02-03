<script setup lang="ts">
const localPath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="text-4xl flex justify-center font-bold pb-4">Games</h1>
    <OwnCard :title="t('games.minesweeper.title')" card-width="max-md:mx-4 md:mx-auto md:w-[25%]">
      <p>
        {{ t('games.minesweeper.description') }}
      </p>
      <nuxt-link
        :to="localPath('/games/minesweeper')"
        class="block mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-center"
        >Play</nuxt-link
      >
    </OwnCard>
  </div>
</template>

<style scoped></style>
