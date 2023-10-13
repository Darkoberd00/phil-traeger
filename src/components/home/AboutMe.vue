<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getAge, isMyBirthdayToday } from '@/utils/funktions'

const { t } = useI18n()

const name = import.meta.env.VITE_NAME
const birthday = new Date(import.meta.env.VITE_BIRTHDAY)
const age = getAge(birthday)
</script>

<template>
  <div class="card bg-base-300 shadow-xl md:w-[40rem]">
    <div class="card-body space-y-2">
      <h2 class="card-title">{{ t('about_me.title') }}</h2>
      <div class="max-md:space-y-2 md:flex md:space-x-5">
        <div>
          <div class="avatar">
            <div class="w-52 rounded">
              <img src="@/assets/image/profile.jpeg" alt="profile" />
            </div>
          </div>
        </div>
        <div>
          <div class="space-y-2">
            <p class="text-xl font-bold">{{ t('about_me.intro', { name: name }) }}</p>
            <ul class="list-disc px-5 text-lg">
              <li>
                <div class="flex space-x-1.5">
                  <div>
                    {{ t('about_me.age', { age: age }) }}
                  </div>
                  <div
                    v-if="isMyBirthdayToday(birthday)"
                    class="tooltip"
                    v-bind:data-tip="t('about_me.birthday')"
                  >
                    <v-icon animation="wrench" speed="slow" name="fa-birthday-cake" />
                  </div>
                </div>
              </li>
              <li>{{ t('about_me.life') }}</li>
              <li>{{ t('about_me.today') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <p>{{ t('about_me.description') }}</p>
    </div>
  </div>
</template>
