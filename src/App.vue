<template>
  <div id="app">
    <img alt="Marvel logo" src="./assets/marvel_logo.png">
    <Description />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Description from './components/Description.vue';

@Component({
  components: {
    Description,
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
  margin-top: 1em;
}

#app img {
  height: 100px;
}
</style>
