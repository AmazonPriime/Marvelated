<template>
    <div class="results">
        <div v-if="store.results.length > 0" class="movies-container">
            <div v-for="movie of store.results" :key="movie.id" class="movie">
                <img
                    :alt="movie.original_title + ' Poster'"
                    :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                    v-if="movie.poster_path"
                />
            </div>
        </div>
        <div v-else class="movies-container">
            <div class="no-results">
                No results available, use the search above.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import store from '@/store';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Results extends Vue {
    store = store;
}
</script>

<style scoped>
.results {
    margin-top: 16px;
    text-align: left;
}

.movies-container {
    display: flex;
    gap: 1em;
    border: 5px solid #ED1D24;
    border-left: 0;
    border-right: 0;
    padding: 16px;
    overflow: scroll;
    height: 225px !important;
}

.no-results {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.movie {
    cursor: pointer;
}

.movie img {
    height: 225px !important;
}
</style>
