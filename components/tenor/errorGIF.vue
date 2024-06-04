<script setup lang="ts">
const props = defineProps<{
  search?: string
}>()

const list = [
  'sad eevee',
  'maxxc12 no disappointment',
  'John Cena',
  '404',
  'Wo ist mein bier',
  'Fuck u',
  'hand of blood rage',
  'atombombe',
  'Winston Rocketbeans',
  'Tailerswift',
  'pc breaking',
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
