<template>
  <form class='search__content' @submit.prevent="onSubmit">
    <slot name="title"></slot >
    <label type="search" for='searchItem'>
      <input
        name='searchItem'
        type='text'
        class='search__input'
        v-model="searchItem"
        :placeholder="placeholder"
      />
    </label>
    <my-button primary size="large" type='submit' label="Search"  />
  </form>
</template>

<script>
import { ref } from 'vue';
import './search.scss';
import MyButton from '../Button/Button.vue';

export default {
  name: 'search-input',
  props: ['placeholder'],
  components: { MyButton },
  emits: ['handleSubmit', 'handleKeyDown'],
  setup(props, { emit }) {
    const searchItem = ref('');
    const onSubmit = () => {
      console.log(searchItem.value);
      emit('handleSubmit', searchItem.value);
    };
    return { searchItem, onSubmit };
  },
};
</script>
