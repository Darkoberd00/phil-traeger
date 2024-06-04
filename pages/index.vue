<script setup lang="ts">
const { t, locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const age = runtimeConfig.public.BIRTHDAY
const name = runtimeConfig.public.NAME
const url = runtimeConfig.public.URL

useSeoMeta({
  title: t('navbar.about'),
  description: t('seo.about.description'),
  ogTitle: t('navbar.about'),
  ogDescription: t('seo.about.description'),
  ogImage: 'https://' + url + '/android-chrome-512x512.png',
  ogSiteName: url,
  ogUrl: 'https://' + url + '/' + locale + '/',
  twitterTitle: t('navbar.about'),
  twitterDescription: t('seo.about.description'),
  twitterImage: 'https://' + url + '/android-chrome-512x512.png',
  twitterCard: 'summary'
})
</script>

<template>
  <div class="space-y-4">
    <OwnCard :title="t('navbar.about')">
      {{ name }}
      {{ age }}
      <p class="text-xl font-bold"></p>
      {{ getAge(new Date(age)) }}
      <ContentDoc :path="'/' + locale + '/about'" />
    </OwnCard>
  </div>
</template>

<style scoped></style>
