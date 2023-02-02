import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo/Logo.vue';

describe('Logo', () => {
  it('should render an img element', () => {
    const wrapper = mount(Logo);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
