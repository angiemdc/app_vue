import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyPlugin from './MyPlugin';

const app = createApp(App);

app.config.globalProperties.$filters = {
  movieTypesFormat(movieTypes:[string]) { return movieTypes?.join(', ')?.replace(/,(?=[^,]+$)/, ' &'); },
  yearFormat(date:string) {
    return new Date(date).getFullYear();
  },
};

app.use(MyPlugin).use(store).use(router).mount('#app');
