import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsPage.vue')
  },
  {
    path: '/quality',
    name: 'Quality',
    component: () => import('../views/QualityPage.vue')
  },
  {
    path: '/franchise',
    name: 'Franchise',
    component: () => import('../views/FranchisePage.vue')
  },
  {
    path: '/stores',
    name: 'Stores',
    component: () => import('../views/StoresPage.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 112,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router
