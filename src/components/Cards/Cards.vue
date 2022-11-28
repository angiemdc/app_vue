<template>
    <section class="cards__component">
      <ul class="cards"  v-if="data?.length > 0">
        <li  v-for= "item in data" :key="item.id">
          <CardComp :movieData="item"/>
        </li>
      </ul>
      <div class="noItems" v-else>
        <h1>No films found</h1>
      </div>
    </section>
</template>

<script>
import './cards.scss';
import CardComp from '../Card/Card.vue';

export default {
  name: 'cards-layout',
  components: {
    CardComp,
  },
  props: {
    data: {
      type: Array,
    },
  },
};
</script>
