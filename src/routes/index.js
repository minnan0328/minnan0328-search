import Vue from 'vue'
import VueRouter from 'vue-router'
import Caplitomo from './../components/Caplitomo/Caplitomo.vue'
Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/Caplitomo' },
  { path: '/Caplitomo', component: Caplitomo},

]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
export{
  router
}