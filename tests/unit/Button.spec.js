import { mount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';

describe('Button.vue', () => {
  it('renders label text when passed', () => {
    const label = 'new message';
    const wrapper = mount(Button, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
  it('renders with correct size class', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' },
    });
    expect(wrapper.classes()).toContain('storybook-button--large');
  });
  it('renders with correct type class', () => {
    const wrapper = mount(Button, {
      props: { primary: true },
    });
    expect(wrapper.classes()).toContain('storybook-button--primary');
  });
  it('emits click event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
