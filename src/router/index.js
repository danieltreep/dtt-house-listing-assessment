import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/houses/new-listing',
      name: 'NewListing',
      component: () => import('@/views/NewListingView.vue')
    },
    {
      path: '/houses/:id',
      name: 'SingleListing',
      component: () => import('@/views/SingleListingView.vue'),
      props: true
    },
    {
      path: '/houses/:id/edit',
      name: 'EditListing',
      component: () => import('@/views/EditListingView.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/my-listings',
      name: 'MyListings',
      component: () => import('@/views/MyListingsView.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('@/views/FavoritesView.vue')
    }
  ]
})

export default router
