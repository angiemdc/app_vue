<template>
    <section class="description__section">
      <img :src="image" alt="movieImg" class="card__img"/>
      <div class="description">
        <h1>{{title}}</h1>
        <span class="description__rating">{{rating}}</span>
        <p class="description__type">{{movieType}}</p>
        <p class="description__year text--red">{{year}}</p>
        <p class="description__runtime text--red">{{runtime}}</p>
        <p class="description__text">{{description}}</p>
      </div>
    </section>
</template>

<script>
import './description.scss';
import { testCart } from '../../utilis/mock_data';

export default {
  name: 'description-comp',
  props: {
    movieData: {
      type: Object,
      default() {
        return { ...testCart };
      },
    },
  },
  setup(props) {
    const data = { ...props.movieData };
    const {
      title, movieType, image, year, rating, id, description, runtime,
    } = data;
    return {
      title, movieType, image, year, rating, id, description, runtime,
    };
  },
};
</script>
