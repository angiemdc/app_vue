<template>
  <header-movie>
    <template v-slot:hederSection >
      <div class="search">
        <h1 class='heading-1'>Find your Movie</h1>
        <SearchInput/>
        <SearchFilter />
      </div>
    </template>
  </header-movie>
  <FoundMovie :numberMovie="moviesData.length"  @handleSerchBy="handleCLick"/>
  <section class="section_content">
    <div v-if="error">{{error}}</div>
    <cards-layout :data="moviesData"/>
  </section>
</template>

<script>
import {
  defineComponent, watch, ref, onMounted, computed,
} from 'vue';
import { useStore } from 'vuex';
import HeaderMovie from '@/components/Header/Header.vue';
import FoundMovie from '@/components/Found/Found.vue';
import SearchInput from '@/components/Search/Search.vue';
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';
import CardsLayout from '@/components/Cards/Cards.vue';
import sortByValue from '@/composables/sortByValue';
import './homeView.scss';

export default defineComponent({

  name: 'HomeView',
  components: {
    HeaderMovie, FoundMovie, SearchInput, SearchFilter, CardsLayout,
  },
  setup() {
    const movieLength = ref(0);
    const { state, getters, dispatch } = useStore();
    const { sortedData, sortBy } = sortByValue();
    const moviesData = computed(() => getters.getMovies);
    const error = computed(() => state.error);

    const handleCLick = (type) => {
      sortBy(type);
    };

    onMounted(() => {
      dispatch('loadMovies');
      movieLength.value = moviesData.value.length;
    });

    watch(
      () => sortedData.value,
      (newValue) => {
        moviesData.value = newValue;
        movieLength.value = newValue.length;
      },
    );
    return { moviesData, handleCLick, error };
  },
});
</script>
