import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';
import Logo from '@/components/Logo/Logo.vue';

describe('Footer', () => {
  it('should render a footer element', () => {
    const wrapper = mount(Footer);
    expect(wrapper.find('.footer').exists()).toBe(true);
  });

  it('should render the logo component', () => {
    const wrapper = mount(Footer);
    expect(wrapper.findComponent(Logo).exists()).toBe(true);
  });
});
