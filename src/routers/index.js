"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../components/home/home.vue'
Vue.use(VueRouter)

const root = {path: '/', redirect: '/home'}
export const ComponentRouters = [
  {path: '/home', component: Home, name:'Home'}
]

export default new VueRouter({
  routes: [root].concat(ComponentRouters),
  mode: 'history',
  linkActiveClass: 'active'
})