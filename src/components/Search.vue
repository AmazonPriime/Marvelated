<template>
  <input
      class="search-box"
      type="text"
      placeholder="Search for movie here..."
      @input="onInputChange"
  />
</template>

<script lang="ts">
import store from '@/store';
import { Vue, Component } from 'vue-property-decorator';

const KEY: string = process.env.VUE_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const onInputChange = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  const url = `${BASE_URL}search/movie?api_key=${KEY}&query=${target.value}`;
  if (target.value.length > 2) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const { results } = data;
          store.updateResults(results);
        }
      });
  }
};

@Component
export default class Search extends Vue {
  onInputChange = onInputChange;
}
</script>

<style scoped>
.search-box {
    max-width: 500px;
    width: 80%;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid black;
}
</style>
