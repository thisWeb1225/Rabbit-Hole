import {createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import Chapter1 from '@/view/Chapter1.vue';
import Chapter2 from '@/view/Chapter2.vue';
import Chapter3 from '@/view/Chapter3.vue';
import Refer from '@/view/Refer.vue';
import RabbitHole from '@/view/RabbitHole.vue'

// const routes = [
//   {
//     path: '/Rabbit-Hole/',
//     component: Home,
//   },
//   {
//     path: '/Rabbit-Hole/chapter1',
//     component: Chapter1,
//   },
//   {
//     path: '/Rabbit-Hole/chapter2',
//     component: Chapter2,
//   },
//   {
//     path: '/Rabbit-Hole/chapter3',
//     component: Chapter3,
//   },
//   {
//     path: '/Rabbit-Hole/refer',
//     component: Refer
//   },
//   {
//     path: '/Rabbit-Hole/team',
//     component: RabbitHole
//   }
// ];

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
    path: '/team',
    component: RabbitHole
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
