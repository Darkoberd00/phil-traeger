<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="mt-4 max-md:mx-4 md:mx-auto md:w-[50%]">
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
              <a
                ><RouterLink to="/">{{ t('navbar.about') }}</RouterLink></a
              >
            </li>
            <li>
              <a
                ><RouterLink to="/contact">{{ t('navbar.contact') }}</RouterLink></a
              >
            </li>
            <li>
              <a
                ><RouterLink to="/projekt">{{ t('navbar.project') }}</RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn-ghost btn text-xl normal-case">Phil Träger</a>
      </div>
      <div class="navbar-end">
        <a class="btn-ghost btn-circle btn"><v-icon name="pi-eevee" scale="1.75" /></a>
      </div>
    </div>
  </div>
</template>
