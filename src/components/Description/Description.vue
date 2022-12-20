<template>
    <section class="description__section">
      <img :src="movieDetails.image" alt="movieImg" class="card__img"/>
      <div class="description">
        <h1 class="heading-1">{{movieDetails.title}}</h1>
        <div class="description__rating">
          <span class="heading-1">{{movieDetails.rating}}</span>
        </div>
        <h3 class="description__type heading-3">{{movieDetails.movieType}}</h3>
        <h2 class="description__year heading-2 text--red">{{movieDetails.year}}</h2>
        <h2 class="description__runtime heading-2 text--red">{{movieDetails.runtime}}</h2>
        <p class="description__text">{{movieDetails.description}}</p>
      </div>
    </section>
</template>

<script>
import './description.scss';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import getMovieDetails from '@/composables/getMovieDetails';
// import { testCart } from '../../utilis/mock_data';

export default {
  name: 'description-comp',
  props: ['movieId'],
  setup(props) {
    const idMovie = ref(props.movieId);
    const route = useRoute();
    const { movieDetails, getMovie } = getMovieDetails();
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
    getMovie(props.movieId);
    return {
      movieDetails,
    };
  },
};
</script>
