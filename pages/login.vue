<script lang="ts" setup>
  const user = useUserStore();
  definePageMeta({
    layout: 'plain',
  })
</script>

<template>
  <div>
    <form @submit.prevent="user.login">
      <h1>Login</h1>
      <label >
        Username
        <input type="text" />
      </label>
      <label >
        Password
        <input type="password" />
      </label>
      <button>Login</button>
    </form>
  </div>
</template>

<style>

</style>