<template>
    <div v-if="store.selectedMovie" class="movie-container">
        <img
            :alt="store.selectedMovie.original_title + ' Poster'"
            :src="'https://image.tmdb.org/t/p/original' + store.selectedMovie.poster_path"
            v-if="store.selectedMovie.poster_path"
        />
        <div class="movie-details">
            <h1 class="title">
                {{ store.selectedMovie.original_title }}
                <span class="year">
                    ({{ store.selectedMovie.release_date.substring(0, 4) }})
                </span>
            </h1>
        </div>
    </div>
</template>

<script lang="ts">
import store from '@/store';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SelectedMovie extends Vue {
    store = store;
}
</script>

<style scoped>
.movie-container {
    margin-top: 16px;
    margin-left: 16px;
    text-align: left;
    display: flex;
    gap: 1em;
}

.movie-container img {
    height: 250px !important;
}

.title {
    margin: 0;
}

.year {
    font-size: 20px;
}
</style>
