<template>
    <div class="related">
        <div class="header">
            Related Cast / Crew
        </div>
        <div v-if="people.length > 0" class="people-container">
            People go here or something
        </div>
        <div v-else class="no-people">
            There aren't any crew or cast members in this movie that have
            worked on a Marvel movie or show.
            <br />
            <img src="https://c.tenor.com/V6viLE6UQPEAAAAC/john-travolta-where-are-you-guys.gif" />
        </div>
    </div>
</template>

<script lang="ts">
import store from '@/store';
import { Vue, Component } from 'vue-property-decorator';
import marvelMovieDetails from '../static/mcu_movies.json';

const people: any = [];
// loop over selected cast/crew get their ids
// if they are in the data mcu_movies.json (people key)
// add them to the people array

// loop over people array and search for job/character
// in in the data mcu_movies.json (movies key)
// if they are in a movie add their role/job to their people object

@Component
export default class Related extends Vue {
    people = people;
}
</script>

<style scoped>
.header {
    font-size: 28px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 16px;
    align-items: center;
    text-transform: uppercase;
    color: #ED1D24;
}
.header::before, .header::after {
    content: "";
    display: block;
    height: 5px;
    background-color: #ED1D24;
}
.no-people {
    font-size: 22px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 16px;
}
.no-people img {
    width: 80%;
    height: auto !important;
    display: block;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
