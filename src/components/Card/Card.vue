<template>
    <div>
      <div class='customCard'>
        <div>
          <router-link :to="{name:'Details', params:{id:id}}">
          <img :src="image" alt="movieImg" class="card__img" />
          </router-link>
        </div>
        <div class="card__info">
          <h4 class="card__text">{{title}}</h4>
          <p class="card__text">{{year}}</p>
          <p class="card__text">{{movieType}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import './card.scss';
import { testCart } from '../../utilis/mock_data';

export default {
  name: 'card-comp',
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
      title, movieType, image, year, id,
    } = data;
    return {
      title, movieType, image, year, id,
    };
  },
};
</script>
