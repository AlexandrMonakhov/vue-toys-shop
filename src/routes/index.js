import { createRouter, createWebHashHistory } from 'vue-router';

import { Home, AboutItem } from '@/pages';

const history = createWebHashHistory();

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:alias',
    name: 'alias',
    component: AboutItem
  },
];

export const router = createRouter({ history: history, routes });