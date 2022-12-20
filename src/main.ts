import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.globalProperties.$filters = {
  movieTypesFormat(movieTypes:[string]) { return movieTypes.join(', ').replace(/,(?=[^,]+$)/, ' &'); },
  yearFormat(date:string) {
    return new Date(date).getFullYear();
  },
};

app.use(store).use(router).mount('#app');
