import { Commit } from 'vuex';

type Movie ={ [key: string]: number| string | string[]}

interface State {
  [key: string]: Movie[] | string,
}

const BASE_URL = ' http://localhost:3001/moviesData';
const limit = 8;

export default {
  namespaced: true,
  state(): State {
    return {
      moviesData: [] as Movie[],
      error: '',
      selectedMovieId: '',
    };
  },
  getters: {
    getMovies: (state:State) => state.moviesData,
    selectedMovie:
    (state:State) => (id:number) => {
      const movies = state.moviesData as Movie[];
      return movies.find((movie: Movie) => movie?.id === id);
    },
  },
  mutations: {
    SET_MOVIES(state:State, movies:Movie[]) {
      state.moviesData = movies;
    },
    SET_ERROR(state:State, error:string) {
      state.error = error;
    },
    SET_ID(state:State, id:string) {
      state.selectedMovieId = id;
    },
  },
  actions: {
    async loadMovies({ commit }: {commit:Commit}) {
      try {
        const response = await fetch(`${BASE_URL}?_limit=${limit}`);
        const data = await response.json();
        if (!data.length) throw Error('no data available');
        if (data) commit('SET_MOVIES', data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          const message = error.message as unknown as string;
          commit('SET_ERROR', message);
        }
      }
    },
    async filterByTypes({ commit }:{commit:Commit}, movieType:string) {
      try {
        const response = await fetch(`${BASE_URL}?movieType=${movieType}&_limit=${limit}`);
        const data = await response.json();
        if (!data.length) throw Error('no data available');
        if (data) commit('SET_MOVIES', data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          const message = error.message as unknown as string;
          commit('SET_ERROR', message);
        }
      }
    },
  },
};
