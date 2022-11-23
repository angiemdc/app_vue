import HeaderMovie from './Header.vue';

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Example/Header',
  component: HeaderMovie,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HeaderMovie },
  template: '<header-movie/>',
});

export const Header = Template.bind({});
