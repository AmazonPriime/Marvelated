<template>
    <div class="related">
        <div class="header">
            Related Cast / Crew
        </div>
        <div v-if="Object.entries(store.relatedCastCrew).length > 0" class="related-details">
            Found a total of <b>{{ Object.entries(store.relatedCastCrew).length }}</b> related
            cast and crew members from <b>{{ store.selectedMovie.title }}</b>!
        </div>
        <div v-if="Object.entries(store.relatedCastCrew).length > 0" class="people-container">
            <div
                v-for="[id, details] in Object.entries(store.relatedCastCrew)"
                v-bind:key="id"
                class="person"
            >
                <img
                    :alt="details.name + ' Picture'"
                    :src="'https://image.tmdb.org/t/p/original' + details.profile_path"
                    v-if="!!details.profile_path"
                    onerror="https://www.pngitem.com/pimgs/m/80-801053_aws-simple-icons-non-service-specific-user-default.png"
                />
                <img
                    :alt="details.name + ' Picture'"
                    :src="'https://www.pngitem.com/pimgs/m/80-801053_aws-simple-icons-non-service-specific-user-default.png'"
                    v-else
                />
                <br />
                <span class="name">
                    {{ details.name }}
                </span>
                <span class="known-for">
                    {{ details.known_for }}
                </span>
                <div class="roles">
                    Roles
                </div>
                <div v-for="credit in details.credits" v-bind:key="credit" class="credits">
                    {{ credit.name }}
                    <span class="credit-movie">
                        {{ credit.movie }}
                    </span>
                </div>
            </div>
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

@Component
export default class Related extends Vue {
    store = store;
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
.roles {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 5px;
    align-items: center;
    font-weight: bold;
}
.roles::before, .roles::after {
    content: "";
    display: block;
    height: 1px;
    background-color: gray;
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
.people-container {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.25em;
}

.person {
    width: 300px;
}
.person hr {
    border-style: solid;
    border-color: grey;
    border-top: 0;
}
.person img {
    max-height: 300px !important;
    height: auto !important;
    border-radius: 10px;
}
.name {
    font-weight: bold;
}
.known-for {
    font-size: 14px;
    color: gray;
    display: block;
}
.credit-movie {
    font-size: 12px;
    color: gray;
    display: block;
    margin-bottom: 5px;
}
.related-details {
    margin: 16px;
}
</style>
