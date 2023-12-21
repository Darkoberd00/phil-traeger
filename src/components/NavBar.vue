<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useLangStore } from '@/stores/lang'
const { t } = useI18n()
const { changeLang, isDE } = useLangStore()

const eevee_count = import.meta.env.VITE_EEVEE_COUNT
const dropdown = ref<HTMLElement>()
let showEevee = ref(false)
let count = 0
const name = import.meta.env.VITE_NAME || "no name"

/**
 * Toggle Function
 *
 * Toggles the state of a feature when called. If the count is less than 10, it increments the count by 1.
 * When the count reaches 10, it resets the count to 0 and toggles the state of 'showEevee'.
 */
function toggle(): void {
  if (count < 10) {
    count++
    return
  }
  count = 0
  showEevee.value = !showEevee.value
}

function removeFocus(): void {
  console.log(dropdown.value)
  setTimeout(() => {
    console.log("test")
    dropdown.value?.blur()
  }, 300)

}
</script>

<template>
  <div class="rounded-box mt-4 shadow-xl max-md:mx-4 md:mx-auto md:w-[50%]">
    <div class="navbar rounded-box bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-circle btn-ghost">
            <v-icon name="hi-menu-alt-2" scale="1.5" />
          </label>
          <ul
            tabindex="0"
            class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 space-y-1 bg-base-300 p-2 shadow-2xl"
          >
            <li>
              <RouterLink @click="removeFocus" to="/" exactActiveClass="active">{{ t('navbar.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink @click="removeFocus" to="/contact" exactActiveClass="active">{{
                t('navbar.contact')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink @click="removeFocus" to="/project" exactActiveClass="active">{{
                t('navbar.project')
              }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <div @click="toggle" v-if="!showEevee" class="btn btn-ghost text-xl normal-case">
          <div>{{ name }}</div>
        </div>
        <div @click="toggle" v-else class="btn btn-ghost text-xl normal-case">
          <v-icon name="pi-eevee" scale="2" />
        </div>
      </div>
      <div class="navbar-end">
        <div @click="changeLang" class="btn btn-ghost">
          <div>
            <img
              v-if="isDE()"
              class="h-fit w-10 rounded"
              src="@/assets/image/Flag_of_the_United_States.svg"
              alt="us"
            />
            <img
              v-else
              class="h-fit w-10 rounded"
              src="@/assets/image/Flag_of_Germany.svg"
              alt="de"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
