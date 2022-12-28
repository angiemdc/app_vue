import { ref, onMounted } from 'vue';

export const BASE_URL = ' http://localhost:3001/moviesData';
export const limit = 8;

const getMoviesData = () => {
  const moviesData = ref([]);
  const error = ref('');
  const loading = ref(true);

  const load = async () => {
    try {
      const response = await fetch(`${BASE_URL}?_limit=${limit}`);
      const data = await response.json();
      if (!data.length) throw Error('no data available');
      moviesData.value = data;
      loading.value = false;
    } catch (err) {
      error.value = err.message;
      console.error(err);
      loading.value = false;
    }
  };
  onMounted(() => load());

  return { moviesData, error, loading };
};

export default getMoviesData;
