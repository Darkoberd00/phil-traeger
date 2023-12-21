import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectView from '@/views/ProjectView.vue'
import PhilTraeger from "@/views/project/Phil-Traeger.vue";
import AmazingRoulette from "@/views/project/Amazing-Roulette.vue";

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/project/phil-traeger',
      name: 'phil-traeger',
      component: PhilTraeger
    },
    {
      path: '/project/amazing-roulette',
      name: 'amazing-roulette',
      component: AmazingRoulette
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
