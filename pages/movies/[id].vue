<script setup lang="ts">
  interface MovieInfo {
    Plot: string;
    Title: string;
    Error: string;
    Poster: string;
  }

  const route = useRoute();

  // http://www.omdbapi.com/?apikey=2792f380&i=${route.params.id}
  const { data }: { data: Ref<MovieInfo> } = await useFetch(`http://www.omdbapi.com/?apikey=2792f380&i=${route.params.id}`, {
    pick: ['Plot', 'Poster', 'Title', 'Error'],
    key: `/movies/${route.params.id}`,
    method: 'get',
  })

  if (data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, message: 'Page not found'});
  }
  

  useHead({
    title: `${data.value.Title}`,
    meta: [
      { name: 'description', content: data.value.Plot },
      { name: 'og:description', content: data.value.Plot },
      { name: 'og:image', content: data.value.Poster },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]
  })

</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>