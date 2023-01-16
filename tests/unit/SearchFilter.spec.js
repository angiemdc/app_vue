import { createLocalVue, mount } from '@vue/test-utils';
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';

describe('SearchFilter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(SearchFilter, {
      propsData: {
        serchTitle: 'Search by',
        primaryBtn: 'title',
        secondaryBtn: 'gengre',
      },
    });
  });

  it('should emit handleSerchBy event when primary button is clicked', async () => {
    const primaryBtn = wrapper.findAll('button').at(0);
    primaryBtn.trigger('click');
    expect(wrapper.emitted().handleSerchBy[0]).toEqual(['title']);
  });

  it('should emit handleSerchBy event when secondary button is clicked', async () => {
    const secondaryBtn = wrapper.findAll('button').at(1);
    secondaryBtn.trigger('click');
    expect(wrapper.emitted().handleSerchBy[0]).toEqual(['gengre']);
  });
});
