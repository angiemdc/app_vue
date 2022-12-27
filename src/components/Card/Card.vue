<template>
    <div>
      <div class='customCard' v-card-size="{singleCard}">
        <div>
          <router-link :to="{name:'Details', params:{id:id}}">
            <v-lazy-image :src="image" alt="movieImg" class="card__img" />
          </router-link>
        </div>
        <div class="card__info">
          <h4 class="card__text">{{title}}</h4>
          <p class="card__text">{{$filters.yearFormat(year)}}</p>
          <p class="card__text">{{$filters.movieTypesFormat(movieType)}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import './card.scss';
import VLazyImage from 'v-lazy-image';
import { testCart } from '../../utilis/mock_data';

export default {
  name: 'card-comp',
  components: {
    VLazyImage,
  },
  props: {
    movieData: {
      type: Object,
      default() {
        return { ...testCart };
      },
    },
    singleCard: {
      type: Boolean,
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
