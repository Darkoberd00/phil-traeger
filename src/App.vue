<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="px-4 pb-4">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>

            <!-- loading state -->
            <template #fallback>
              <div class="mt-10 flex">
                <div class="mx-auto text-lg">
                  <span class="loading loading-dots loading-lg"></span>
                </div>
              </div>
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
  </div>

  <footer class="footer"></footer>
</template>
