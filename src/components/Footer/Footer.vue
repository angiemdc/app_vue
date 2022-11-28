<template>
  <footer class='footer'>
    <Logo />
  </footer>
</template>

<script>
import './footer.scss';
import Logo from '../Logo/Logo.vue';

export default {
  name: 'footer-movie',
  components: {
    Logo,
  },
  emits: [],
};
</script>
