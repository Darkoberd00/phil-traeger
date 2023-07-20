<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useLangStore } from '@/stores/lang'
const { t } = useI18n()
const { changeLang, isDE } = useLangStore()
let showEevee = ref(false)
let count = 0

function toggle(): void {
  if (count < 10) {
    count++
    return
  }
  count = 0
  showEevee.value = !showEevee.value
}
</script>

<template>
  <div class="rounded-box mt-4 shadow-xl max-md:mx-4 md:mx-auto md:w-[50%]">
    <div class="navbar rounded-box bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <v-icon name="hi-menu-alt-2" scale="1.5" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <RouterLink to="/" exactActiveClass="active">{{ t('navbar.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" exactActiveClass="active">{{
                t('navbar.contact')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/project" exactActiveClass="active">{{
                t('navbar.project')
              }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <div @click="toggle" v-if="!showEevee" class="btn-ghost btn text-xl normal-case">
          <div>Phil Träger</div>
        </div>
        <div @click="toggle" v-else class="btn-ghost btn text-xl normal-case">
          <v-icon name="pi-eevee" scale="2" />
        </div>
      </div>
      <div class="navbar-end">
        <div @click="changeLang" class="btn-ghost btn">
          <div>
            <img
              v-if="isDE()"
              class="h-fit w-10 rounded"
              src="@/assets/image/Flag_of_Germany.svg"
              alt="de"
            />
            <img
              v-else
              class="h-fit w-10 rounded"
              src="@/assets/image/Flag_of_the_United_States.svg"
              alt="us"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
