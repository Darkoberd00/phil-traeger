<script lang="ts" setup>
  const user = useUserStore();
</script>

<template>
  <div>
    <nav style="display: flex; gap: 10px;">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io" target="_blank">Vue School</NuxtLink>
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a href="#" v-else @click.prevent="user.isLoggedIn = false"> Logout</a>
    </nav>
    <slot></slot>
  </div>
</template>

<style>

</style>