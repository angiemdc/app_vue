<template>
    <div>
      <div class='customCard' v-card-size="{singleCard}">
        <div>
          <router-link :to="{name:'Details', params:{id:id}}">
            <v-lazy-image
              :src="image"
              :src-placeholder="imgPlaceholder"
              alt="movieImg"
              class="card__img"
              @error="handleError"
              />
          </router-link>
        </div>
        <div class="card__info">
          <h4 class="card__text">{{title}}</h4>
          <p class="card__text">{{yearwithFormat}}</p>
          <p class="card__text">{{movieFormat}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import {
  reactive, ref,
} from 'vue';
import './card.scss';
import VLazyImage from 'v-lazy-image';
import { testCart } from '../../utils/mock_data';
import { movieTypesFormat, yearFormat } from '../../utils/utils';

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
    imgPlaceholder: testCart.image,
  },
  setup(props) {
    const data = reactive(props.movieData);
    const {
      title, movieType, year, id,
    } = data;
    const image = ref(data.image);
    const handleError = () => {
      image.value = props.imgPlaceholder;
    };

    const movieFormat = movieTypesFormat(movieType);
    const yearwithFormat = yearFormat(year);

    return {
      title, movieFormat, image, yearwithFormat, id, handleError,
    };
  },
};
</script>

<style scoped>
  .v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
  }
  .v-lazy-image-loaded {
    filter: blur(0);
  }
</style>
