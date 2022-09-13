import { reactive } from 'vue';

type MarvelatedStore = {
  results: any,
  updateResults: any,
  selectedMovie: any,
  setSelectedMovie: any,
};

export default reactive<MarvelatedStore>({
  results: [],
  updateResults(results: any) {
    this.results = results;
  },
  selectedMovie: {},
  setSelectedMovie(movie: any) {
    this.selectedMovie = movie;
  },
});
