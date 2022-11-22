<template>
  <article>
    <section>
      <search-input
      @handleKeyDown="onHandleKeyDown"
      @handleSubmit="onHandleSubmit"
      placeholder="holi"/>
    </section>
  </article>
</template>

<script>
import './page.css';
import SearchInput from './Search.vue';

export default {
  name: 'my-page',
  components: { SearchInput },
  methods: {
    onHandleKeyDown(e) {
      console.log(e);
      // if (e.key === 'Enter') {
      //   console.log(this);
      // }
    },
    onHandleSubmit() {
      console.log(this);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
