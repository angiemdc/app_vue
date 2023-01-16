import { mount } from '@vue/test-utils';
import Card from '@/components/Card/Card.vue';
import { testCart } from '@/utils/mock_data';

describe('Card.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card, {
      props: { ...testCart },
      mocks: {
        $filters: {
          movieTypesFormat: (val) => val,
          yearFormat: (val) => val,
        },
      },
    });
    expect(wrapper.find('.customCard').exists()).toBe(true);
    expect(wrapper.find('.card__img').attributes().src).toBe('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    expect(wrapper.find('.card__img').attributes().srcPlaceholder).toBe(undefined);
  });
});
