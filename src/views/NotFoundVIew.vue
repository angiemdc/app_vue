<template>
  <header-movie>
    <template v-slot:hederSection >
      <div class="search">
        <h1 class='heading-1'>Find your Movie</h1>
      </div>
    </template>
  </header-movie>
  <section class="section_content not_found">
    <h1 class="heading-1">Ups... page not found</h1>
    <Button
        role="link"
        @click="$router.push('/')"
        primary="true"
        size="medium"
        label="come back to home"/>
  </section>
</template>

<script>
import {
  defineComponent,
} from 'vue';
import HeaderMovie from '@/components/Header/Header.vue';
import Button from '@/components/Button/Button.vue';
import './homeView.scss';

export default defineComponent({

  name: 'HomeView',
  components: {
    HeaderMovie, Button,
  },
  setup() {
    return {

    };
  },
});
</script>
