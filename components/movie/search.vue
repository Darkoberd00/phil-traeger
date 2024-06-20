<script setup lang="ts"> 
  interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    imdbID: string;
  }

  const query = ref('batman');
  const movies: Ref<Movie[]> = ref([]);

  async function search() {
    const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=2792f380&s=${query.value}`) as {Search: Movie[]};
    movies.value = Search;
  }

  search();
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <label for="search">Search for a movie:</label>
      <input type="text" v-model="query" id="search" />
      <button type="submit">Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID}}">
          <NuxtImg :src="movie.Poster" :alt="movie.Title" width="300" format="webp"/>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>