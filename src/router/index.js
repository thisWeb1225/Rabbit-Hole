import {createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import Chapter1 from '@/view/Chapter1.vue';
import Chapter2 from '@/view/Chapter2.vue';
import Chapter3 from '@/view/Chapter3.vue';
import Refer from '@/view/Refer.vue';
import RabbitHole from '@/view/RabbitHole.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/chapter1',
    component: Chapter1,
  },
  {
    path: '/chapter2',
    component: Chapter2,
  },
  {
    path: '/chapter3',
    component: Chapter3,
  },
  {
    path: '/refer',
    component: Refer
  },
  {
    path: '/rabbitHole',
    component: RabbitHole
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
