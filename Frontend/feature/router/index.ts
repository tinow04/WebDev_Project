import { createRouter, createWebHistory } from 'vue-router'
import Game from '../game/src/pages/Game.vue'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Game,
    },
  ],
})

export default router
