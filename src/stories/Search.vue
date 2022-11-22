<template>
    <section class='search__content'>
    <div>
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
    </div>
  </section>
</template>

<script>
import './search.scss';
import MyButton from './Button.vue';

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
