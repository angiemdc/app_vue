import { mount } from '@vue/test-utils';
import SearchInput from '@/components/Search/Search.vue';

describe('SearchInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(SearchInput, {
      propsData: { placeholder: 'Search' },
    });
  });

  it('should emit handleSubmit event with searchItem value when form is submitted', async () => {
    const input = wrapper.find('input');
    input.setValue('test');
    await wrapper.vm.$nextTick();
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted().handleSubmit[0]).toEqual(['test']);
  });
});
