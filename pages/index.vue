<script setup lang="ts">
const { t, locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const age = runtimeConfig.public.BIRTHDAY
const name = runtimeConfig.public.NAME
const url = runtimeConfig.public.URL

useSeoMeta({
  ogTitle: t('navbar.about'),
  ogDescription: t('seo.about.description'),
  ogImage: 'https://' + url,
  ogUrl: 'https://' + url,
  twitterTitle: t('navbar.about'),
  twitterDescription: t('seo.about.description'),
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
</script>

<template>
  <div class="space-y-4">
    <OwnCard :title="t('navbar.about')">
      {{ name }}
      {{ age }}
      <p class="text-xl font-bold"></p>

      {{ getAge(new Date('2000-10-26')) }}
      <ContentDoc :path="'/' + locale + '/about'" />
    </OwnCard>
  </div>
</template>

<style scoped></style>
