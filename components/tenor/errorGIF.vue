<script setup lang="ts">
  let list = Array(
    "sad eevee",
    "maxxc12 no disappointment",
    "John Cena",
    "404",
    "Wo ist mein bier",
    "Fuck u",
    "hand of blood rage",
    "atombombe"
  )
  const { data: url, pending, error, refresh } = await useFetch("/api/tenorSearchOne", {
    query: { search: list[Math.floor(Math.random()*list.length)]}
  })
</script>

<template>
  <NuxtImg provider="tenor" :src="url" />
</template>

<style scoped>

</style>
