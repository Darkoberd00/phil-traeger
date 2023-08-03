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
        <ul class="list-none space-y-2">
          <li class="space-x-1">
            <v-icon name="vi-file-type-arduino" />
            <a href="https://www.arduino.cc" class="hover:link">Arduino</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-git" />
            <a href="https://git-scm.com" class="hover:link">Git</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-gradle" class="rounded bg-black dark:bg-base-300" />
            <a href="https://gradle.org" class="hover:link">Gradle</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-jar" />
            <a href="https://www.java.com/de/" class="hover:link">Java</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-jupyter" />
            <a href="https://jupyter.org" class="hover:link">Jupyter Notebooks</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-kotlin" />
            <a href="https://kotlinlang.org" class="hover:link">Kotlin</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-tex" class="rounded bg-black dark:bg-base-300" />
            <a href="https://www.latex-project.org" class="hover:link">LaTeX</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-maven" />
            <a href="https://maven.apache.org" class="hover:link">Maven</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-mysql" />
            <a href="https://www.mysql.com/de/" class="hover:link">MySQL</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-cpp3" />
            <a href="https://isocpp.org" class="hover:link">C++</a>
          </li>
        </ul>
        <ul class="list-none space-y-2 max-sm:mt-2">
          <li class="space-x-1">
            <v-icon name="vi-file-type-nuxt" />
            <a href="https://nuxt.com" class="hover:link">Nuxt</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-pgsql" />
            <a href="https://www.postgresql.org" class="hover:link">PostgreSQL</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-php" />
            <a href="https://www.php.net" class="hover:link">Php</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-python" />
            <a href="https://www.python.org" class="hover:link">Python</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-photoshop" />
            <a href="https://www.adobe.com/de/products/photoshop.html" class="hover:link"
              >Photoshop</a
            >
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-typescript-official" />
            <a href="https://www.typescriptlang.org" class="hover:link">TypeScript</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-typo3" />
            <a href="https://typo3.org" class="hover:link">Typo3</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-vue" />
            <a href="https://vuejs.org" class="hover:link">Vue</a>
          </li>
          <li class="space-x-1">
            <v-icon name="vi-file-type-apache" />
            <a href="https://httpd.apache.org" class="hover:link">Apache</a>
          </li>
          <li class="space-x-1"><v-icon name="bi-three-dots" /> {{ t('my-stack.more') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
