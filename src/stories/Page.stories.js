// eslint-disable-next-line import/no-extraneous-dependencies
import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },

  // Here we define the `template`
  template: '<my-page />',
});

export const Page = Template.bind({});
