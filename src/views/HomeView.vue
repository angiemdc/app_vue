<template>
  <header-movie>
    <template v-slot:hederSection >
      <div class="search">
        <h1 class='heading-1'>Find your Movie</h1>
        <SearchInput v-model="searchItem" @input="handleInput" @handleSubmit="handleSubmit"/>
        <SearchFilter @handleSerchBy="hanbleSerchBy"/>
      </div>
    </template>
  </header-movie>
  <FoundMovie :numberMovie="moviesData.length"  @handleSerchBy="handleCLick"/>
  <section class="section_content">
    <div v-if="error">{{error}}</div>
    <cards-layout :data="moviesData"/>
  </section>
</template>

<script>
import {
  defineComponent, ref, onMounted, computed,
} from 'vue';
import { useStore } from 'vuex';
import HeaderMovie from '@/components/Header/Header.vue';
import FoundMovie from '@/components/Found/Found.vue';
import SearchInput from '@/components/Search/Search.vue';
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';
import CardsLayout from '@/components/Cards/Cards.vue';
import './homeView.scss';

export default defineComponent({

  name: 'HomeView',
  components: {
    HeaderMovie, FoundMovie, SearchInput, SearchFilter, CardsLayout,
  },
  setup() {
    const movieLength = ref(0);
    const serchBy = ref('title');
    const { state: { moviesModule }, getters, dispatch } = useStore();
    const moviesData = computed(() => getters['moviesModule/getMovies']);
    const error = computed(() => moviesModule.error);
    const hanbleSerchBy = (type) => {
      serchBy.value = type;
    };
    const handleCLick = (type) => {
      dispatch('moviesModule/sortByValue', type);
      movieLength.value = moviesData.value.length;
    };

    const handleSubmit = (value) => {
      dispatch('moviesModule/filterByTypes', { typicode: value, typeToSearch: serchBy.value });
      movieLength.value = moviesData.value.length;
    };

    const handleInput = (value) => {
      const valueInput = value.data;
      if (valueInput)handleSubmit(valueInput);
    };

    onMounted(() => {
      dispatch('moviesModule/loadMovies');
      movieLength.value = moviesData.value.length;
    });
    return {
      moviesData,
      handleCLick,
      error,
      handleSubmit,
      hanbleSerchBy,
      handleInput,
    };
  },
});
</script>
