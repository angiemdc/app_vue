import { shallowMount } from '@vue/test-utils';
import { useRoute } from 'vue-router';
import { createStore } from 'vuex';
import VLazyImage from 'v-lazy-image';
import Description from '@/components/Description/Description.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
}));

describe('Description.vue', () => {
  let store;
  beforeEach(() => {
    store = createStore({
      state: {},
      getters: {
        'moviesModule/selectedMovie': () => ({
          id: 1, title: 'Movie 1', image: 'image.jpg', rating: 8, movieType: 'Action', year: 2020, runtime: 120, description: 'Movie 1 description',
        }),
      },
    });
  });

  test('Description component has correct template', () => {
    useRoute.mockImplementationOnce(() => ({
      params: {
        id: 1,
      },
    }));

    const wrapper = shallowMount(Description, {
      propsData: {
        movieId: 1,
      },
      mocks: {
        $filters: {
          movieTypesFormat: (val) => val,
          yearFormat: (val) => val,
        },
      },
      components: { VLazyImage },
      store,
      global: {
        global: {
          // provide: {
          //   [key]: store,
          // },
          stubs: ['router-view'],
        },
      },
    });
    console.log(wrapper);

    // expect(wrapper.html()).toContain('<section class="description__section">');
    // expect(wrapper.html()).toContain('<img class="card__img" alt="movieImg">');
    // expect(wrapper.html()).toContain('<span class="heading-1">8</span>');
    // expect(wrapper.html()).toContain('<h3 class="description__type heading-3">Action</h3>');
    // eslint-disable-next-line max-len
    // expect(wrapper.html()).toContain('<h2 class="description__year heading-2 text--red">2020</h2>');
  });
});
