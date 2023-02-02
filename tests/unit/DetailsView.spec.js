import { mount } from '@vue/test-utils';
import DetailsView from '@/views/DetailsView.vue';
import { createStore } from 'vuex';
import * as moviesModule from '@/store/modules/movies';
import movieData from '@/utils/mock_data';

describe('DetailsView', () => {
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
  it('renders correctly', () => {
    const wrapper = mount(DetailsView, {
      props: { id: '424785' },
      store,
    });
    expect(wrapper.find('.section_content').exists()).toBe(true);
  });
});
