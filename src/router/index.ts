import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageStops from '@/components/PageStops.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: PageHome },
  { path: '/stops', component: PageStops },
]

const router = createRouter({
  linkExactActiveClass: 'border-2 border-bottom border-primary text-secondary',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
