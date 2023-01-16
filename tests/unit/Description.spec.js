import { mount } from '@vue/test-utils';
import { useRoute } from 'vue-router';
import { createStore } from 'vuex';
import VLazyImage from 'v-lazy-image';
import Description from '@/components/Description/Description.vue';
import * as moviesModule from '@/store/modules/movies';
import movieData from '@/utils/mock_data';

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
}));
describe('Description.vue', () => {
  let store;
  beforeEach(() => {
    store = createStore({
      state: {
        moviesData: movieData,
        error: '',
        selectedMovieId: '',
      },
      moviesModule: {
        state: {},
        getters: moviesModule.default.getters,
        namespaced: true,
      },
      getters: moviesModule.default.getters,
    });
  });

  test('Description component has correct template', () => {
    useRoute.mockImplementationOnce(() => ({
      params: {
        id: '424785',
      },
    }));

    const wrapper = mount(Description, {
      propsData: {
        movieId: '424785',
        getGenreValue: jest.fn(),
      },
      $filters: {
        movieTypesFormat: (val) => val,
        yearFormat: (val) => val,
      },
      components: { VLazyImage },
      store,
      global: {
        plugins: [store],
        stubs: ['router-view'],
      },
    });
    expect(wrapper.html()).toContain('Loading ...');
  });
});
