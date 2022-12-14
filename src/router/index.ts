import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/details',
    name: 'details',
    component: DetailsView,
    props: { data: true },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: HomeView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
