/* eslint-disable no-param-reassign */
import { App } from 'vue';

import FooterMovie from './components/Footer/Footer.vue';

export default {
  install: (app:App) => {
    app.component('footer-movie', FooterMovie);
  },
};
