<template>
    <section class="description__section" v-if="movieDetails?.title">
      <v-lazy-image :src="movieDetails.image" alt="movieImg" class="card__img" />
      <div class="description">
        <h1 class="heading-1">{{movieDetails.title}}</h1>
        <div class="description__rating">
          <span class="heading-1">{{movieDetails.rating}}</span>
        </div>
        <h3 class="description__type heading-3">
          {{movieTypesFormat((movieDetails.movieType))}}
        </h3>
        <h2 class="description__year heading-2 text--red">
         {{yearFormat(movieDetails.year)}}
        </h2>
        <h2 class="description__runtime heading-2 text--red">{{movieDetails.runtime}}</h2>
        <p class="description__text">{{movieDetails.description}}</p>
      </div>
    </section>
    <section v-if="!movieDetails?.title">
      <h1 class="heading-1">Loading ...</h1>
    </section>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import VLazyImage from 'v-lazy-image';
import { isEmpty } from 'lodash';

import getMovieDetails from '@/composables/getMovieDetails';
import './description.scss';
import { movieTypesFormat, yearFormat } from '../../utils/utils';

export default {
  name: 'description-comp',
  components: {
    VLazyImage,
  },
  props: ['movieId', 'genre', 'getGenreValue'],
  emit: ['getGenreValue'],
  setup(props) {
    const idMovie = ref('');
    const route = useRoute();
    const { movieDetails, getMovie } = getMovieDetails();
    const { getters } = useStore();
    watch(
      () => route.params,
      (newValue, oldValue) => {
        if (newValue !== oldValue) idMovie.value = newValue.id;
      },
    );
    watch(
      () => idMovie.value,
      (newValue, oldValue) => {
        if (oldValue !== newValue) getMovie(newValue);
      },
    );
    watch(
      () => movieDetails.value,
      (newValue, oldValue) => {
        if (oldValue !== newValue)props.getGenreValue(movieDetails);
      },
    );

    onMounted(() => {
      const selectedMovie = getters['moviesModule/selectedMovie'] ? (getters['moviesModule/selectedMovie'](Number(props.movieId))) : getters.selectedMovie(Number(props.movieId));
      if (!isEmpty(selectedMovie)) {
        movieDetails.value = selectedMovie;
      } else {
        getMovie(props.movieId);
      }
    });

    return {
      movieDetails, movieTypesFormat, yearFormat,
    };
  },
};
</script>
