<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="card bg-base-300 shadow-xl md:w-[40rem]">
    <div class="card-body">
      <h2 class="card-title">
        {{ t('my-career.title') }}
      </h2>
      <!-- MaTSe -->
      <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          {{ t('my-career.matse.title') }}
          <br />
          <code>{{ t('my-career.matse.time') }}</code>
        </div>
        <div class="collapse-content">
          <h3 class="text-lg">{{ t('my-career.matse.how.name') }}</h3>
          <code>{{ t('my-career.matse.how.what') }}</code>
          <br />
          <br />
          <pre><code>---</code></pre>
          <h3 class="text-lg">{{ t('my-career.matse.how.name-1') }}</h3>
          <code>{{ t('my-career.matse.how.what-1') }}</code>
          <br />
          <br />
          <pre><code>---</code></pre>
          <code v-html="t('my-career.matse.skill-intro')"></code>
          <br />
          <br />
          <div class="max-sm:hidden sm:visible sm:ml-5">
            <ul class="sm:list-disc">
              <li>
                <pre><code>{{t('my-career.matse.skill')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.matse.skill-1')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.matse.skill-2')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.matse.skill-3')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.matse.skill-4')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.matse.skill-5')}}</code></pre>
              </li>
            </ul>
          </div>
          <div class="max-sm:visible sm:hidden">
            <code>
              {{ t('my-career.matse.skill') }}, {{ t('my-career.matse.skill-1') }},
              {{ t('my-career.matse.skill-2') }}, {{ t('my-career.matse.skill-3') }},
              {{ t('my-career.matse.skill-4') }},
              {{ t('my-career.matse.skill-5') }}
            </code>
          </div>
        </div>
      </div>
      <!-- ITA -->
      <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          {{ t('my-career.ita.title') }}
          <br />
          <code>{{ t('my-career.ita.time') }}</code>
        </div>
        <div class="collapse-content">
          <h3 class="text-lg">{{ t('my-career.ita.how.name') }}</h3>
          <code>{{ t('my-career.ita.how.what') }}</code>
          <br />
          <br />
          <pre><code>---</code></pre>
          <code v-html="t('my-career.ita.skill-intro')"></code>
          <br />
          <br />
          <div class="max-sm:hidden sm:visible sm:ml-5">
            <ul class="sm:list-disc">
              <li>
                <pre><code>{{t('my-career.ita.skill')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.ita.skill-1')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.ita.skill-2')}}</code></pre>
              </li>
              <li>
                <pre><code>{{t('my-career.ita.skill-3')}}</code></pre>
              </li>
            </ul>
          </div>
          <div class="max-sm:visible sm:hidden">
            <code>
              {{ t('my-career.ita.skill') }}, {{ t('my-career.ita.skill-1') }},
              {{ t('my-career.ita.skill-2') }},
              {{ t('my-career.ita.skill-3') }}
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
