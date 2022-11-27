<template>
 <header class='header header-withImage'>
    <div class='navSection'>
      <Logo />
      <slot name="navSection"></slot >
    </div>
    <slot name="hederSection"></slot>
  </header>
</template>

<script>
import './header.scss';
import Logo from '../Logo/Logo.vue';

export default {
  name: 'header-movie',
  components: {
    Logo,
  },
  emits: [],
};
</script>
