import { reactive } from 'vue';

export default reactive<{ results: any, updateResults: any, selectedMovie: any }>({
  results: [],
  updateResults(results: any) {
    this.results = results;
  },
  selectedMovie: {},
});
