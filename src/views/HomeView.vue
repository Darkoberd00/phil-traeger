<script setup lang="ts">
import MyStack from '@/components/home/MyStack.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import MyLinks from '@/components/home/MyLinks.vue'
import MyCareer from '@/components/home/MyCareer.vue'
</script>

<template>
  <div class="mt-4 flex max-lg:mx-4 lg:w-full">
    <div class="max-lg:w-full max-lg:space-y-4 lg:mx-auto lg:flex lg:space-x-4">
      <div class="max-lg:flex">
        <div class="space-y-4 max-lg:mx-auto">
          <AboutMe />
          <MyCareer />
        </div>
      </div>
      <div class="max-lg:flex">
        <div class="space-y-4 max-lg:mx-auto">
          <MyStack />
          <div class="sm:flex">
            <div class="sm:mx-auto">
              <MyLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
