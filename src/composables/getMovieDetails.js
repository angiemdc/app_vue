import { ref } from 'vue';

import movieData from '../utilis/mock_data';
import { delayPromise } from '../utilis/utilis';

const getMovieDetails = () => {
  const movieDetails = ref([]);
  const error = ref('');
  const getMovie = async (idRef) => {
    try {
      const data = await delayPromise(() => movieData, 1000);
      if (!data.length) throw Error('no data available');
      const filteredMovie = data.filter(({ id }) => id === idRef);
      const [movie] = filteredMovie;
      movieDetails.value = movie;
    } catch (err) {
      error.value = err.message;
      console.error(err);
    }
  };
  return { movieDetails, error, getMovie };
};

export default getMovieDetails;
