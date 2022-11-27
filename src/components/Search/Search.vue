<template>
  <section class='search__content'>
    <slot name="title"></slot >
    <label type="search" for='searchItem'>
      <input
        name='searchItem'
        type='search'
        class='search__input'
        v-model="searchItem"
        :placeholder="placeholder"
        @keydown="$emit('handleKeyDown')"
      />
    </label>
    <my-button primary size="large" @click="$emit('handleSubmit')" label="Search"  />
  </section>
</template>

<script>
import './search.scss';
import MyButton from '../Button/Button.vue';

export default {
  name: 'search-input',
  props: ['placeholder'],
  data() {
    return {
      searchItem: '',
    };
  },
  components: { MyButton },
  emits: ['handleSubmit', 'handleKeyDown'],
  created() {
    console.log(this.placeholder);
  },
};
</script>
