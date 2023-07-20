import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'houses'
    },
    {
      path: '/houses',
      name: 'Houses',
      component: HomeView
    },
    {
      path: '/houses/new-listing',
      name: 'NewListing',
      component: () => import('../views/NewListingView.vue')
    },
    {
      path: '/houses/:id',
      name: 'SingleListing',
      component: () => import('../views/SingleListingView.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
