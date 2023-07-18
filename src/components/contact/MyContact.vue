<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { addToClipboard } from '@/utils/utils'

const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl sm:w-[24rem]">
    <div class="card-body">
      <div class="card-title">{{ t('my-contact.title') }}</div>
      <ul>
        <li class="space-x-1">
          <v-icon name="md-email-outlined" /><a class="link" href="mailto:phil@traeger-welt.de"
            >phil@traeger-welt.de</a
          >
        </li>
        <li class="space-x-1">
          <v-icon name="bi-telegram" /><a class="link" href="https://t.me/Darkoberd00"
            >@Darkoberd00</a
          >
        </li>
        <li class="space-x-1">
          <v-icon name="bi-discord" />
          <a
            class="link"
            @click="
              addToClipboard('darkoberd00', t('function.add-to-clipboard', { text: 'darkoberd00' }))
            "
            >darkoberd00</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
