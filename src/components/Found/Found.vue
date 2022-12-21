<template>
 <section class='found__container'>
   <p>{{numberMovie}} movie found</p>
   <SearchFilter
    :serchTitle="title"
    :primaryBtn="primary"
    :secondaryBtn="secondary"
    @handleSerchBy="onClick"
  />
  </section>
</template>

<script>
import './found.scss';
import SearchFilter from '../SearchFilter/SearchFilter.vue';

export default {
  name: 'found-movie',
  components: {
    SearchFilter,
  },
  props: {
    numberMovie: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      title: 'sort by',
      primary: 'Realease date',
      secondary: 'rating',
    };
  },
  emits: ['handleSerchBy'],
  setup(props, { emit }) {
    return {
      onClick(value) {
        console.log(value);
        emit('handleSerchBy', value === 'Realease date' ? 'year' : value);
      },
    };
  },
};
</script>
