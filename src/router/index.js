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
    // 总是滚动到顶部，确保用户体验一致
    // 不使用savedPosition，避免刷新时跳到之前的位置
    return { top: 0, behavior: 'instant' }
  }
})

export default router
