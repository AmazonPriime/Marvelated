<template>
  <div id="app">
    <Header />
    <img alt="Marvel logo" src="./assets/marvel_logo.png" />
    <Description />
    <Search />
    <Results />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import Search from './components/Search.vue';
import Results from './components/Results.vue';

@Component({
  components: {
    Header,
    Description,
    Search,
    Results,
  },
})

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;
}

#app img {
  height: 100px;
}

body {
  margin: 0;
}
</style>
