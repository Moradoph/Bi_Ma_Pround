import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        layout: "Main"
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
      meta:{
        layout: "Main"
      }

    },
  ]
})

export default router
