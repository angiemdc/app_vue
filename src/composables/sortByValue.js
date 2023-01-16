import { ref, useFetch } from 'vue';
import axios from 'axios';
import { BASE_URL, limit } from './getMoviesData';

const sortByValue = () => {
  const sortedData = ref([]);
  const errormessage = ref('');
  const loadingSort = ref(true);

  const sortBy = async (valueToSort) => {
    try {
      const { isFetching, error, data } = await axios(`${BASE_URL}?_sort=${valueToSort}&_limit=${limit}`);
      if (!data.length || error) throw Error('no data available');
      sortedData.value = data;
      loadingSort.value = isFetching;
    } catch (err) {
      errormessage.value = err.message;
      console.error(err);
      loadingSort.value = false;
    }
  };
  return {
    sortedData, errormessage, loadingSort, sortBy,
  };
};

export default sortByValue;
