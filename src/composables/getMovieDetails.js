import { ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from './getMoviesData';

const getMovieDetails = () => {
  const movieDetails = ref([]);
  const error = ref('');
  const loadingSort = ref(true);
  const getMovie = async (idRef) => {
    try {
      const { isFetching, error: errormessage, data } = await axios.get(`${BASE_URL}?id=${idRef}`);
      if (!data.length || errormessage) throw Error('no data available');
      const [muvie] = data;
      movieDetails.value = muvie;
      loadingSort.value = isFetching;
    } catch (err) {
      error.value = err.message;
      console.error(err);
      loadingSort.value = false;
    }
  };
  return {
    movieDetails, error, getMovie, loadingSort,
  };
};

export default getMovieDetails;
