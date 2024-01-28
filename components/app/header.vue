<script setup lang='ts'>
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localPath = useLocalePath()
</script>

<template>
  <div>
    <div class='rounded-box mt-4 shadow-xl max-md:mx-4 md:mx-auto md:w-[50%]'>
      <div class='navbar rounded-box bg-base-300'>
        <div class='navbar-start'>
          <div tabindex='0' class='dropdown'>
            <label class='btn btn-circle btn-ghost'>
              <IconMenu></IconMenu>
            </label>
            <ul
                class='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 space-y-1 bg-base-300 p-2 shadow-2xl'
            >
              <li>
                <NuxtLink tabindex='0' :to="localPath('/')" active-class='active'>
                  {{ t('navbar.about') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink tabindex='0' :to="localPath('/contact')"  active-class='active'>
                  {{ t('navbar.contact') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink tabindex='0' :to="localPath('/projects')"   active-class='active'>
                  {{ t('navbar.project') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class='navbar-center'>
          <p class="btn btn-ghost font-bold text-[1.3rem] tracking-in-expand">
            phil-traeger.dev
          </p>
        </div>
        <div class='navbar-end'>
          <div class='btn btn-ghost'>
            <NuxtLink tabindex='0' v-if="locale != 'de'" :to="switchLocalePath('de')">
              <img
                  class="h-fit w-10 rounded"
                  src="@/assets/img/Flag_of_Germany.svg"
                  alt="de"
              />
            </NuxtLink>
            <NuxtLink tabindex='0' v-if="locale != 'en'" :to="switchLocalePath('en')">
              <img
                  class="h-fit w-10 rounded"
                  src="@/assets/img/Flag_of_the_United_States.svg"
                  alt="us"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
