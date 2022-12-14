<template>
<div class="container">
  <router-view/>
  <footer-movie/>
</div>
</template>

<script>
import './app.scss';
import FooterMovie from '@/components/Footer/Footer.vue';

export default {
  components: { FooterMovie },
};

</script>
