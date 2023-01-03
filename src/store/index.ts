import { createStore } from 'vuex';

type Movie ={ [key: string]: number| string | string[]}

const BASE_URL = ' http://localhost:3001/moviesData';
const limit = 8;
export default createStore({
  state: {
    moviesData: [],
    error: '',
    selectedMovieId: '',
  },
  getters: {
    getMovies: (state) => state.moviesData,
    selectedMovie:
    (state) => (id:number) => state.moviesData.find((movie: Movie) => movie?.id === id),
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.moviesData = movies;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_ID(state, id) {
      state.selectedMovieId = id;
    },
  },

  actions: {
    async loadMovies({ commit }) {
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
    async filterByTypes({ commit }, movieType) {
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
});
