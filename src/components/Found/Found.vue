<template>
 <section class='found__container'>
   <p v-if="numberMovie">{{numberMovie}} movie found</p>
   <p v-else-if="movieGenre">films by {{$filters.movieTypesFormat(movieGenre)}} genre</p>
   <SearchFilter v-if="numberMovie"
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
    movieGenre: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'sort by',
    },
  },
  data() {
    return {
      primary: 'Realease date',
      secondary: 'rating',
    };
  },
  emits: ['handleSerchBy'],
  setup(props, { emit }) {
    return {
      onClick(value) {
        emit('handleSerchBy', value === 'Realease date' ? 'year' : value);
      },
    };
  },
};
</script>
