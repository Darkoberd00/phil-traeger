<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="card bg-base-300 shadow-xl sm:w-[24rem]">
    <div class="card-body">
      <div class="card-title">{{ t('my-links.title') }}</div>
      <ul class="space-y-2">
        <li>
          <div class="space-x-1">
            <v-icon name="bi-github" />
            <a class="hover:link" href="https://github.com/Darkoberd00">Github</a>
          </div>
        </li>
        <li>
          <div class="space-x-1">
            <v-icon name="fa-keybase" />
            <a class="hover:link" href="https://keybase.io/darkoberd00">Keybase</a>
          </div>
        </li>
        <li>
          <div class="space-x-1">
            <v-icon name="bi-twitter" />
            <a class="hover:link" href="https://twitter.com/darkoberd00">Twitter | X</a>
          </div>
        </li>
        <li>
          <div class="space-x-1">
            <v-icon name="bi-linkedin" />
            <a class="hover:link" href="https://www.linkedin.com/in/phil-träger-60528a200/"
              >Linkedin</a
            >
          </div>
        </li>
        <li>
          <div class="space-x-1">
            <v-icon name="bi-instagram" />
            <a class="hover:link" href="https://www.instagram.com/phil_t_2610/">Instagram</a>
          </div>
        </li>
        <li>
          <div class="space-x-1">
            <v-icon name="co-ko-fi" />
            <a class="hover:link" href="https://ko-fi.com/darkoberd00">{{
              t('my-links.coffee')
            }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
