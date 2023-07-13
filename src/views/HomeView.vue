<script setup lang="ts">
import MyStack from '@/components/MyStack.vue';
import AboutMe from "@/components/AboutMe.vue";

</script>

<template>
  <main>
    <div class="md:flex mx-auto md:space-x-5 max-md:space-y-5">
      <AboutMe/>
      <MyStack/>
    </div>
  </main>
</template>
