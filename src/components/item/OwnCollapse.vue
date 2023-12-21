<script setup lang="ts">
import {ref} from "vue";

let open = ref(false)
</script>

<template>
  <div class="collapse bg-base-200">
    <input type="checkbox" @click="open = !open" />
    <div class="collapse-title absolute right-[-1.5rem] w-fit place-items-center text-xl font-medium">
      <v-icon v-if="!open" name="bi-chevron-down" animation="float" speed="slow" scale="1.5"></v-icon>
      <v-icon v-else name="bi-chevron-up" animation="float" speed="slow" scale="1.5"></v-icon>
    </div>
    <slot></slot>
  </div>
</template>