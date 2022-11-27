import SearchInput from '../components/Search/Search.vue';

export default {
  title: 'Example/Search',
  component: SearchInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SearchInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<search-input :placeholder="placeholder"/>',
});

export const Search = Template.bind({});
Search.args = {
  placeholder: 'What do you want to watch?',
};
