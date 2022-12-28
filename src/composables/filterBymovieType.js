import { ref } from 'vue';

import { BASE_URL, limit } from './getMoviesData';

const getMovieTypeValue = () => {
  const moviesData = ref([]);
  const error = ref('');
  const loadingSort = ref(true);

  const getMovieType = async (movieType) => {
    try {
      const response = await fetch(`${BASE_URL}?movieType=${movieType}&_limit=${limit}`);
      const data = await response.json();
      if (!data.length) throw Error('no data available');
      moviesData.value = data;
      loadingSort.value = false;
    } catch (err) {
      error.value = err.message;
      console.error(err);
      loadingSort.value = false;
    }
  };

  return {
    moviesData, error, loadingSort, getMovieType,
  };
};

export default getMovieTypeValue;
