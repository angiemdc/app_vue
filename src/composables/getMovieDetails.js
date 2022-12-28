import { ref } from 'vue';
import { BASE_URL } from './getMoviesData';

const getMovieDetails = () => {
  const movieDetails = ref([]);
  const error = ref('');
  const getMovie = async (idRef) => {
    try {
      const response = await fetch(`${BASE_URL}?id=${idRef}`);
      const data = await response.json();
      if (!data.length) throw Error('no data available');
      const [muvie] = data;
      movieDetails.value = muvie;
    } catch (err) {
      error.value = err.message;
      console.error(err);
    }
  };
  return { movieDetails, error, getMovie };
};

export default getMovieDetails;
