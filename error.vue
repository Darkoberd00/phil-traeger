<script setup lang="ts">
  const props = defineProps({
    error: Object
  })
  function goBack() {
    useRouter().push('/');
  }
</script>

<template>
  <NuxtLayout>
    <Card :title="error.statusCode.toString()" card-width="max-md:mx-4 md:mx-auto md:w-[25%]" title-class="justify-center flex">
      <div class="justify-center flex">
        {{error.statusMessage}}
      </div>
      <TenorErrorGIF />
      <div class="justify-center flex">
        <button tabindex="0" class="btn btn-ghost w-full md:w-3/4" @click="goBack">Go back home</button>
      </div>
    </Card>

  </NuxtLayout>
</template>
