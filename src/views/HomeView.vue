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
  <FoundMovie :numberMovie="moviesData.length"/>
  <section class="section_content">
    <div v-if="error">{{error}}</div>
    <cards-layout :data="moviesData"/>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

import HeaderMovie from '@/components/Header/Header.vue';
import FoundMovie from '@/components/Found/Found.vue';
import SearchInput from '@/components/Search/Search.vue';
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';
import CardsLayout from '@/components/Cards/Cards.vue';
import getMoviesData from '@/composables/getMoviesData';
import sortByValue from '@/composables/sortByValue';
import './homeView.scss';

export default defineComponent({

  name: 'HomeView',
  components: {
    HeaderMovie, FoundMovie, SearchInput, SearchFilter, CardsLayout,
  },
  setup() {
    const { moviesData, error } = getMoviesData();
    const {sortedData, sortBy} = sortByValue();
    console.log(sortedData);
    return { moviesData, error };
  },
});
</script>
