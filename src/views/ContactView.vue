<script setup lang="ts">
import MyLinks from '@/components/home/MyLinks.vue'
import MyContact from '@/components/contact/MyContact.vue'
</script>

<template>
  <div class="mt-4 flex max-lg:mx-4 lg:w-full">
    <div class="mx-auto">
      <div class="max-md:space-y-4 md:flex md:space-x-4">
        <MyContact />
        <MyLinks />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
