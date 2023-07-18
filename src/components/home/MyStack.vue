<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl sm:w-[24rem]">
    <div class="card-body">
      <h2 class="card-title">{{ t('my-stack.title') }}</h2>
      <p>{{ t('my-stack.description') }}</p>
      <div class="mx-auto pt-4 sm:flex sm:space-x-5">
        <ul class="list-none">
          <li><v-icon name="vi-file-type-access" /> Microsoft Access</li>
          <li><v-icon name="vi-file-type-arduino" /> Arduino</li>
          <li><v-icon name="vi-file-type-eslint" /> Eslint</li>
          <li><v-icon name="vi-file-type-excel" /> Microsoft Excel</li>
          <li><v-icon name="vi-file-type-git" /> Git</li>
          <li><v-icon name="vi-file-type-gradle" /> Gradle</li>
          <li><v-icon name="vi-file-type-html" /> HTML</li>
          <li><v-icon name="vi-file-type-jar" /> Java</li>
          <li><v-icon name="vi-file-type-js-official" color="black" /> JavaScript</li>
          <li><v-icon name="vi-file-type-json" /> Json</li>
          <li><v-icon name="vi-file-type-jupyter" /> Jupyter Notebooks</li>
          <li><v-icon name="vi-file-type-kotlin" /> Kotlin</li>
          <li><v-icon name="vi-file-type-prettier" /> Prettier</li>
          <li><v-icon name="vi-file-type-tex" /> LaTeX</li>
          <li><v-icon name="vi-file-type-markdown" /> Markdown</li>
          <li><v-icon name="vi-file-type-maven" /> Maven</li>
          <li><v-icon name="vi-file-type-mysql" /> MySQL</li>
          <li><v-icon name="vi-file-type-node" /> NodeJs</li>
          <li><v-icon name="vi-file-type-npm" /> npm</li>
        </ul>
        <ul class="list-none">
          <li><v-icon name="vi-file-type-nuxt" /> Nuxt</li>
          <li><v-icon name="vi-file-type-outlook" /> Outlook</li>
          <li><v-icon name="vi-file-type-pgsql" /> PostgreSQL</li>
          <li><v-icon name="vi-file-type-php" /> Php</li>
          <li><v-icon name="vi-file-type-powerpoint" /> Powerpoint</li>
          <li><v-icon name="vi-file-type-powershell" /> Powershell</li>
          <li><v-icon name="vi-file-type-python" /> Python</li>
          <li><v-icon name="vi-file-type-photoshop" /> Photoshop</li>
          <li><v-icon name="vi-file-type-typescript-official" /> TypeScript</li>
          <li><v-icon name="vi-file-type-typo3" /> Typo3</li>
          <li><v-icon name="vi-file-type-vite" /> Vite</li>
          <li><v-icon name="vi-file-type-vitest" /> Vitest</li>
          <li><v-icon name="vi-file-type-vscode" /> VSCode</li>
          <li><v-icon name="vi-file-type-vue" /> Vue</li>
          <li><v-icon name="vi-file-type-word" /> Word</li>
          <li><v-icon name="vi-file-type-css" /> CSS</li>
          <li><v-icon name="vi-file-type-apache" /> Apache</li>
          <li><v-icon name="vi-file-type-cpp3" /> C++</li>
          <li><v-icon name="bi-three-dots" /> {{ t('my-stack.more') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
