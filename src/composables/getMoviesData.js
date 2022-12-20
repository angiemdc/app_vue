import { ref } from 'vue';

import movieData from '../utilis/mock_data';
import { delayPromise } from '../utilis/utilis';

const getMoviesData = () => {
  const moviesData = ref([]);
  const error = ref('');
  const load = async () => {
    try {
      const data = await delayPromise(() => movieData, 1000);
      if (!data.length) throw Error('no data available');
      moviesData.value = data;
    } catch (err) {
      error.value = err.message;
      console.error(err);
    }
  };
  return { moviesData, error, load };
};

export default getMoviesData;
