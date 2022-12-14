<template>
  <div className='logoImg'>
    <img :src="logo" alt="movieImg"  />
  </div>
</template>

<script>
import { logoMovie } from '../../utilis/mock_data';

export default {
  name: 'logo-company',
  data() {
    return {
      logo: logoMovie,
    };
  },

};
</script>
