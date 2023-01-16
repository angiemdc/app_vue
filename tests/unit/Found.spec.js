import { mount } from '@vue/test-utils';
import Found from '@/components/Found/Found.vue';
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';

describe('Found', () => {
  it('should render a p element if numberMovie prop is provided', () => {
    const wrapper = mount(Found, {
      propsData: {
        numberMovie: 1,
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should render the SearchFilter component if numberMovie prop is provided', () => {
    const wrapper = mount(Found, {
      propsData: {
        numberMovie: 1,
      },
    });
    expect(wrapper.findComponent(SearchFilter).exists()).toBe(true);
  });

  it('should emit an event when SearchFilter component emits a handleSerchBy event', async () => {
    const wrapper = mount(Found, {
      propsData: {
        numberMovie: 1,
      },
    });
    wrapper.findComponent(SearchFilter).vm.$emit('handleSerchBy', 'rating');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().handleSerchBy).toBeTruthy();
    expect(wrapper.emitted().handleSerchBy[0]).toEqual(['rating']);
  });
});
