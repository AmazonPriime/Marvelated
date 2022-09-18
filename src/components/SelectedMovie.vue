<template>
    <div v-if="JSON.stringify(store.selectedMovie) !== '{}'" class="movie-container">
        <img
            :alt="store.selectedMovie.original_title + ' Poster'"
            :src="'https://image.tmdb.org/t/p/original' + store.selectedMovie.poster_path"
            v-if="store.selectedMovie.poster_path"
        />
        <div class="movie-details">
            <h1 class="title">
                {{ store.selectedMovie.original_title }}
                <span class="year">
                    ({{ store.selectedMovie.release_date?.substring(0, 4) }})
                </span>
            </h1>
            <span class="overview">
                {{ store.selectedMovie.overview }}
            </span>
            <hr />
            <b>Cast:</b>
            {{ ' ' }}
            <span
                class="credits"
                v-for="person in store.selectedMovieCredits.cast?.slice(0,10)"
                v-bind:key="person.cast_id"
            >
                {{ person.name }} <i>({{ person.character }})</i>
            </span>
            {{ ' ' }}
            <span v-if="store.selectedMovieCredits.cast?.length > 10">
                <b>and {{ store.selectedMovieCredits.cast?.length - 10 }} more!</b>
            </span>
            <p class="release-date">
                Released: {{ store.selectedMovie.release_date }}
            </p>
            <p class="runtime">
                Runtime: {{ store.selectedMovie.runtime }} mins
            </p>
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
    margin: 16px;
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
    margin: 0;
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
