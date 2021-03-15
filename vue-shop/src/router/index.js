import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
