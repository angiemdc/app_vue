/* eslint-disable no-param-reassign */
import { App } from 'vue';

import FooterMovie from './components/Footer/Footer.vue';
import SearchFilter from './components/SearchFilter/SearchFilter.vue';

export default {
  install: (app:App) => {
    app.component('footer-movie', FooterMovie);
    app.component('search-filter', SearchFilter);
    app.directive('card-size', (el, binding, vnode) => {
      const { singleCard } = binding.value;
      if (singleCard) {
        const width = '50%';
        el.style.width = width;
      }
    });
  },
};
