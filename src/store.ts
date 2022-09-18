import { reactive } from 'vue';
import marvelMovieDetails from './static/mcu_movies.json';

type MarvelatedStore = {
  results: any,
  updateResults: any,
  selectedMovie: any,
  setSelectedMovie: any,
  selectedMovieCredits: any,
  setSelectedMovieCredits: any,
  relatedCastCrew: any,
  setRelatedCastCrew: any,
};

const KEY: string = process.env.VUE_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

export default reactive<MarvelatedStore>({
  results: [],
  updateResults(results: any) {
    this.results = results.filter((res: any) => res.poster_path);
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
          this.setRelatedCastCrew();
        }
      });
  },
  relatedCastCrew: {},
  setRelatedCastCrew() {
    // get all the cast/crew IDs
    const castCrewIds: number[] = [];
    const castCrewFromMovie = [...this.selectedMovieCredits.cast, this.selectedMovieCredits.crew];
    castCrewFromMovie.forEach((element: any) => {
      if (element.id) {
        castCrewIds.push(element.id);
      }
    });

    // filter out cast/crew that have not worked for marvel project
    const castCrewInMarvel: any = [];
    Object.entries(marvelMovieDetails.people).forEach((person: any) => {
      if (castCrewIds.includes(parseInt(person[0], 10))) {
        castCrewInMarvel.push([parseInt(person[0], 10), person[1]]);
      }
    });

    // gather the details of the cast/crew
    const castCrewInMarvelDetails: any = {};
    marvelMovieDetails.movies.forEach((movie: any) => {
      const { cast, crew } = movie;
      const castAndCrew = [...cast, ...crew];
      castAndCrew.forEach((person: { id: number, character?: string, job?:string }) => {
        const personDetails: any = castCrewInMarvel.find((member: any) => member[0] === person.id);
        if (personDetails) {
          if (person.id in castCrewInMarvelDetails) {
            castCrewInMarvelDetails[person.id].credits.push({
              name: person.character || person.job,
              movie: movie.title,
            });
          } else {
            castCrewInMarvelDetails[person.id] = {
              name: personDetails[1].name,
              profile_path: personDetails[1].profile_path,
              known_for: personDetails[1].known_for,
              credits: [{
                name: person.character || person.job,
                movie: movie.title,
              }],
            };
          }
        }
      });
    });

    this.relatedCastCrew = castCrewInMarvelDetails;
  },
});
