<template>
  <section class='search__filters'>
      <h5 class="heading-5">{{serchTitle}}</h5>
      <my-button
        :primary="isActive"
        size="medium"
        @click="handleClick('primaryBtn',$event)"
        :label="primaryBtn"
      />
      <my-button
        :primary="!isActive"
        size="medium"
        @click="handleClick('secondaryBtn',$event)"
        :label="secondaryBtn"
      />
  </section>
</template>

<script>
import './searchfilter.scss';
import MyButton from '../Button/Button.vue';

export default {
  name: 'search-by',
  props: {
    serchTitle: {
      type: String,
      default: 'Search by',
    },
    primaryBtn: {
      type: String,
      default: 'Title',
    },
    secondaryBtn: {
      type: String,
      default: 'gengre',
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
  components: { MyButton },
  emits: ['handleSerchBy'],
  methods: {
    handleClick(btn) {
      this.isActive = !this.isActive;
      console.log(this.isActive, this, this[btn]);
      this.$emit('handleSerchBy', this[btn]);
    },
  },
};
</script>
