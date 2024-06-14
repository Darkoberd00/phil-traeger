<script setup lang="ts"></script>

<template>
  <div>
    <AppOwnHeader :error="false" />
    <div class="p-4">
      <slot />
    </div>
    <AppOwnFooter />
  </div>
</template>

<style scoped></style>
