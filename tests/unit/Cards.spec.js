import { mount } from '@vue/test-utils';
import CardsLayout from '@/components/Cards/Cards.vue';
import '@/components/Cards/cards.scss';

describe('Cards Layout', () => {
  test('CardsLayout component has correct template', () => {
    const wrapper = mount(CardsLayout, {
      propsData: {
        data: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }],
      },
      mocks: {
        $filters: {
          movieTypesFormat: (val) => val,
          yearFormat: (val) => val,
        },
      },
    });
    expect(wrapper.html()).toContain('<ul class="cards">');
    expect(wrapper.html()).toContain('<li>');
    expect(wrapper.html()).not.toContain('<h1>No films found</h1>');
  });
});
