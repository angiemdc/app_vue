<template>
  <header-movie>
    <template v-slot:navSection >
      <button role="link" @click="$router.push('/')" class="btn__link">
        <img :src="search" alt="movieImg"  />
      </button>
    </template>
    <template v-slot:hederSection >
      <description-comp
        :movieId="idMovie"
        :getGenreValue="getGenreValue"/>
    </template>
  </header-movie>
   <FoundMovie :movieGenre="getGenre"/>
  <section class="section_content">
    <div v-if="error">{{error}}</div>
    <cards-layout :data="data" :filterType="filterType"/>
  </section>
</template>

<script>
import {
  defineComponent, ref, watch,
} from 'vue';
import HeaderMovie from '@/components/Header/Header.vue';
import FoundMovie from '@/components/Found/Found.vue';
import DescriptionComp from '@/components/Description/Description.vue';
import CardsLayout from '@/components/Cards/Cards.vue';
import getMovieTypeValue from '@/composables/filterBymovieType';
import { searchIcon } from '../utils/mock_data';
import './homeView.scss';

export default defineComponent({
  name: 'DetailsView',
  components: {
    HeaderMovie, DescriptionComp, CardsLayout, FoundMovie,
  },
  props: ['id'],
  setup(props) {
    const search = ref(searchIcon);
    const getGenre = ref('');
    const {
      moviesData: data, error, getMovieType,
    } = getMovieTypeValue();
    const idMovie = ref(props.id);
    const getGenreValue = (value) => {
      getGenre.value = value.value.movieType;
    };

    watch(
      () => getGenre.value,
      (newValue, oldValue) => {
        if (oldValue !== newValue)getMovieType(newValue);
      },
    );
    return {
      search,
      data,
      error,
      idMovie,
      getGenreValue,
      getGenre,
    };
  },
});
</script>
