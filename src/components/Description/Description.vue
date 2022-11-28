<template>
    <section class="description__section">
      <img :src="image" alt="movieImg" class="card__img"/>
      <div class="description">
        <h1 class="heading-1">{{title}}</h1>
        <div class="description__rating">
          <span class="heading-1">{{rating}}</span>
        </div>
        <h3 class="description__type heading-3">{{movieType}}</h3>
        <h2 class="description__year heading-2 text--red">{{year}}</h2>
        <h2 class="description__runtime heading-2 text--red">{{runtime}}</h2>
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
