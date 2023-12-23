<script setup lang="ts">
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
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    }
  ],
})
</script>

<template>
  <meta name="theme-color" content="#ffffff">
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
