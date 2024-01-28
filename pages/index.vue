<script setup lang="ts">
  const {t, locale} = useI18n()
</script>

<template>
  <div class="space-y-4">
    <Card :title="t('navbar.about')">
      <p class="text-xl font-bold"></p>
      {{getAge(new Date('2000-10-26'))}}
      <ContentDoc :path='"/"+locale+"/about"' />
    </Card>
  </div>
</template>

<style scoped>

</style>
