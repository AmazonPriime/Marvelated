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
            <span class="overview">
                {{ store.selectedMovie.overview }}
            </span>
            <hr />
            <span
                class="credits"
                v-for="person in store.selectedMovieCredits.cast.slice(0,5)"
                v-bind:key="person.cast_id"
            >
                {{ person.name }} (<i>{{ person.character }}</i>)
            </span>
            <br />
            <span class="release-date">
                Released: {{ store.selectedMovie.release_date }}
            </span>
            <br />
            <span class="runtime">
                Runtime: {{ store.selectedMovie.runtime }} mins
            </span>
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
    margin-right: 16px;
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

.runtime, .release-date {
    font-size: 14px;
    font-weight: bold;
}

.credits {
    font-size: 14px;
}

hr {
    border-style: solid;
    border-color: grey;
    border-top: 0;
}
</style>
