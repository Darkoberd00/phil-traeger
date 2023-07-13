<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <div class="p-4">
    <RouterView />
  </div>

</template>

<style scoped></style>
