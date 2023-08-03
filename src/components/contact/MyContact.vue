<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl sm:w-[24rem]">
    <div class="card-body">
      <div class="card-title">{{ t('my-contact.title') }}</div>
      <ul class="space-y-2">
        <li class="space-x-1">
          <v-icon name="md-email-outlined" /><a
            class="hover:link"
            href="mailto:phil@traeger-welt.de"
            >phil@traeger-welt.de</a
          >
        </li>
        <li class="space-x-1">
          <v-icon name="bi-telegram" /><a class="hover:link" href="https://t.me/Darkoberd00"
            >@Darkoberd00</a
          >
        </li>
        <li class="space-x-1">
          <v-icon name="bi-discord" /><a
            class="hover:link"
            href="https://discord.com/users/213758917380014082"
            >darkoberd00</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
