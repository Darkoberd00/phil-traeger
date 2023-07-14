<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const name = 'Phil Träger'
const birthday = new Date(2000, 9, 26)
const age = getAge(birthday)

function getAge(oDate: Date): number {
  let diff_ms: number = Date.now() - oDate.getTime()
  let age_ms: Date = new Date(diff_ms)
  let age_years: number = age_ms.getUTCFullYear() - 1970
  return age_years < 0 ? NaN : age_years
}

function isMyBirthdayToday() {
  const today = new Date()
  return birthday.getDay() === today.getDay() && birthday.getMonth() === today.getMonth()
}
</script>

<template>
  <div class="card bg-base-300 shadow-xl md:w-[40rem]">
    <div class="card-body space-y-2">
      <h2 class="card-title">{{ t('about_me.title') }}</h2>
      <div class="max-md:space-y-2 md:flex md:space-x-5">
        <div>
          <div class="avatar">
            <div class="w-52 rounded">
              <img src="@/assets/image/profile.jpg" alt="profile" />
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
                    v-if="isMyBirthdayToday()"
                    class="tooltip"
                    v-bind:data-tip="t('about_me.birthday')"
                  >
                    <v-icon name="fa-birthday-cake" />
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
