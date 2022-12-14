<template>
  <header-movie>
    <template v-slot:navSection >
      <button role="link" @click="$router.push('/')" class="btn__link">
        <img :src="search" alt="movieImg"  />
      </button>
    </template>
    <template v-slot:hederSection >
      <description-comp class=""/>
    </template>
  </header-movie>
  <section class="section_content">
    <div v-if="error">{{error}}</div>
    <cards-layout :data="moviesData"/>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import HeaderMovie from '@/components/Header/Header.vue';
import DescriptionComp from '@/components/Description/Description.vue';
import CardsLayout from '@/components/Cards/Cards.vue';
import getMoviesData from '@/composables/getMoviesData';
import { searchIcon } from '../utilis/mock_data';
import './homeView.scss';

export default defineComponent({
  name: 'DetailsView',
  components: {
    HeaderMovie, DescriptionComp, CardsLayout,
  },
  setup() {
    const search = ref(searchIcon);
    const { moviesData, error, load } = getMoviesData();
    load();

    return { search, moviesData, error };
  },
});
</script>
