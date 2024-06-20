<script lang="ts" setup>
  definePageMeta({
    layout: 'plain',
  })
</script>

<template>
  <div>
    <NuxtImg src="/cat.jpeg" sizes="xs:100vw sm:100vw md:1860px"/>
  </div>
</template>

<style>
  img {
    display: block;
    max-width: 100%;
  }
</style>