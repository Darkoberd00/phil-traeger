<script setup lang="ts">
const props = defineProps<{
  search?: string
}>()

const list = [
  'sad eevee',
  'maxxc12 no disappointment',
  'John Cena',
  'Wo ist mein bier',
  'hand of blood rage',
  'atombombe',
  'pc breaking',
  'Minions',
  'Darth Vader',
  'Windows error',
  'Linux error',
  'Mac error',
  'uplaod loading error pissed',
  props.search
]

const { data: url } = await useAsyncData('gif', () =>
  $fetch('/api/tenorSearchOne', {
    query: { search: list[Math.floor(Math.random() * list.length)] }
  })
)
</script>

<template>
  <NuxtImg v-if="url !== null" provider="tenor" :src="url" />
</template>

<style scoped></style>
