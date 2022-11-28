import FooterMovie from '../components/Footer/Footer.vue';

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Example/Footer',
  component: FooterMovie,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FooterMovie },
  template: '<footer-movie/>',
});

export const Footer = Template.bind({});
