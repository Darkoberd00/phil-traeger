<script setup lang="ts">
import type { NuxtError } from '#app'
import { clearError } from '#app'
const prob = defineProps<{
  error?: NuxtError
}>()
const handleError = () => clearError({ redirect: '/' })

const { t, locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const url = runtimeConfig.public.URL

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    }
  ]
})

useSeoMeta({
  title:
    prob.error?.statusCode.toString() +
    (prob.error?.statusMessage ? ' | ' + prob.error?.statusMessage : ''),
  description: t('seo.about.description'),
  ogTitle: t('navbar.about'),
  ogDescription: t('seo.about.description'),
  ogImage: window.location.origin + '/android-chrome-512x512.png',
  ogSiteName: url,
  ogUrl: window.location.origin + '/' + locale + '/',
  twitterTitle: t('navbar.about'),
  twitterDescription: t('seo.about.description'),
  twitterImage: window.location.origin + '/android-chrome-512x512.png',
  twitterCard: 'summary'
})
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
