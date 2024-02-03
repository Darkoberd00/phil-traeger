<script setup lang="ts">
const { t } = useI18n()
const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <div>
    <footer class="footer footer-center p-2 text-base-content cursor-default">
      <aside>
        <p>
          Copyright © {{ year }} - {{ t('footer.rights') }} Phil Träger<span class="blink-2"
            >|</span
          >
        </p>
      </aside>
    </footer>
  </div>
</template>

<style scoped></style>
