import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';
import notFoundView from '../views/NotFoundVIew.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: DetailsView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: notFoundView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
