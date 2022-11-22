<template>
    <div className='logoImg'>
       <LogoCompany atl="logo" />
    </div>
</template>

<script>
import './logo.scss';
// eslint-disable-next-line import/no-unresolved
import LogoCompany from 'src/assets/images/netflixroulette.svg';

export default {
  name: 'logo-company',
  components: {
    LogoCompany,
  },
};
</script>
