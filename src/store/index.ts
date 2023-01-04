import { createStore } from 'vuex';
import moviesModule from './modules/movies';

export default createStore({
  modules: {
    moviesModule,
  },
});
