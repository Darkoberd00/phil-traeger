<script setup lang="ts">
import MyStack from '@/components/MyStack.vue'
import AboutMe from '@/components/AboutMe.vue'
</script>

<template>
  <div class="mt-4 flex max-lg:mx-4 lg:w-full">
    <div class="max-lg:w-full max-lg:space-y-4 lg:mx-auto lg:flex lg:space-x-4">
      <div class="max-lg:flex">
        <div class="max-lg:mx-auto">
          <AboutMe />
        </div>
      </div>
      <div class="max-lg:flex">
        <div class="max-lg:mx-auto">
          <MyStack />
        </div>
      </div>
    </div>
  </div>
</template>
