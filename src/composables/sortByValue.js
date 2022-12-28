import { ref } from 'vue';

import { BASE_URL, limit } from './getMoviesData';

const sortByValue = () => {
  const sortedData = ref([]);
  const error = ref('');
  const loadingSort = ref(true);

  const sortBy = async (valueToSort) => {
    try {
      const response = await fetch(`${BASE_URL}?_sort=${valueToSort}&_limit=${limit}`);
      const data = await response.json();
      if (!data.length) throw Error('no data available');
      sortedData.value = data;
      loadingSort.value = false;
    } catch (err) {
      error.value = err.message;
      console.error(err);
      loadingSort.value = false;
    }
  };
  return {
    sortedData, error, loadingSort, sortBy,
  };
};

export default sortByValue;
