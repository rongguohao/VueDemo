import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/login.vue'
import HomeComponent from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/home',
    component: HomeComponent
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  return next()
})
export default router
