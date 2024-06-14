<script setup lang="ts">
defineProps<{
  title?: string
  titleClass?: string
  cardWidth?: string
}>()
</script>

<template>
  <div
    class="card bg-base-300 shadow-xl"
    :class="cardWidth ? cardWidth : 'max-md:mx-4 md:mx-auto md:w-[50%]'"
  >
    <div class="card-body">
      <div class="card-title" :class="titleClass">
        {{ title }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
