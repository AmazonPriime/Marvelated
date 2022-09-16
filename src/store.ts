import { reactive } from 'vue';

type MarvelatedStore = {
  results: any,
  updateResults: any,
  selectedMovie: any,
  setSelectedMovie: any,
  selectedMovieCredits: any,
  setSelectedMovieCredits: any,
};

const KEY: string = process.env.VUE_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

export default reactive<MarvelatedStore>({
  results: [],
  updateResults(results: any) {
    this.results = results;
  },
  selectedMovie: {},
  selectedMovieCredits: {},
  setSelectedMovie(movie: any) {
    const url = `${BASE_URL}movie/${movie?.id}?api_key=${KEY}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.selectedMovie = data;
          this.setSelectedMovieCredits(movie?.id);
        }
      });
  },
  setSelectedMovieCredits(movieId: number) {
    const url = `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.selectedMovieCredits = data;
          console.log(data?.cast.splice(0, 5));
        }
      });
  },
});
