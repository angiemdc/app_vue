import CardsLayout from '../components/Cards/Cards.vue';
import movieData from '../utils/mock_data';

export default {
  title: 'Example/Cards',
  component: CardsLayout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CardsLayout },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<cards-layout :data="data"/>',
});

export const NoItemFound = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
  data: movieData,
};
