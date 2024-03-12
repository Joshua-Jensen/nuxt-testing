import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/test',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'contact',
      path: '/test/contact',
      component: () => import('~/pages/Contact.vue')
    },
    {
      name: 'discover',
      path: '/test/discover',
      component: () => import('~/pagers/Discover.vue')
    },
    {
      name: 'schools',
      path: '/test/schools/:schoolId',
      component: () => import('~/pages/Schools.vue')
    },
    {
      name: 'services',
      path: '/test/services',
      component: () => import('~/pages/Services.vue')
    }
  ],
}